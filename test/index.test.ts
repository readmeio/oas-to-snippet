import type { HarRequest } from '@readme/httpsnippet';
import type { SupportedLanguages } from 'supportedLanguages';
import chai, { expect } from 'chai';
import { jestSnapshotPlugin } from 'mocha-chai-jest-snapshot';

import * as extensions from '@readme/oas-extensions';
import Oas from 'oas';
import harExamples from 'har-examples';

import { oasToSnippet, supportedLanguages } from '../src';

import queryEncodedHAR from './__datasets__/query-encoded.har.json';
import petstoreOas from '@readme/oas-examples/3.0/json/petstore.json';
import fileUploads from '@readme/oas-examples/3.0/json/file-uploads.json';
import owlbert from './__datasets__/owlbert.dataurl.json';
import owlbertShrub from './__datasets__/owlbert-shrub.dataurl.json';

chai.use(jestSnapshotPlugin());

const petstore = Oas.init(petstoreOas);

const oasUrl = 'https://example.com/openapi.json';
const formData = { path: { petId: 123 } };

describe('oas-to-snippet', function () {
  describe('HAR overrides', function () {
    it('should be able to accept a har override', function () {
      const { code } = oasToSnippet(null, null, null, null, 'node', null, harExamples.full);
      expect(code).to.equal(`const { URLSearchParams } = require('url');
const fetch = require('node-fetch');
const encodedParams = new URLSearchParams();

encodedParams.set('foo', 'bar');

const url = 'https://httpbin.org/post?foo=bar&foo=baz&baz=abc&key=value';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
    cookie: 'foo=bar; bar=baz'
  },
  body: encodedParams
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));`);
    });

    it('should treat overrides as if they are not yet encoded', function () {
      const { code } = oasToSnippet(null, null, null, null, 'node', null, queryEncodedHAR as unknown as HarRequest);

      expect(code).to.equal(`const fetch = require('node-fetch');

const url = 'https://httpbin.org/anything?startTime=2019-06-13T19%3A08%3A25.455Z&endTime=2015-09-15T14%3A00%3A12-04%3A00';
const options = {method: 'GET'};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));`);
    });
  });

  it('should return falsy values for an unknown language', function () {
    // @ts-expect-error Testing an improper typing case here.
    const codeSnippet = oasToSnippet(petstore, petstore.operation('/pet/{petId}', 'get'), {}, {}, 'css', oasUrl);

    expect(codeSnippet).to.deep.equal({
      code: '',
      highlightMode: false,
    });
  });

  it('should pass through values to code snippet', function () {
    const { code } = oasToSnippet(petstore, petstore.operation('/pet/{petId}', 'get'), formData, {}, 'node', oasUrl);

    expect(code).to.contain('http://petstore.swagger.io/v2/pet/123');
  });

  it('should pass through json values to code snippet', function () {
    const { code } = oasToSnippet(
      petstore,
      petstore.operation('/pet', 'post'),
      { body: { id: '123' } },
      {},
      'node',
      oasUrl
    );

    expect(code).to.contain("body: JSON.stringify({id: '123'}");
  });

  it('should pass through form encoded values to code snippet', function () {
    const { code } = oasToSnippet(
      petstore,
      petstore.operation('/pet/{petId}', 'post'),
      {
        path: { petId: 123 },
        formData: {
          id: '123',
          name: 'buster',
        },
      },
      {},
      'node',
      oasUrl
    );

    expect(code).to.contain("encodedParams.set('id', '123');");
    expect(code).to.contain("encodedParams.set('name', 'buster');");
    expect(code).to.contain('body: encodedParams');
  });

  it('should have special indents for curl snippets', function () {
    const oas = Oas.init({
      paths: {
        '/body': {
          get: {
            requestBody: {
              content: {
                'application/x-www-form-urlencoded': {
                  schema: {
                    type: 'object',
                    required: ['a'],
                    properties: {
                      a: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    const { code } = oasToSnippet(
      oas,
      oas.operation('/body', 'get'),
      { formData: { a: 'test', b: [1, 2, 3] } },
      {},
      'curl'
    );

    expect(code).to.equal(`curl --request GET \\
     --url https://example.com/body \\
     --header 'content-type: application/x-www-form-urlencoded' \\
     --data a=test \\
     --data 'b=1,2,3'`);
  });

  it('should not contain proxy url', function () {
    const oas = new Oas({
      ...JSON.parse(JSON.stringify(petstoreOas)),
      [extensions.PROXY_ENABLED]: true,
    });

    const { code } = oasToSnippet(oas, oas.operation('/pet/{petId}', 'post'), formData, {}, 'node', oasUrl);

    expect(code).to.contain('http://petstore.swagger.io/v2/pet/123');
    expect(code).not.to.contain('try.readme.io');
  });

  it('should not contain `withCredentials` in javascript snippets', function () {
    const { code } = oasToSnippet(petstore, petstore.operation('/pet/{petId}', 'post'), {}, {}, 'javascript', oasUrl);

    expect(code).not.to.match(/withCredentials/);
  });

  it('should return with unhighlighted code', function () {
    const { code } = oasToSnippet(petstore, petstore.operation('/pet/{petId}', 'post'), {}, {}, 'javascript', oasUrl);

    expect(code).not.to.match(/cm-s-tomorrow-night/);
  });

  describe('multipart/form-data handlings', function () {
    let formDataOas;

    beforeEach(function () {
      formDataOas = Oas.init({
        servers: [{ url: 'https://example.com' }],
        paths: {
          '/multipart': {
            post: {
              security: [
                {
                  bearerAuth: [],
                },
              ],
              requestBody: {
                $ref: '#/components/requestBodies/payload',
              },
              responses: {
                default: {
                  description: 'OK',
                },
              },
            },
          },
        },
        components: {
          requestBodies: {
            payload: {
              required: true,
              content: {
                'multipart/form-data': {
                  schema: {
                    type: 'object',
                    properties: {
                      orderId: {
                        type: 'integer',
                      },
                      userId: {
                        type: 'integer',
                      },
                      documentFile: {
                        type: 'string',
                        format: 'binary',
                      },
                    },
                  },
                },
              },
            },
          },
          securitySchemes: {
            bearerAuth: {
              type: 'apiKey',
              name: 'Authorization',
              in: 'header',
            },
          },
        },
      });
    });

    it('should convert a multipart/form-data operation into a proper snippet that uses the original file', function () {
      const { code } = oasToSnippet(
        formDataOas,
        formDataOas.operation('/multipart', 'post'),
        {
          body: { orderId: 10, userId: 3232, documentFile: owlbert },
        },
        {},
        'curl',
        oasUrl
      );

      expect(code).to.equal(`curl --request POST \\
     --url https://example.com/multipart \\
     --header 'content-type: multipart/form-data' \\
     --form orderId=10 \\
     --form userId=3232 \\
     --form documentFile=@owlbert.png`);
    });
  });

  it('should not double-encode query strings', function () {
    const startTime = '2019-06-13T19:08:25.455Z';
    const endTime = '2015-09-15T14:00:12-04:00';

    const oas = Oas.init({
      paths: {
        '/': {
          get: {
            parameters: [
              {
                explode: true,
                in: 'query',
                name: 'startTime',
                schema: {
                  type: 'string',
                },
                style: 'form',
              },
              {
                explode: true,
                in: 'query',
                name: 'endTime',
                schema: {
                  type: 'string',
                },
                style: 'form',
              },
            ],
          },
        },
      },
    });

    const snippet = oasToSnippet(
      oas,
      oas.operation('/', 'get'),
      { query: { startTime, endTime } },
      {},
      'javascript',
      oasUrl
    );

    expect(snippet.code).to.contain(encodeURIComponent(startTime));
    expect(snippet.code).to.contain(encodeURIComponent(endTime));
    expect(snippet.code).not.to.contain(encodeURIComponent(encodeURIComponent(startTime)));
    expect(snippet.code).not.to.contain(encodeURIComponent(encodeURIComponent(endTime)));
  });

  it('should handle `multipart/form-data` payloads of multiple files', function () {
    const oas = Oas.init(fileUploads);

    const snippet = oasToSnippet(
      oas,
      oas.operation('/anything/multipart-formdata', 'put'),
      { body: { filename: [owlbert, owlbertShrub] } },
      {},
      'node'
    );

    expect(snippet.code).to.contain("formData.append('filename', fs.createReadStream('owlbert.png'));");
    expect(snippet.code).to.contain("formData.append('filename', fs.createReadStream('owlbert-shrub.png'));");
  });

  it('should handle a `multipart/form-data` payload where a file has an underscore in its name', function () {
    const oas = Oas.init(fileUploads);

    const snippet = oasToSnippet(
      oas,
      oas.operation('/anything/multipart-formdata', 'post'),
      {
        body: {
          documentFile: 'data:text/plain;name=lorem_ipsum.txt;base64,TG9yZW0gaXBzdW0gZG9sb3Igc2l0IG1ldA==',
        },
      },
      {},
      'node'
    );

    expect(snippet.code).to.contain("formData.append('documentFile', fs.createReadStream('lorem_ipsum.txt'));");
  });

  describe('supported languages', function () {
    // eslint-disable-next-line mocha/no-setup-in-describe
    Object.keys(supportedLanguages).forEach((lang: keyof SupportedLanguages) => {
      describe(lang, function () {
        // eslint-disable-next-line mocha/no-setup-in-describe
        const targets = Object.keys(supportedLanguages[lang].httpsnippet.targets);

        it('should have a language definition', function () {
          expect(supportedLanguages[lang].highlight).to.be.a('string');
          expect(supportedLanguages[lang].httpsnippet.lang).to.be.a('string');
          expect(supportedLanguages[lang].httpsnippet.default).to.be.a('string');
          expect(supportedLanguages[lang].httpsnippet.targets).to.be.a('object');

          expect(targets.length).to.be.at.least(1);
          expect(targets).to.contain(supportedLanguages[lang].httpsnippet.default);
        });

        it('should generate code for the default target', function () {
          const snippet = oasToSnippet(petstore, petstore.operation('/pet', 'post'), formData, {}, lang);

          expect(snippet.code).toMatchSnapshot();
          expect(snippet.highlightMode).to.equal(supportedLanguages[lang].highlight);
        });

        describe('targets', function () {
          // eslint-disable-next-line mocha/no-setup-in-describe
          targets.forEach(target => {
            describe(target, function () {
              it('should be properly defined', function () {
                expect(supportedLanguages[lang].httpsnippet.targets[target].name).to.be.a('string');

                if ('opts' in supportedLanguages[lang].httpsnippet.targets[target]) {
                  expect(supportedLanguages[lang].httpsnippet.targets[target].opts).to.be.a('object');
                }

                if ('install' in supportedLanguages[lang].httpsnippet.targets[target]) {
                  expect(supportedLanguages[lang].httpsnippet.targets[target].install).to.be.a('string');
                }
              });

              it('should support snippet generation', function () {
                const snippet = oasToSnippet(
                  petstore,
                  petstore.operation('/user/login', 'get'),
                  {
                    query: { username: 'woof', password: 'barkbarkbark' },
                  },
                  {},
                  [lang, target],
                  oasUrl
                );

                expect(snippet.code).toMatchSnapshot();
                expect(snippet.highlightMode).to.equal(supportedLanguages[lang].highlight);
              });
            });
          });
        });
      });
    });

    describe('backwards compatibiltiy', function () {
      // eslint-disable-next-line mocha/no-setup-in-describe
      ['curl', 'node-simple'].forEach((lang: 'curl' | 'node-simple') => {
        it(`should still support \`${lang}\` as the supplied language`, function () {
          const snippet = oasToSnippet(
            petstore,
            petstore.operation('/user/login', 'get'),
            {
              query: { username: 'woof', password: 'barkbarkbark' },
            },
            {},
            lang,
            oasUrl
          );

          expect(snippet.code).toMatchSnapshot();

          if (lang === 'curl') {
            expect(snippet.highlightMode).to.equal('shell');
          } else if (lang === 'node-simple') {
            expect(snippet.highlightMode).to.equal('javascript');
          }
        });
      });
    });

    it('should gracefully fallback to `fetch` snippets if our `api` target fails', function () {
      // Reason that this'll trigger a failure in the `api` snippet target is because we aren't
      // passing in an API definition for it to look or an operation in.
      const snippet = oasToSnippet(null, null, null, null, 'node-simple', oasUrl, harExamples.full);

      expect(snippet.code).to.contain('node-fetch');
      expect(snippet.highlightMode).to.equal('javascript');
    });
  });
});

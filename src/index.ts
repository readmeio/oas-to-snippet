import type { SupportedTargets, SupportedLanguages } from './supportedLanguages';
import type { HarRequest } from '@readme/httpsnippet';
import type { ClientId, TargetId } from '@readme/httpsnippet/dist/targets/targets';
import type { AuthForHAR, DataForHAR } from '@readme/oas-to-har';
import type Oas from 'oas';
import type { Operation } from 'oas';

import { HTTPSnippet, addTargetClient } from '@readme/httpsnippet';
import generateHar from '@readme/oas-to-har';
import HTTPSnippetSimpleApiClient from 'httpsnippet-client-api';

import supportedLanguages from './supportedLanguages';

export type { AuthForHAR, DataForHAR, SupportedTargets, SupportedLanguages };

export function oasToSnippet(
  oas: Oas,
  operation: Operation,
  values: DataForHAR,
  auth: AuthForHAR,
  lang: keyof typeof supportedLanguages | [keyof typeof supportedLanguages, ClientId] | 'node-simple' | 'curl',
  oasUrl?: string,
  harOverride?: HarRequest
) {
  let config;
  let language: TargetId;
  let target;

  /**
   * If `lang` is an array, then it's a mixture of language and targets like `[php, guzzle]` or
   * `[javascript, axios]` so we need to a bit of work to pull out the necessary information needed
   * to build the snippet. For backwards compatibility sake we still need to support supplying
   * `node-simple` as the language even though `node-simple` does not exist within the list of
   * `supportedLanguages`.
   */
  if (lang === 'node-simple') {
    config = supportedLanguages.node;
    language = 'node';
    target = 'api';
  } else if (lang === 'curl') {
    config = supportedLanguages.shell;
    language = 'shell';
    target = 'curl';
  } else if (Array.isArray(lang)) {
    if (lang[0] in supportedLanguages) {
      if (lang[1] in supportedLanguages[lang[0]].httpsnippet.targets) {
        config = supportedLanguages[lang[0]];
        language = config.httpsnippet.lang;
        target = lang[1];
      }
    }
  } else if (lang in supportedLanguages) {
    config = supportedLanguages[lang];
    language = config.httpsnippet.lang;
    target = config.httpsnippet.default;
  }

  // Prevents errors if non-generated code snippet is selected and there isn't a way to generate a
  // code snippet for it (like for example `shell`).
  if (!language || !target) {
    return { code: '', highlightMode: false };
  }

  const har = harOverride || generateHar(oas, operation, values, auth);
  const snippet = new HTTPSnippet(har as HarRequest, {
    // We should only expect HAR's generated with `@readme/oas-to-har` to already be encoded.
    harIsAlreadyEncoded: !harOverride,
  });

  let targetOpts = config.httpsnippet.targets[target].opts || {};
  const highlightMode = config.highlight;

  // API SDK client needs additional runtime information on the API definition we're showing the
  // user so it can generate an appropriate snippet.
  if (language === 'node' && target === 'api') {
    try {
      addTargetClient('node', HTTPSnippetSimpleApiClient);
    } catch (e) {
      if (!e.message.match(/already exists/)) {
        throw e;
      }
    }

    targetOpts.apiDefinition = oas ? oas.getDefinition() : null;
    targetOpts.apiDefinitionUri = oasUrl;
  }

  try {
    return {
      code: snippet.convert(language, target, targetOpts),
      highlightMode,
    };
  } catch (err) {
    if (language !== 'node' && target !== 'api') {
      throw err;
    }

    /**
     * Since `api` depends upon the API definition it's more subject to breakage than other snippet
     * targets, so if we failed when attempting to generate one for that let's instead render out a
     * `fetch` snippet.
     */
    targetOpts = config.httpsnippet.targets.fetch.opts || {};

    return {
      code: snippet.convert(language, 'fetch', targetOpts),
      highlightMode,
    };
  }
}

export { supportedLanguages };

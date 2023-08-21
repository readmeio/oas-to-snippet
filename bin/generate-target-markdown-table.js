// eslint-disable-next-line @typescript-eslint/no-var-requires
const { availableTargets } = require('@readme/httpsnippet');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const supportedLanguages = require('../dist/supportedLanguages');

const targets = availableTargets();

function getTarget(targetKey) {
  return targets.find(target => target.key === targetKey);
}

/**
 * Generates a Markdown table that documents all supported snippets.
 */
function run() {
  try {
    // eslint-disable-next-line no-console
    console.log('| Language | Available language mode(s) | Libraries (if applicable)');
    // eslint-disable-next-line no-console
    console.log('| :---- | :---- | :---- |');

    Object.keys(supportedLanguages.default).forEach(lang => {
      let languageTitle = 'TKTK';
      const languageMode = lang;
      let libraries = '';

      // Corresponding language in httpsnippet library
      const httpsnippetLang = supportedLanguages.default[lang].httpsnippet.lang;
      // Corresponding httpsnippet target object
      const httpsnippetTarget = getTarget(httpsnippetLang);

      // C++ and Objective-C are weird in that their
      if (lang === 'cplusplus') {
        languageTitle = 'C++';
      } else if (lang === 'objectivec') {
        languageTitle = 'Objective-C';
      } else {
        languageTitle = httpsnippetTarget.title;
      }

      if (httpsnippetTarget?.clients.length) {
        libraries = httpsnippetTarget.clients
          .map(client => {
            return `[${client.title}](${client.link})`;
          })
          .join(', ');
      }

      // eslint-disable-next-line no-console
      console.log(`| ${languageTitle} | \`${languageMode}\` | ${libraries}`.trim());
    });
    return process.exit(0);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error generating Markdown Table!');
    console.error(e);
    return process.exit(1);
  }
}

run();

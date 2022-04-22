const { karmaConfig } = require('@jsdevtools/karma-config');
const { host } = require('@jsdevtools/host-environment');

module.exports = karmaConfig({
  sourceDir: '.',
  fixtures: ['test/__datasets__/*.json'],
  browsers: {
    chrome: true,
    firefox: true,
    safari: host.os.mac,
    edge: false,
    ie: false,
  },
});

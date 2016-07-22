'use strict';

const thorin = require('thorin');

thorin
  .addTransport(require('thorin-transport-http'))
  .addPlugin(require('thorin-plugin-render'));

thorin.run((err) => {
  log.info("Running");
});
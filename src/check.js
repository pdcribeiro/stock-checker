const cypress = require('cypress');
const alert = require('./alert');

cypress.run().then(({ totalFailed }) => totalFailed > 0 && alert());

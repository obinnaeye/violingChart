if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod') // eslint-disable-line global-require
} else {
  module.exports = require('./configureStore.prod') // eslint-disable-line global-require
}



// WEBPACK FOOTER //
// ./src/store/configureStore.js
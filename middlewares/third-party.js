const cookieParser = require('cookie-parser');
const compression = require('compression');

const thirdParty = (x) => {
  switch (x) {
    case 'cookieParser':
      return cookieParser;
      break;
    case 'compression':
      return compression;
      break;
    default:
      return '';

  }
};

module.exports = thirdParty;

const v = require('validator');

module.exports = function alphaNumeric(field, value) {
  if (!v.isAlphanumeric(String(value))) {
    return false;
  }

  return true;
};

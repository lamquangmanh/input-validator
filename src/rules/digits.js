const numeric = require('./numeric');
const v = require('validator');

module.exports = function digits(field, value, dNumber) {
  if (!(numeric(field, dNumber))) {
    throw `Please provide a numeric value for ${field} under digits rule.`;
  }

  if (!v.isInt(String(value))) {
    return false;
  }

  if (dNumber != value.toString().length) {
    return false;
  }

  return true;
};

'use strict';

const _ = require('ramda');

const fields = ['x-exclude_paths', 'x-exclude_fields', 'x-apis'];

function stripFields(doc) {
  return _.omit(fields, doc);
}

module.exports = stripFields;

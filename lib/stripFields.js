'use strict';

const _ = require('ramda');

const fields = ['exclude_paths', 'exclude_fields', 'apis'];

function stripFields(doc) {
  return _.omit(fields, doc);
}

module.exports = stripFields;

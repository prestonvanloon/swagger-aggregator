'use strict';

const yaml = require('js-yaml');
const fs = require('fs');

const getSwagger = require('./lib/getSwagger');
const mergeApis = require('./lib/mergeApis');
const stripFields = require('./lib/stripFields');

function swaggerAggregator(file) {
  const doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
  const keys = Object.keys(doc['x-apis']);

  const pending = keys.map(key => {
    return getSwagger(doc['x-apis'][key]);
  });

  return Promise.all(pending)
    .then(mergeApis(doc))
    .then(stripFields)
    .then(res => {
      return res;
    });
}

module.exports = swaggerAggregator;

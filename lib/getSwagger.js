'use strict';

const request = require('request-promise');
const yaml = require('js-yaml');

function getSwagger(url) {
  return request.get(url)
    .then(function (res) {
      return yaml.safeLoad(res);
    });
}

module.exports = getSwagger;

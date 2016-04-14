'use strict';

const request = require('request-promise');
const yaml = require('js-yaml');
const validUrl = require('valid-url');
const fs = require('fs');

function getSwagger(url) {
  if (validUrl.isWebUri(url)) {
    return request.get(url)
      .then(function (res) {
        return yaml.safeLoad(res);
      });
  } else {
    return new Promise(function (resolve, reject) {
      try {
        const doc = fs.readFileSync(url);
        resolve(yaml.safeLoad(doc));
      } catch (e) {
        reject(e);
      }
    });
  }

}

module.exports = getSwagger;

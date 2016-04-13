'use strict';

const _ = require('ramda');

function mergeApis(doc, apis) {
  apis.forEach(api => {
    // TODO: Exclude paths
    // TODO: Exclude properties

    doc.paths = _.merge(doc.paths, api.paths);
    doc.definitions = _.merge(doc.definitions, api.definitions);
    doc.securityDefinitions = _.merge(doc.securityDefinitions, api.securityDefinitions);
    // doc.tags = _.merge(doc.tags, api.tags);

  });

  return doc;
}

module.exports = _.curry(mergeApis);

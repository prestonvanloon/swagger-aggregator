'use strict';

const _ = require('ramda');

function mergeApis(doc, apis) {
  doc.tags = doc.tags || [];

  apis.forEach(api => {
    // TODO: Exclude paths
    // TODO: Exclude properties

    doc.paths = _.merge(doc.paths, api.paths);
    doc.definitions = _.merge(doc.definitions, api.definitions);
    doc.securityDefinitions = _.merge(doc.securityDefinitions, api.securityDefinitions);
    doc.tags = doc.tags.concat(api.tags);
  });

  doc.tags = _.uniq(doc.tags).filter(doc => doc);

  return doc;
}

module.exports = _.curry(mergeApis);

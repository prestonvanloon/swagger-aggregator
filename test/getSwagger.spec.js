'use strict';

const request = require('request-promise');
const sinon = require('sinon');
require('sinon-as-promised');
const fs = require('fs');
const expect = require('chai').expect;
const yaml = require('js-yaml');

const getSwagger = require('../lib/getSwagger');

const res = fs.readFileSync('test/swagger.yaml', 'utf8');

const url = 'https://example.com/swagger.yaml';
const file = 'dist/swagger.yaml';
const response = {
  swagger: '2.0'
};

describe('getSwagger', () => {
  beforeEach(() => {
    sinon.stub(request, 'get').resolves(res);
    sinon.stub(yaml, 'safeLoad').returns(response);
    sinon.stub(fs, 'readFileSync').returns(res);
  });

  afterEach(() => {
    request.get.restore();
    yaml.safeLoad.restore();
    fs.readFileSync.restore();
  });

  it('should call request.get with url', () => {
    return getSwagger(url).then(() => {
      expect(request.get.called).to.be.true;
      expect(request.get.firstCall.args[0]).to.equal(url);
    });
  });

  it('should work with files', function () {
    return getSwagger(file).then(result => {
      expect(fs.readFileSync.called).to.be.true;
      expect(fs.readFileSync.firstCall.args[0]).to.equal(file);
    });
  });

  it('should parse yaml and return result', () => {
    return getSwagger(url).then(result => {
      expect(yaml.safeLoad.called).to.be.true;
      expect(yaml.safeLoad.firstCall.args[0]).to.deep.equal(res);
      expect(result).to.deep.equal(response);
    });
  });
});

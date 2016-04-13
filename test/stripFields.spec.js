'use strict';

const expect = require('chai').expect;

const fields = ['exclude_paths', 'exclude_fields', 'apis'];
const obj = {
  exclude_paths: 'asdf',
  exclude_fields: 'asdf',
  apis: 'apis'
};

const stripFields = require('../lib/stripFields');

describe('stripFields', () => {
  fields.forEach(field => {
    it(`should remove field: ${field}`, () => {
      const stripped = stripFields(obj);
      expect(stripped).to.not.have.property(field);
    });
  });
});

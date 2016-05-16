'use strict';

const expect = require('chai').expect;

const fields = ['x-exclude_paths', 'x-exclude_fields', 'x-apis'];
const obj = {
  'x-exclude_paths': 'asdf',
  'x-exclude_fields': 'asdf',
  'x-apis': 'apis'
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

'use strict';

const expect = require('chai').expect;
const aggregator = require('../index');

describe('swagger aggregator', () => {
  let result;
  beforeEach(() => {
    return aggregator('test/swagger.yaml')
      .then(res => {
        result = res;
      });
  });

  it('should aggregate APIs', () => {
    // TODO
    expect(result).to.exist;
  });
});

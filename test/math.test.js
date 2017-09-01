'use strict';

const { assert: { equal, deepEqual, notEqual, isFunction, isObject, isFinite } } = require('chai');
const { randomInt } = require('../js/math');

describe('testing math module', () => {
  describe('testing randomInt()', () => {
    it('should exist', () => {
      isFunction(randomInt);
    });

    it('should return a finite number', () => {
      let result = randomInt(1,6);
      isFinite(result);
    });
  });
});
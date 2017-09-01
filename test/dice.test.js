'use strict';

const { assert: { equal, deepEqual, notEqual, isFunction, isObject, isFinite, isString } } = require('chai');
const { roll, toDiceNotation } = require('../js/dice');

describe('testing dice module', () => {
  describe('testing roll()', () => {
    it('should exist', () => {
      isFunction(roll);
    });

    it('should return a finite number', () => {
      let result = roll('2d6');
      isFinite(result);
    });
  });
  describe('testing toDiceNotation()', () => {
    it('should exist', () => {
      isFunction(toDiceNotation);
    });

    it('should return a string', () => {
      const testObj = {sides: 6, count: 2};
      let result = toDiceNotation(testObj);
      isString(result);
    });
  });
});
'use strict';

const { assert: { isFunction, isObject, hasAllKeys } } = require('chai');
const parseArgs = require('../js/parse-args');

describe('testing parse-args module', () => {
  describe('testing exports()', () => {

    it('should exist', () => {
      isFunction(parseArgs);
    });

    it('should return an object', () => {
      let testArgsArr = [1,6];
      let result = parseArgs(testArgsArr);
      isObject(result);
    });

    it('should return object with keys: count, sides', () => {
      let testArgsArr = [1,6];
      let result = parseArgs(testArgsArr);
      hasAllKeys(result, ['count','sides']);
    });

  });
});
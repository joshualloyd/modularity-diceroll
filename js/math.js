'use strict';

const math = {};

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
math.randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let generatedInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return generatedInt;
};

module.exports = math;
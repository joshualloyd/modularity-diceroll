'use strict';

const myMath = require('./math');

const dice = {};

dice.roll = (diceNotationString) => {
    const letterDIndex = diceNotationString.indexOf('d');
    const count = Number.parseInt(diceNotationString.slice(0, letterDIndex));
    const sides = Number.parseInt(diceNotationString.slice(letterDIndex + 1, diceNotationString.length));
    let total = 0;
    for (var i = 0 ; i<count ; i++) {
        var amount = myMath.randomInt(1, sides);
        total += amount;
    }
    return total;
};

dice.toDiceNotation = ({ sides, count }) => {
    return `${count}d${sides}`;
};

module.exports = dice;
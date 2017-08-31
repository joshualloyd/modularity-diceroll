'use strict';

const {randomInt} = require('./math');

const dice = {};

dice.roll = (diceNotationString) => {
    let [count, sides] = diceNotationString.split('d');
    let total = 0;
    for (var i = 0 ; i<count ; i++) {
        var amount = randomInt(1, sides);
        total += amount;
    }
    return total;
};

dice.toDiceNotation = ({ sides, count }) => {
    console.log(`rolling ${count}d${sides}`);
    return `${count}d${sides}`;
};

module.exports = dice;
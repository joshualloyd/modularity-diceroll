'use strict';

module.exports = (args) => {
    if (args.length === 0) {
        return {count: 1, sides: 6};
    } else if (args.length === 1) {
        return {count: 1, sides: args[0]};
    } else {
        return {count: args[0], sides: args[1]};
    }
};
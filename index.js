var Chance = require("chance");

module.exports = function () {
    var i,
        seed = 0,
        seedling;

    if (arguments.length === 0) {
        return new module.exports.Chance();
    }

    for (i = 0; i < arguments.length; i++) {
        seedling = 0;
        if (typeof arguments[i] === 'string') {
            for (var j = 0; j < arguments[i].length; j++) {
                seedling += (arguments[i].length - j) *
                    arguments[i].charCodeAt(j);
            }
        } else {
            seedling = this.seed;
        }
        seed += (arguments.length - i) * seedling;
    }

    return new module.exports.Chance(seed);
};

module.exports.Chance = Chance;
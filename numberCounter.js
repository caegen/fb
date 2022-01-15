const reduce = require('lodash/reduce');

function counterWithOptionalMultiplierRules(start, end, multiplierOptions) {
    let result = [];
    for (let number=start; number <= end; number++){
        let matchedString = reduce(multiplierOptions, (result, value, key) => number % key === 0 ? result + value : result, '');
        result.push(matchedString ? matchedString : number);
    }
    return result;
}

//let results =
    counterWithOptionalMultiplierRules(1,100, { // Also with tests
    3: "Fizz",
    5: "Buzz"
});

//console.log(results);

module.exports = { counterWithOptionalMultiplierRules };
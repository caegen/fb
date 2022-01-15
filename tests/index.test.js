const index = require('../numberCounter');

test('test option parser', () => {
    expect(index.counterWithOptionalMultiplierRules(1, 5, {
        1: 'hello'
    })).toStrictEqual(['hello','hello','hello','hello','hello']);
});

test('test no option', () => {
    expect(index.counterWithOptionalMultiplierRules(1, 5, )).toStrictEqual([1,2,3,4,5]);
});

test('test double stack', () => {
    expect(index.counterWithOptionalMultiplierRules(1, 6, {
        2: 'hello',
        3: 'world'
    })).toStrictEqual([1,'hello','world','hello',5,'helloworld']);
});
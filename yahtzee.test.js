const pointsCount1 = require('./yahtzee.js')

test('le retour doit être égale à la sommes des dés de valeur 1', () => {
    expect(pointsCount1(1)).toBe(1);
    expect(pointsCount1(3)).toBe(3);
    expect(pointsCount1(5)).toBe(5);
})
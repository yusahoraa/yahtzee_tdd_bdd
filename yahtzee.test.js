const yahtzee = require('./yahtzee.js')


test('le retour doit être égale à la somme des dés de valeur 1', () => {
    expect(yahtzee.pointsCountOne([1,3,2,5,2])).toBe(1);
    expect(yahtzee.pointsCountOne([1,1,1,6,3])).toBe(3);
    expect(yahtzee.pointsCountOne([1,1,1,1,1])).toBe(5);
});
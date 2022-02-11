const yahtzee = require('./yahtzee.js')


test('le retour doit être égale à la somme des dés de valeur 1', () => {
    expect(yahtzee.pointsCountOne(1)).toBe(1);
    expect(yahtzee.pointsCountOne(3)).toBe(3);
    expect(yahtzee.pointsCountOne(5)).toBe(5);
})

test('le retour doit être égale à la somme des dés de valeur 2', () => {
    expect(yahtzee.pointsCountTwo(1)).toBe(2);
    expect(yahtzee.pointsCountTwo(3)).toBe(6);
    expect(yahtzee.pointsCountTwo(5)).toBe(10);
})

test('le retour doit être égale à la somme des dés de valeur 3', () => {
    expect(yahtzee.pointsCountThree(1)).toBe(3);
    expect(yahtzee.pointsCountThree(3)).toBe(9);
    expect(yahtzee.pointsCountThree(5)).toBe(15);
})
const yahtzee = require('./yahtzee.js')


test('le retour doit être égale à la somme des dés de valeur 1', () => {
    expect(yahtzee.pointsCountOne([1,3,2,5,2])).toBe(1);
    expect(yahtzee.pointsCountOne([1,1,1,6,3])).toBe(3);
    expect(yahtzee.pointsCountOne([1,1,1,1,1])).toBe(5);
});

test('le retour doit être égale à la somme des dés de valeur 2', () => {
    expect(yahtzee.pointsCountTwo([1,3,3,5,2])).toBe(2);
    expect(yahtzee.pointsCountTwo([2,2,2,6,3])).toBe(6);
    expect(yahtzee.pointsCountTwo([2,2,2,2,2])).toBe(10);
});

test('le retour doit être égale à la somme des dés de valeur 3', () => {
    expect(yahtzee.pointsCountThree([1,3,3,5,2])).toBe(3);
    expect(yahtzee.pointsCountThree([2,2,2,6,3])).toBe(9);
    expect(yahtzee.pointsCountThree([2,2,2,2,2])).toBe(15);
});
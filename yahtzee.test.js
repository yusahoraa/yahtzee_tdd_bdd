const yahtzee = require('./yahtzee.js')


test('le retour doit être égale à la somme des dés de valeur 1', () => {
    expect(yahtzee.pointsCountBase([1,3,2,5,2], 1)).toBe(1);
    expect(yahtzee.pointsCountBase([1,1,1,6,3], 1)).toBe(3);
    expect(yahtzee.pointsCountBase([1,1,1,1,1], 1)).toBe(5);
});

test('le retour doit être égale à la somme des dés de valeur 2', () => {
    expect(yahtzee.pointsCountBase([1,3,3,5,2], 2)).toBe(2);
    expect(yahtzee.pointsCountBase([2,2,2,6,3], 2)).toBe(6);
    expect(yahtzee.pointsCountBase([2,2,2,2,2], 2)).toBe(10);
});

test('le retour doit être égale à la somme des dés de valeur 3', () => {
    expect(yahtzee.pointsCountBase([1,3,2,5,2], 3)).toBe(3);
    expect(yahtzee.pointsCountBase([2,3,3,6,3], 3)).toBe(9);
    expect(yahtzee.pointsCountBase([3,3,3,3,3], 3)).toBe(15);
});

test('le retour doit être égale à la somme des dés de valeur 4', () => {
    expect(yahtzee.pointsCountBase([1,4,2,5,2], 4)).toBe(4);
    expect(yahtzee.pointsCountBase([2,4,4,6,4], 4)).toBe(12);
    expect(yahtzee.pointsCountBase([4,4,4,4,4], 4)).toBe(20);
});

test('le retour doit être égale à la somme des dés de valeur 5', () => {
    expect(yahtzee.pointsCountBase([1,3,2,5,2], 5)).toBe(5);
    expect(yahtzee.pointsCountBase([2,5,5,6,5], 5)).toBe(15);
    expect(yahtzee.pointsCountBase([5,5,5,5,5], 5)).toBe(25);
});

test('le retour doit être égale à la somme des dés de valeur 6', () => {
    expect(yahtzee.pointsCountBase([1,6,2,5,2], 6)).toBe(6);
    expect(yahtzee.pointsCountBase([2,6,6,6,3], 6)).toBe(18);
    expect(yahtzee.pointsCountBase([6,6,6,6,6], 6)).toBe(30);
});

test('le retour doit être égale à la somme des dés du brelan', () => {
    expect(yahtzee.pointsCountBrelan([1,2,2,5,2])).toBe(6);
    expect(yahtzee.pointsCountBrelan([2,6,6,6,3])).toBe(18);
    expect(yahtzee.pointsCountBrelan([5,5,5,5,5])).toBe(15);
});
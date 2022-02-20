function pointsCountOne(dices){

	var points = dices.reduce(function(n, val) {
		return n + (val === 1);
	}, 0);

	return points;
}

function pointsCountTwo(dices){

	var count = dices.reduce(function(n, val) {
		return n + (val === 2);
	}, 0);

	var points = count*2;

	return points;
}

module.exports = {pointsCountOne, pointsCountTwo};
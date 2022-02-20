function pointsCountOne(dices){

	var points = dices.reduce(function(n, val) {
		return n + (val === 1);
	}, 0);

	return points;
}

module.exports = {pointsCountOne};
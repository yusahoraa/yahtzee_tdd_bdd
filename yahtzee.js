
function pointsCountBase(dices, num){

	var count = dices.reduce(function(n, val) {
		return n + (val === num);
	}, 0);

	var points = count*num;

	return points;
}

module.exports = {pointsCountBase};
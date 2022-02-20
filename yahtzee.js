
function pointsCountBase(dices, num){

	var count = dices.reduce(function(n, val) {
		return n + (val === num);
	}, 0);

	var points = count*num;

	return points;
}

function pointsCountBrelan(dices){

	var count;
	var points;

	for(var i=1; i <= 6; i++){
		count = 0;
		dices.forEach(element => {
			if(element === i){
				count ++;
				if(count === 3){
					points = count*i;
				}
			}
		});
	}

	return points;
}

module.exports = {pointsCountBase, pointsCountBrelan};
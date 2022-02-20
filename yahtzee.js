
function pointsCount(dices, type){

	var points;
	var count;

	switch (type) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count = dices.reduce(function(n, val) {
				return n + (val === type);
			}, 0);
		
			points = count*type;
		  	break;
		case 'Brelan':
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
			break;
		case 'Carre':
			for(var i=1; i <= 6; i++){
				count = 0;
				dices.forEach(element => {
					if(element === i){
						count ++;
						if(count === 4){
							points = count*i;
						}
					}
				});
			}
			break;
		case 'Quinte':
			var count;
			var points;
		
			for(var i=1; i <= 6; i++){
				count = 0;
				dices.forEach(element => {
					if(element === i){
						count ++;
						if(count ===5){
							points = 50;
						}
					}
				});
			}
		  break;
		default:
		  console.log(`Sorry, we are out of ${expr}.`);
	  }

	return points;
}

module.exports = {pointsCount};
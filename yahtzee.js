
function pointsCount(dices, type){

	var points = 0;
	var count = 0;

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
		case 'Petite suite':
			if((dices.includes(1) && dices.includes(2) && dices.includes(3) && dices.includes(4)) || (dices.includes(2) && dices.includes(3) && dices.includes(4) && dices.includes(5)) || (dices.includes(3) && dices.includes(4) && dices.includes(5) && dices.includes(6))){
				points = 30;
			}
			break;
		case 'Grande suite':
			if((dices.includes(1) && dices.includes(2) && dices.includes(3) && dices.includes(4) && dices.includes(5)) || (dices.includes(2) && dices.includes(3) && dices.includes(4) && dices.includes(5) && dices.includes(6))){
				points = 40;
			}
			break;
		case 'Full':
			var fullTwo = 0;
			var fullThree = 0;
			for(var i=1; i <= 6; i++){
				count = 0;
				dices.forEach(element => {
					if(element === i){
						count ++;
					}
				});

				if(count === 2){
					fullTwo ++;
				}

				else if(count === 3){
					fullThree ++;
				}
			}

			if(fullTwo !== 0 && fullThree !== 0){
				points = 25;
			}
			break;
		case 'Chance':
			dices.forEach(element => {
				points += element;
			});
			break;
		default:
			return 0;
	  }

	return points;
}

module.exports = {pointsCount};
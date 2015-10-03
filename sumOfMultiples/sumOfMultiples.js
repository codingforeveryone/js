function sumOfMultiples(x) {
	
	var threes = [];
	var fives = [];

	for(var i = 0; i < x; i += 3) { 		//Collecting the multiples of three
		threes.push(i);
	};

	for(var i = 0; i < x; i += 5) {		//Collecting the multiples of five
		fives.push(i);
	};

	var threesAndFives = fives.concat(threes); //Putting them all in one array

	threesAndFives.sort(function(a, b) {return a - b}); //Getting them in order to

	for(i = 0; i<threesAndFives.length; i++){			//remove the duplicates
		if(threesAndFives[i] === threesAndFives[i + 1]) {
			threesAndFives.splice(i, 1);
		};
	};

	var total = threesAndFives.reduce(function(a, b) {return a + b;});	//Sum the array

	return total;
}

sumOfMultiples(13);
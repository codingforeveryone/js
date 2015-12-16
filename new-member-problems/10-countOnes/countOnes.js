
function countOnes(arr){

	var output = [];

	for(var i=0;i<arr.length;i++){
		var v = arr[i];
		if(v == 0) continue;

		for(var j=i+1;j<arr.length;j++){
			var v2 = arr[j];
			if(v2 == 0) break;			
			v += 1;
		}

		i += v;
		output.push(v);
	}

	return output;
}

var testCases = [
	[[0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1],[2,3,4,1]],
	[[0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1], [2,4,2]],
	[[0,0,0,0,0,0],[]],
	[[1,1,1],[3]],
	[[1,1,1,0,0,1],[3,1]]
];

for(var i=0;i<testCases.length;i++){

	var output = countOnes(testCases[i][0]).toString();
	var expected = testCases[i][1].toString();

	if(output == expected)
		console.log('ok');
	else
		console.log('not ok! expected value at index '+i+' = '+expected+' instead got '+output);
	
}


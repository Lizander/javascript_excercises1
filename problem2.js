var evenSum = 0;
var i = 1;
var j = 2;
while (j < 4000000) {
	if (j % 2 === 0) {
		console.log(i);
		evenSum += j;
	}
	
	var temp = j;
	j = (i + j);
	i = temp;
}
console.log("Total sum:" + " " + evenSum);
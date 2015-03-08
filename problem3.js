var largest = 0;
var number = 600851475143;

var isPrime = function(number) {
	var j = 2;
	var prime = true;

	while (j <= number / 2) {
		if (number % j == 0) {
			prime = false;
		}
		j++;
	}

	return prime;
}

for (var i = 2; i <= number; i++) { 
	if (number % i == 0 && isPrime(i)) {
		 largest = i;
    } 
}

console.log(largest); 
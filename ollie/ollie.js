// ollie the boston terrier
// There are three part to this algorithm:
// 1. Pre-calculate all of the prime numbers under 1000
//    N = n**2 + n + 41
//       for each n until N > 1000
// 2. Go through all of the boxes finding their factors in terms of multiple of primes
//    For each box number, divide by the lowest prime (2) as many times as possible, then
//      divide by the next prime (3) as many times as possible and so on..
//     N = prime1**a . prime2**b . prime3**c ... etc.

// 3. Use the prime exponents calculated in 2) to calculate the number of factors of each box number
//    from 2 to 1000
console.log("STARTED");

var primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
// E.g., [1,2,3,4]
var boxPrimeExponents = [];
// E.g., [ [1], [1,2], [2,3] ]
var boxFactorCounts = [];
// E.g., [2, 6, 12]

// 1. Pre-calculate all of the prime numbers under 1000
function precalculatePrimes (maxNumber) {
    // for each n until N > 1000
    // N = n**2 + n + 41
    var primeNumber = 1;
    var startNumber = 1;
    while ( primeNumber < maxNumber ) {
        primeNumber = Math.pow(startNumber, 2) + startNumber + 41
        //console.log("primeNumber: ", primeNumber);
        primeArray.push(primeNumber);
        startNumber = startNumber + 1;
    }
    var trash = primeArray.pop();
    //console.log("trash", trash);
    //console.log("primeArray", primeArray);
};

// 2. Go through all of the boxes finding their factors in terms of multiple of primes
//    For each box number, divide by the lowest prime (2) as many times as possible, then
//      divide by the next prime (3) as many times as possible and so on..
//     N = prime1**a . prime2**b . prime3**c ... etc.
function findBoxExponents () {
    for ( var boxIndex = 0; boxIndex < 1000; boxIndex++ ) {
        var boxNumber = boxIndex + 1;
        console.log("boxNumber", boxNumber);
        var exponents = calculateExponents(boxNumber);
        console.log("Exponents for boxNumber " + boxNumber + ": ", exponents);
        boxPrimeExponents.push(exponents);
    }
    console.log("boxPrimeExponents", boxPrimeExponents);
}

function calculateExponents (boxNumber) {
    console.log("DOING calculateExponents for boxNumber: " + boxNumber);
    var exponents = [];
    for ( var primeIndex = 0; primeIndex < primeArray.length; primeIndex++ ) {
        var primeNumber = primeArray[primeIndex];
        console.log("primeNumber", primeNumber);
        if ( boxNumber < primeNumber ) {
            console.log("boxNumber " + boxNumber + " is less than primeNumber " + primeNumber);
            return exponents;
        }
        
        var remainder = boxNumber;
        var storedResult = boxNumber;
        var primeNumber = primeArray[primeIndex];
        var exponent = 0;
        remainder = remainder/primeNumber;
        if ( cleanDivision(remainder) ) {
            while ( cleanDivision(remainder) ) {            
                exponent = exponent + 1;
                remainder = remainder/primeNumber;
            }
            console.log("prime " + primeNumber + " exponent is " + exponent);
            console.log("remainder", remainder);
            exponents.push(exponent);
            storedResult = remainder;
        }
        else {
            remainder = storedResult;
        }
        //// CHECK IF WE'RE DONE
        if ( remainder <= 1) {
            return exponents;
            continue;
        }
    }
    
    return exponents;
}

function cleanDivision (number) {
    var integer = parseInt(number);
    if ( number == integer ) return true;

    return false;
}

function countBoxFactors () {
    for ( var boxIndex = 0; boxIndex < 1000; boxIndex++ ) {
        var boxNumber = boxIndex + 1;
//        console.log("boxNumber", boxNumber);
        var exponents = boxPrimeExponents[boxIndex];
        //console.log("box Number " + boxNumber + " exponents", exponents);
        //console.log("DEBUG EXIT");
        //return;
        var factorCount = 1;
        for ( var index = 0; index < exponents.length; index++ ){
            var exponent = exponents[index];
            //console.log("exponent " + (index + 1) + ": " + exponent);
            factorCount = factorCount * (exponent + 1);
        }
        console.log("box Number " + boxNumber + " factorCount: " + factorCount);
    }
    
}

precalculatePrimes(1000);

findBoxExponents();

countBoxFactors();
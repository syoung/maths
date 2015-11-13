/*
 Simple calculator to count the total points given a four-letter word and a list of start positions
 The grid is 4x10
 The list of letter square multiples is as follows:
 Every other multiple of three (3, 9, 15...)    DOUBLE
 Multiples of five not used above               TRIPLE
 Multiples of seven not used above              DOUBLE
 Multiples of eight not used above              TRIPLE
 
 Letter values are as follows:
 A  1
 E  1
 D  2
 R  2
 B  3
 M  3
 V  4
 Y  4
 J  8
 X  8
 
 Input:
    Six lines of input
    First line is the word, four letters only, words are horizontal
    Remaining lines are start positions

    JAVA
    1
    2
    3
    4
    5
 
 Output:
    Five lines, score for each start position

*/



console.log("STARTED");

var boardArray = [
    1, 1, 2, 1, 3, 1, 2, 3, 2, 3,
    1, 1, 1, 2, 2, 3, 1, 1, 1, 3,
    2, 1, 1, 3, 3, 1, 2, 2, 1, 3,
    1, 3, 2, 1, 3, 1, 1, 1, 2, 3
];

var letterScore = {
    A	:	1,
    E	:	1,
    D	:	2,
    R	:	2,
    B	:	3,
    M	:	3,
    V	:	4,
    Y	:	4,
    J	:	8,
    X	:	8,
};

var reader = require('readline');
var prompt = reader.createInterface(process.stdin, process.stdout);
var lingeringLine = "";
var lines = new Array();

function doScrabble (inputArray) {
    console.log("doScrabble    inputArray", inputArray);
};

prompt.
on('line', function(line) {
    var msg = line.trim();
    console.log("msg", msg);
    
    lines.push(msg);
    console.log("lines", lines);
    console.log("lines.length", lines.length);
    
    if (lines.length == 2) {
        console.log("lines    doScrabble()");
        doScrabble(lines);
    }
    
}).
on('close', function() {
    console.log("lines", lines);

        

    process.exit(0);
});

prompt.setPrompt("> ", 2);
prompt.prompt();

console.log("COMPLETED");


/*

// 1. Pre-calculate all of the prime numbers under 1000
function precalculatePrimes (maxNumber) {
    // for each n until N > 1000
    // N = n**2 + n + 41
    var primeNumber = 1;
    var startNumber = 1;
    while ( primeNumber < maxNumber ) {
        primeNumber = Math.pow(startNumber, 2) + startNumber + 41
        //console.log("primeNumber: ", primeNumber);
        boardArray.push(primeNumber);
        startNumber = startNumber + 1;
    }
    var trash = boardArray.pop();
    //console.log("trash", trash);
    //console.log("boardArray", boardArray);
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
    for ( var primeIndex = 0; primeIndex < boardArray.length; primeIndex++ ) {
        var primeNumber = boardArray[primeIndex];
        console.log("primeNumber", primeNumber);
        if ( boxNumber < primeNumber ) {
            console.log("boxNumber " + boxNumber + " is less than primeNumber " + primeNumber);
            return exponents;
        }
        
        var remainder = boxNumber;
        var storedResult = boxNumber;
        var primeNumber = boardArray[primeIndex];
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

*/
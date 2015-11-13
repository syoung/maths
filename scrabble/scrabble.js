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

/* DO SCRABBLE COUNTS */
function doScrabble (inputArray) {
    console.log("doScrabble    inputArray", inputArray);
    var score = 0;



};


/* GET USER DATA FROM COMMAND LINE PROMPT */
prompt.
on('line', function(line) {
    var msg = line.trim();
    //console.log("msg", msg);
    lines.push(msg);
    //console.log("lines", lines);
    //console.log("lines.length", lines.length);
    
    if (lines.length == 6) {
        //console.log("lines    doScrabble()");
        doScrabble(lines);
        prompt.close();
    }    
}).
on('close', function() {
    //console.log("prompt   close  lines", lines);
    process.exit(0);
});
prompt.setPrompt("> ", 2);
prompt.prompt();


console.log("COMPLETED");



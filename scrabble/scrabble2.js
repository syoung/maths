/*

 Purpose:
 
 A simple calculator to count the total points given a four-letter word and a list of start positions
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
    Remaining five lines are start positions

    E.g.:

JAVA
1,V
2,H
6,V
12,H
21,H
 
 Output:
    Five lines, score for each start position. E.g.:

18
17
42
30
66


*/

var letterMultipliers = [
    1, 1, 2, 1, 3, 1, 1, 1, 2, 3,
    1, 1, 1, 1, 2, 1, 1, 1, 1, 3,
    2, 1, 1, 1, 3, 1, 2, 1, 1, 3,
    1, 1, 2, 1, 3, 1, 1, 1, 2, 3
];
var wordMultipliers = [
    1, 1, 1, 1, 1, 1, 2, 3, 1, 1,
    1, 1, 1, 2, 1, 3, 1, 1, 1, 1,
    1, 1, 1, 3, 1, 1, 1, 2, 1, 1,
    1, 3, 1, 1, 1, 1, 1, 1, 1, 1
];

var VOFFSET = 10;

var letterValues = {
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
    var word = inputArray.shift();
    //console.log("doScrabble    word", word);
    //console.log("doScrabble    inputArray", inputArray);

    var scores = [];    
    for ( var i = 0; i < inputArray.length; i++ ) {
        var score = 0;
        var entry = inputArray[i];
        if ( ! entry.match(/^(\d+),(V|H)/) ) {
            console.log("Incorrect entry: ", entry);
            return null;
        }

        var startPosition = parseInt(entry.match(/^(\d+),(V|H)/)[1]);
        var orientation = entry.match(/^(\d+),(V|H)/)[2];
        //console.log("doScrabble    startPosition", startPosition);
        //console.log("doScrabble    orientation", orientation);
    
        // ADD SCORE FOR EACH LETTER
        var letters = word.split("");
        var wordMultiplier = 1;
        //console.log("doScrabble    letters", letters);
        for ( var k = 0; k < letters.length; k++ ) {
            var letter = letters[k];
            //console.log("doScrabble    letter", letter);
            var letterValue = letterValues[letter];
            //console.log("doScrabble    letterValue", letterValue);
            var boardPosition = parseInt(startPosition) + k;
            if ( orientation == "V" ) {
                boardPosition = startPosition + VOFFSET * k;
            }
            //console.log("doScrabble    boardPosition", boardPosition);
   
            var positionMultiple = letterMultipliers[boardPosition - 1];
            //console.log("positionMultiple", positionMultiple);

            var letterScore = letterValue * positionMultiple;
            //console.log("doScrabble    letterScore", letterScore);
            score += letterScore;

            if ( wordMultipliers[boardPosition - 1] > wordMultiplier ) {
                wordMultiplier = wordMultipliers[boardPosition - 1];
            }
        }
        //console.log("doScrabble    RAW score", score);
        score = score * wordMultiplier;
        //console.log("doScrabble    FINAL score", score);
        
        scores.push(score);
        //console.log("doScrabble    scores", scores);
        //console.log("");
        
    }

    // PRINT RESULTS
    for ( var i = 0; i < scores.length; i++ ) {
        console.log(scores[i])
    }
    
    return scores;
};


/* GET USER DATA FROM COMMAND LINE PROMPT */
prompt.
on('line', function(line) {
    var msg = line.trim();
    lines.push(msg);
    if (lines.length == 6) {
        doScrabble(lines);
        prompt.close();
    }    
}).
on('close', function() {
    process.exit(0);
});
prompt.setPrompt("> ", 2);
prompt.prompt();


console.log("COMPLETED scrabble2");

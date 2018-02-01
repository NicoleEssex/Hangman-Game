 
var comNames = ['Richard Pryer', 'George Carlin', 'Chris Rock', 'Robin Williams', 'Steve Martin'];


var confirmPlay = confirm('Do you want to play hangman?');

if(confirmPlay) {
    playgame();
} 
else {
    nogame();
}

function playgame() {
    var nameArray = [];
    alert('press any letter to begin');
    var comNum = Math.floor(Math.random() * comNames.length);
    console.log(comNum);
    console.log(comNames[comNum]);
    var comChoice = comNames[comNum];
    console.log(comChoice.length);
    for(var i=0; i<comChoice.length; i++) {
       nameArray.push(comChoice.charAt(i));
    }
    console.log(nameArray);
}

function nogame() {
    alert('go play solitaire then!');


}





var alphaWrong = [];

var alphaRight = [];


// console.logs

console.log(comNames);
console.log(alphaWrong);
console.log(alphaRight);


// I want the computer to randomly select a comedians name from my array.


// I want the player to choose a letter in the alphabet.

function keyupFunction() {
    alert('key up working');
}
// I want to record the player's letter choice and display it on the screen, in the proper place of the Name or in the Letters not Used section until the puzzle is solved.

// I want the computer to repeat the above process until the puzzle is solved.

// When the puzzle is solved I want to display a picture of that comedian and listen to a audio clip of that comedian.
 
var comNames = ['Richard Pryor', 'George Carlin', 'Chris Rock', 'Robin Williams'];


// var confirmPlay = confirm('Do you want to play hangman?');

// if(01) {
//     playgame();
// } 
// else {
//     nogame();
// }

function playgame() {
    
    var nameArray = [];
    // creates random number from the comedian name array and stores it in the comNum variable.
    var comNum = Math.floor(Math.random() * comNames.length);
    console.log(comNum);
    console.log(comNames[comNum]);
    //comChoice stores the random number created by the variable comNum.
    var comChoice = comNames[comNum];
    console.log(comChoice.length);
    //this loops through comChoice variable starting at 0, stopping at each value for the length of comChoice and pushes each character to the name Array variable.
    for(var i=0; i<comChoice.length; i++) {
        nameArray.push(comChoice.charAt(i));
        console.log(nameArray);
    }

    var comNameDisplay = document.getElementById("ComNameDisplay");
    // this loops through nameArray variable starting at 0 stopping at each value for the length of the array.
    //creates undefined variable, text.
    //creates a new variable, nameDashes, and a new span element.
    //creates if/else to compare values within nameArray. If the character is a space its assigned the id space attribute in the nameDashes varialbe. Else its a letter its assigned the id attribute of what letter it is from the nameArray[i]. 
    for(var i=0; i<nameArray.length; i++) {
        var text;
        var nameDashes = document.createElement("span");
        if(nameArray[i] === " ") {
            console.log("space");
            text = document.createTextNode("  ");
            nameDashes.setAttribute("id", "space");
        }
        else {
            text = document.createTextNode("_ ");
            nameDashes.setAttribute("id", nameArray[i]);
        }
    
    
        nameDashes.appendChild(text);
    
        comNameDisplay.appendChild(nameDashes);
    }
    
    //listen for key event
    document.onkeyup = function(event) {
        //record key event to userGuess variable
        var userGuess = event.key;
            console.log('userGuess', userGuess);
            //loop userGuess through nameArray
           for (var i =0; i<nameArray.length; i++); { 
            //compare userGuess to nameArray[i]. 
            //if true Call span id with matching letter. Replace nameDashes with correct letter.
            //if userGuess === nameArray.length play audio clip of comedian guessed.
            // if userGuess === nameArray.length update number of comedians guessed.
            // if false hook into html element "wrongLetters". Display userGuess here.
            //if false update number of userGuesses remaining.
                //function updateGuess() { document.querySelector(numOfGuessRem).innerHTML = "Number of Guesses Remaining:" - numOfGuessRem}    
            // if (numOfGuessRem === 0){ return;}     
            



    
             
    
            
        }
    }


        
          
 //The code below was created that with my online tutor's help. We were unable to replace the dashes with the letters. What this ended up doing was displaying the whole name of the comedian at once.

        // for(var j=0; j<nameArray.length; j++){
        //     console.log('text', text);
        //     console.log('nameDashes', nameDashes);
        //     nameDashes
        //     if(nameArray[j] === " ") {
        //         console.log("space");
        //         text = document.createTextNode("  ");
        //         nameDashes.setAttribute("id", "space");
        //     }
        //     else if (nameArray[j] === userGuess) {
        //         text = document.createTextNode(nameArray[i]);
        //         nameDashes.setAttribute("id", nameArray[i]);
        //     }
        //     nameDashes.innerHTML+=nameArray[j];

        //     comNameDisplay.appendChild(nameDashes);
}        
    
// }
playgame(); 




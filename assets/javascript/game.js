//List of Possible Words
var wordPool = ["philip johnson","antoni gaudi", "alvar aalto","eero saarinen","louis kahn","zaha hadid"];

//Randomized Selection
var selector = Math.floor((Math.random() * 4));
var word = wordPool[selector];
var wordLength = word.length;
var lives = 10;
var tally = 0;
console.log(word);
console.log(wordLength);

//for loop
for( i = 0 ; i < wordLength; i++){
    var gDiv = document.getElementById("gameDiv");
    var letterBox = document.createElement("div");
    var placeHolder = document.createTextNode("_");
    letterBox.id = "LB" + [i];
    letterBox.classList.add("letterBoxes");
    letterBox.appendChild(placeHolder);
    gDiv.appendChild(letterBox);
};


//Keypress Listener
document.addEventListener("keydown", function(e){
    console.log("you pressed: " + e.key);
    var match = false;
    //for loop
    for( i = 0; i < wordLength; i++){
        var mark = word.charAt([i]);
        var shortWordLength = wordLength - 1;
        console.log(mark);

            if ( ([i] < shortWordLength) && (e.key === mark) ){
                var transform = document.getElementById("LB" + [i]);
                match = true;
                tally++;
                transform.innerHTML = mark;
                console.log("looks great!");
            }

            else if ( ( [i] < shortWordLength) && (e.key != mark || match == false) ){
                console.log("Nope. Keep looking.");
            }

            else if ( ( [i] == shortWordLength) && (e.key === mark) ){
                var transform = document.getElementById("LB" + [i]);
                match = true;
                tally++;
                transform.innerHTML = mark;
                console.log("looks great(final)!");
                return match;
            }

            else if( ([i] == shortWordLength) && (match === false) ) {
                var sDiv = document.getElementById("tries");
                lives--;
                var triesMessage = "Tries left: " + lives;
                var rejLetters= document.getElementById("rejects");
                var RLBox = document.createElement("div");
                sDiv.innerHTML = triesMessage;
                RLBox.innerHTML= e.key;
                RLBox.classList.add("RLetterBoxes");
                rejLetters.appendChild(RLBox);
                console.log("no match found");
                break;
            }

           //inside forloop 
        }
        //outside forloop
        console.log("tally = " + tally);
        if ( tally === shortWordLength + 1){
            console.log("tally = " + tally + "!")
            alert("You Win!")
        }
        else if ( lives === 0 ){
            alert("Sorry, You Lost!")
            lives = 1;
        };
        
        
});


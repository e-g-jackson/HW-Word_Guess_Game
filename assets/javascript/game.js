//List of Possible Words
var wordPool = ["philip johnson","antoni gaudi", "alvar aalto","eero saarinen","louis kahn","zaha hadid"];

//Randomized Selection
var selector = Math.floor((Math.random() * 4));
var word = wordPool[selector];
var wordLength = word.length;
var lives = 6;
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
    console.log(e.key);
    for( i = 0; i < wordLength; i++){
        var mark = word.charAt([i]);
        var shortWordLength = wordLength - 1; 
        console.log(mark);
        console.log
        
    if (e.key == mark){
        var transform = document.getElementById("LB" + [i]);
        lives++;
        var triesMessage = "Tries left: " + lives;
        transform.innerHTML = mark;
        console.log("looks great!");
        
    }

    else if(e.key != mark && [i] < shortWordLength){
        console.log("nope");
    }

    else if(e.key != mark && [i] == shortWordLength){
        var sDiv = document.getElementById("tries")
        lives--;
        var triesMessage = "Tries left: " + lives;
        sDiv.innerHTML = triesMessage;
        console.log("last one!");
    }
        
    }
});

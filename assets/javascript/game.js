//List of Possible Answers
var wordPool = ["philip johnson","antoni gaudi", "alvar aalto","eero saarinen","louis kahn","zaha hadid", "buckminster fuller", "frank gehry", "frank lloyd wright", "le corbusier", "mies van der rohe", "rem koolhaas", "renzo piano"];
var imgLink = ["Philip_Johnson.jpg","Antoni_Gaudi.jpg","Alvar_Aalto.jpg","eero_saarinen.jpg","Louis_Kahn.jpg","Zaha_Hadid.jpg", "Buckminster_Fuller.jpg", "Frank_Gehry.jpg", "Frank_Lloyd_Wright.jpg", "Le_Corbusier.jpg", "Mies_Van_Der_Rohe.jpg", "Rem_Koolhaas.jpg", "Renzo_Piano.png"]
//Randomized Selection
var selector = Math.floor((Math.random() * wordPool.length));
var word = wordPool[selector];
var linkImg = "assets/images/" + imgLink[selector];
var wordLength = word.length;
var targetNumber = word.length;
var lives = 10;
var tally = 0;
var rejectedLetters = [];
var acceptedLetters = [];
var endGame = false;
// console.log(word);
// console.log(wordLength);

var fxn = function (){   
    //win 
    while ( tally === targetNumber && endGame === false){
        endGame = true;
        // console.log("tally = " + tally + "!")
        tally = 0;
        lives = 10;
        var display = document.getElementById("display");
        var pic = document.createElement("IMG");
        var result = document.createElement("P")
        var win = document.createTextNode( "You Win!" );
        result.appendChild(win)
        result.id = "ResultText";
        pic.id = "ArchImg";
        pic.setAttribute("src", linkImg);
        pic.setAttribute("alt", "Architecture Picture");
        display.appendChild(result);
        display.appendChild(pic);
        //replace instructiondiv with button????
        var iDiv = document.getElementById('instructionDiv');
        var restartButton = document.createElement("button")
        iDiv.innerHTML = "";
        restartButton.innerHTML = "RESET";
        restartButton.setAttribute("id", "restartButton")
        restartButton.onclick = resetPage
        iDiv.append(restartButton)
        return tally;
    }
    //lose
    while ( lives < 1 ){
        lives = 10;
        tally = 0;
        var result = document.createElement("P");
        var lose = document.createTextNode("Sorry, You Lose. Better Luck Next Time!");
        result.appendChild(lose);
        result.id = "ResultText"
        return lives;
    };
};

//for loop -- creating letterBox
for( i = 0 ; i < wordLength; i++){
    var gDiv = document.getElementById("gameDiv");
    var letterBox = document.createElement("div");
    if(word.charAt([i]) === " "){
        var placeHolder = document.createTextNode(" ");
        targetNumber--;
    } else {
        var placeHolder = document.createTextNode("_");
    }
    letterBox.id = "LB" + [i];
    letterBox.classList.add("letterBoxes");
    letterBox.appendChild(placeHolder);
    gDiv.appendChild(letterBox);
};

//Keypress Listener
document.addEventListener("keydown", function(e){
    // console.log("you pressed: " + e.key);
    var match = false;
    if(!findRepeat(e.key)){
        //for loop
        for( i = 0; i < wordLength; i++){
            var mark = word.charAt([i]);
            var shortWordLength = wordLength - 1;
            var key = e.key;
            console.log(mark);

                //not finished looking, but found a match
                if ( ([i] < shortWordLength) && (e.key === mark) ){
                    var transform = document.getElementById("LB" + [i]);
                    match = true;
                    acceptedLetters.push(e.key)
                    tally++;
                    transform.innerHTML = mark.toUpperCase();
                    console.log("looks great!");
                    fxn();
                }
                //not finished looking, but no match yet
                else if ( ( [i] < shortWordLength) && (e.key != mark || match == false) ){
                    console.log("Nope. Keep looking.");
                    fxn();
                }

                //found matching last letter
                else if ( ( [i] == shortWordLength) && (e.key === mark) ){
                    var transform = document.getElementById("LB" + [i]);
                    match = true;
                    acceptedLetters.push(e.key)
                    tally++;
                    transform.innerHTML = mark.toUpperCase();
                    console.log("looks great(final)!");
                    fxn();
                    return match;
                }

                //no matching last letter
                else if( ([i] == shortWordLength) && (match === false) ) {
                    var sDiv = document.getElementById("tries");
                    lives--;
                    var triesMessage = "Tries left: " + lives;
                    var rejLetters= document.getElementById("rejects");
                    var RLBox = document.createElement("div");
                    sDiv.innerHTML = triesMessage;
                    rejectedLetters.push(key)
                    RLBox.innerHTML= e.key;
                    RLBox.classList.add("RLetterBoxes");
                    rejLetters.appendChild(RLBox);
                    console.log("no match found");
                    console.log(rejectedLetters)
                    fxn();
                    break;
                }

            //inside forloop 
        }
        //outside forloop
        console.log("tally = " + tally)
        console.log("targetNumber = " + targetNumber);
    }
});

function findRepeat(key){
    var repeat = false;
    for(var i = 0; i < rejectedLetters.length; i++){
        if(key === rejectedLetters[i]){
            repeat = true;
        }
    }
    for(var i = 0; i < acceptedLetters.length; i++){
        if(key === acceptedLetters[i]){
            repeat = true;
        }
    }
    console.log("repeat = " + repeat)
    return repeat;
}

// document.getElementById('restartButton').onclick(resetPage())

function resetPage(){
    window.location.reload()
}

console.log("targetNumber = " + targetNumber);

/*  1)losing conditions not triggering
    2)no duplicates in reject letter array
*/
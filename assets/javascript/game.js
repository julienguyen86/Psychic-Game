    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];


    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
        // Computer Random Guess
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
            guessesSoFar.push(userGuess); 

        if (userGuess == computerGuess) {
            wins++;
            alert('Great! You\'ve guessed corrrectly. You Won!');
            //reseting the guesses back to 9 
            guessesLeft = 9; 
            //removes the guesses
            guessesSoFar.length = 0; 
        }
        else if (guessesLeft == 0){
            losses++;
            alert('Sorry! You didn\'t guess the correct letter. You lost. Let\'s try again.');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        else if (userGuess !== computerGuess){
            //deduct the guesses left
            guessesLeft--; 
        }  
        // diplaying in html    
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " +  guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guessesSoFar + "</p>"
        ;
        // Placing the html into the psychic ID
        document.querySelector('#psychic').innerHTML = html;
    }
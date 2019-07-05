/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor (){
        this.missed=0;
        this.phrases= [
            new Phrase('fix the cause not the symptom'),
            new Phrase('knowledge is power'),
            new Phrase('simplicity is the soul of efficiency'),
            new Phrase('before software can be reusable it first has to be usable'),
            new Phrase('experience is the name everyone gives to their mistakes')
        ];
        this.activePhrase=null;

    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let rNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rNumber];
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        //this.activePhrase.showMatchedLetter('s');
    };
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        //console.log(letters.length);
        for (let i=0; i<letters.length; i++){
            if (letters[i].classList.contains('hide')){
                return false;
            }
        }
        return true;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const heart = document.getElementsByTagName('img');
        //Hearts disable form right to left, I prefer this way :)
        heart[(heart.length - 1) - this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        if (this.missed === 5){
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const startOver = document.getElementById('overlay');
        startOver.style.display = 'block';

        const overH1 = document.getElementById('game-over-message');
        const overDiv = document.getElementById('overlay');
        if(gameWon) {
            overH1.textContent = "Congrats!! You Win :)"
            overDiv.classList.replace('start', 'win');
        } else {
            overH1.textContent = "Sorry, try again."
            overDiv.classList.replace('start', 'lose');
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    * @param this second parameter is to try to reuse this code for the keyup event but it doesn't work
    */
    handleInteraction(button, keyContent) {
        //console.log(button);
        //disable the keys
        const keys = document.getElementsByClassName('key');
        for(let key of keys) {
            if(key.textContent === keyContent) {
                key.setAttribute('disabled', 'disabled');
            }
        }

        //check if the letter is matched, and add the class chosen or wrong
        const isMatched = this.activePhrase.checkLetter(keyContent);
        if(isMatched) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(keyContent)
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    };
    
};
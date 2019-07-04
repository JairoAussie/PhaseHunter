/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase){
        this.phrase = phrase;
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const myPhrase = document.querySelector( "#phrase ul" );
        for (var i = 0; i < this.phrase.length; i++) {
            const letter = document.createElement('li');
            if (this.phrase.charAt(i) === ' '){
                letter.className = 'space'; 
            }
            else{
                letter.classList.add('hide', 'letter', this.phrase.charAt(i));
            }
            //letter.className = 'hide letter '+this.phrase.charAt(i);
            letter.textContent  = this.phrase.charAt(i);
            myPhrase.appendChild(letter);
          }       
    };
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if (this.phrase.includes(letter)){
            return true;
        } else{
            return false;
        }
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let letterClass = '.'+letter;
        const matchedLetters = document.querySelectorAll(letterClass);
        console.log("tamaño total "+matchedLetters.length);
        for (let i=0; i<matchedLetters.length; i++){
            matchedLetters[i].classList.replace('hide', 'show');
        }
    };
};
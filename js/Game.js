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
    };
    
};
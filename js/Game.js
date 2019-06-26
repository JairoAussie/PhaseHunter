/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor (){
        this.missed=0;
        this.phrases= [
            new Phrase('Fix the cause not the symptom'),
            new Phrase('Knowledge is power'),
            new Phrase('Simplicity is the soul of efficiency'),
            new Phrase('Before software can be reusable it first has to be usable'),
            new Phrase('Experience is the name everyone gives to their mistakes')
        ];
        this.activePhrase=null;

    }
    
};
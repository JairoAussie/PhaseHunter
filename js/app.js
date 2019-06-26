/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrase = new Phrase('Try to guess the phrase');
console.log(phrase.phrase);
const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
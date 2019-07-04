/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const btn_reset = document.getElementById('btn__reset');
btn_reset.addEventListener('click', function(){
    game = new Game();
    game.startGame();
    
})

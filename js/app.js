/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const btn_reset = document.getElementById('btn__reset');
btn_reset.addEventListener('click', function(){
    reset(game);
    game = new Game();
    game.startGame();
    
})


document.getElementById('qwerty').addEventListener('click', (e) => {
    const key = e.target;

    if(key.className === 'key') {
        game.handleInteraction(key, key.textContent);
    }
});

function reset(game){
    if(game !== null) {
        //Remove the list
        const ul = document.querySelector('ul');
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        //Enable the keyboard again
        const keys = document.getElementsByClassName('key');
        for (let i=0;i<keys.length;i++){
            keys[i].removeAttribute('disabled');
            keys[i].classList.remove('chosen', 'wrong');
        }
     
        //""paint" heart images
        const imgs = document.getElementsByTagName('img');
        for (let i=0;i<imgs.length;i++){
            imgs[i].setAttribute('src', 'images/liveHeart.png');
        }
        

        //Reset overlay class to "start" to avoid the replaceClasses error
        document.getElementById('overlay').className = 'start';
    }
    //I tried to do the keyup event calling the same function that the mouse but it's not working...
    //document.addEventListener('keyup', (e) => {
    //    game.handleInteraction(e, e.key);
    //})
}
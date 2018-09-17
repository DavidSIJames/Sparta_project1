document.addEventListener("DOMContentLoaded",function(){
  const game = new Object ();
    game.screen = document.getElementById('gameScreen');
    game.words = ["microphone",'telephone','bus','window','kangaroo','shoe','boat'];
    game.sec = 60;
    // function which displays the start screen for the game
    game.gameStart = () => {
      game.startTitle = document.createElement("h1");
      game.textAdder = document.createTextNode("Speed Typer");
      game.startTitle.classList.add("gameText");
      game.startTitle.appendChild(game.textAdder);
      game.screen.appendChild(game.startTitle);
      game.startBtn = document.createElement("h2");
      game.startBtn.classList.add("subGameText");
      game.textAdder = document.createTextNode("start");
      game.startBtn.appendChild(game.textAdder);
      game.screen.appendChild(game.startBtn);

      game.startBtn.addEventListener('mouseenter', function(){
        game.startBtn.style.color = "#c22929";
      });
      game.startTitle.addEventListener('mouseleave',function(){
        game.startBtn.style.color = "#0fd53b";
      });
      game.startBtn.addEventListener('click',function(){
        // removes the start screen elements from the game screen
        game.startTitle.parentNode.removeChild(game.startTitle);
        game.startBtn.parentNode.removeChild(game.startBtn);
        game.play();
      });
    };
    // timer counts down from 60
    game.timer =() => {
      game.countdown = setInterval(function(){
      document.getElementById('timer').innerHTML = game.sec;
      game.sec--;
      if (game.sec < 0) {
        clearInterval(game.countdown);
      }
      }, 1000);
    }
    // function to randomly select a word from a array
    game.newWord = () => {
      game.selectedWord = game.words[Math.floor(Math.random() * game.words.length)];
      return game.selectedWord;
    };
    // function which starts the game
    game.play = () =>{
      game.timerDis = document.createElement('p');
      game.timerDis.id = "timer";
      game.screen.appendChild(game.timerDis);
      game.displayedWord = document.createElement("h1");
      game.displayedWord.classList.add("gameText");
      game.textAdder = document.createTextNode(game.newWord());
      game.displayedWord.appendChild(game.textAdder);
      game.screen.appendChild(game.displayedWord);
      game.timer();

    };
    game.gameStart();
});

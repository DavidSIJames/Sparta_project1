document.addEventListener("DOMContentLoaded",function(){
  const game = new Object ();
    game.screen = document.getElementById('gameScreen');
    game.words = ["microphone",'telephone','bus','window','kangaroo','shoe','boat','apple','cup','bicycle'];
    game.sec = 0;
    game.score = 0;
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
        game.gamePlay();
      });
    };
    game.gameEnd = () =>{
      game.scoreDis.parentNode.removeChild(game.scoreDis);
      game.timerDis.parentNode.removeChild(game.timerDis);
      game.displayedWord.parentNode.removeChild(game.displayedWord);
      game.corrTyped.parentNode.removeChild(game.corrTyped);
      game.endTitle = document.createElement('h1');
      game.endTitle.classList.add("gameText");
      game.endTitle.innerHTML= "GAME OVER!";
      game.screen.appendChild(game.endTitle);
      game.scoreText = document.createElement('h2');
      game.scoreText.classList.add("subGameText");
      game.scoreText.innerHTML = "You Scored "+game.score+ " points!!";
      game.screen.appendChild(game.scoreText);
      game.gameReset = document.createElement('h3');
      game.gameReset.classList.add('subGameText');
      game.gameReset.innerHTML = "Play Again?";
      game.screen.appendChild(game.gameReset);

      game.gameReset.addEventListener('click',function(){
        game.gameReset.parentNode.removeChild(game.gameReset);
        game.scoreText.parentNode.removeChild(game.scoreText);
        game.endTitle.parentNode.removeChild(game.endTitle);
        game.gamePlay();
      });
    };
    // timer counts down from 60
    game.timer =() => {
      game.countdown = setInterval(function(){
      document.getElementById('timer').innerHTML = game.sec;
      game.sec--;
      if (game.sec < 0) {
        clearInterval(game.countdown);
        game.gameEnd();
      }
      }, 1000);
    }
    // function to randomly select a word from a array and splits it into an array
    game.newWord = () => {
      game.selectedWord = game.words[Math.floor(Math.random() * game.words.length)];
      game.strSplit = game.selectedWord.split("");
      return game.selectedWord;
    };
    game.wordClear = () =>{
      game.displayedWord.innerHTML = "";
      game.corrTyped.innerHTML = "";
      game.textAdder = document.createTextNode(game.newWord());
      game.displayedWord.appendChild(game.textAdder);
    }

    // function which starts the game
    game.gamePlay = () =>{
      game.sec = 60;
      game.score = 0;
      game.timerDis = document.createElement('p');
      game.timerDis.id = "timer";
      game.screen.appendChild(game.timerDis);
      game.scoreDis = document.createElement('p');
      game.scoreDis.id = "score";
      game.scoreDis.innerHTML=game.score;
      game.screen.appendChild(game.scoreDis);
      game.displayedWord = document.createElement("h1");
      game.displayedWord.classList.add("gameText");
      game.corrTyped = document.createElement('h3');
      game.corrTyped.id = "CorrText";
      game.timer();
      game.textAdder = document.createTextNode(game.newWord());
      game.displayedWord.appendChild(game.textAdder);
      game.screen.appendChild(game.displayedWord);
      game.screen.appendChild(game.corrTyped);
      document.addEventListener('keypress',function (e){
        if (String.fromCharCode(e.keyCode) == game.strSplit[0]){
          game.strSplit.shift();
          console.log(game.strSplit);
          game.textAdder = document.createTextNode(String.fromCharCode(e.keyCode));
          game.corrTyped.appendChild(game.textAdder);
          if (game.strSplit.length == 0){
            game.score++;
            console.log(game.score);
            document.getElementById('score').innerHTML = game.score;
            game.wordClear();
          }
        }else{
          game.wordClear();
        }
      });
    };
    game.gameStart();
});

document.addEventListener("DOMContentLoaded",function(){
  const game = new Object ();
    game.screen = document.getElementById('gameScreen');
    game.gameStart = () => {
      game.startTitle = document.createElement("h1");
      game.textAdder = document.createTextNode("Speed Typer");
      game.startTitle.classList.add("gameText");
      game.startTitle.appendChild(game.textAdder);
      game.screen.appendChild(game.startTitle);
      game.startTitle.style.marginTop= "200px";
      game.startTitle.style.paddingBottom = "60px";
      game.startBtn = document.createElement("h2");
      game.startBtn.classList.add("gameText");
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
        alert("start button clicked!");
      });
    };
    game.gameStart();
});

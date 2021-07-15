var database

var game,form,player,playerCount,gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game()
  game.start()
}

function draw(){
  background("red"); 
    drawSprites();
   
  
}



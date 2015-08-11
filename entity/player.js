var Player = function Player(){
  this.pseudo= 'player';
  this.x;
  this.y;
  this.id;
  this.width = 10;
  this.height = 10;
  this.color = 'black';
  //methods
  this.draw = drawPlayer;
  this.update = updatePlayer;
  this.speed = 0.06;
  this.scale = 1;
  this.alpha = 0;
}
drawPlayer = function draw(ctx){
    ctx.fillStyle = "red";
    ctx.fillRect(WIDTH/2 - 5, HEIGHT/2 - 5, 10, 10);
}
updatePlayer = function update(delta){
}

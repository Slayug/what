var Player = function Player(){
  this.pseudo= 'player';
  this.x;
  this.y;
  this.id;
  this.width = 10;
  this.height = 10;
  this.color = 'black';
  this.speed = 0.06;
  this.scale = 1;
  this.alpha = 0;
  /*------Methods-----*/
  this.draw = drawPlayer;
  this.update = updatePlayer;
  this.move = movePlayer;
}

/**
 * Draw the player
 * @param ctx the canvas's context
 */
var drawPlayer = function draw(ctx){
    ctx.fillStyle = "red";
    ctx.fillRect(WIDTH/2 - 5, HEIGHT/2 - 5, 10, 10);
}

/**
 * Update the player
 * @param float delta the PC's speed
 */
var updatePlayer = function update(delta){
}

/**
 * Move a player
 * @param context the canvas's context
 * @param integer pressedKey the pressed key
 */
var movePlayer = function (context, pressedKey, canvasHeight) {
    //Up arrow or "z"
    if (pressedKey == 38 || pressedKey == 90) {
        //Jump
    } else if (pressedKey == 40 || pressedKey == 83) {
        //Down
    } else if (pressedKey == 37 || pressedKey == 81) {
        ///Left
    } else if (pressedKey == 39 || pressedKey == 68) {
        //Right
    }
}

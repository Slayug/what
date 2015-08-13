var Player = function Player(){
  this.pseudo= 'player';
  this.x = 240;
  this.y = 5;
  this.id;
  this.width = 10;
  this.height = 10;
  this.color = 'black';
  this.speed = 0.04;
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
    ctx.fillRect(WIDTH - POS_TO_LEFT, 50, 10, 10);
}

/**
 * Update the player
 * @param float delta the PC's speed
 */
var updatePlayer = function update(delta){
    if ( inputManager.up ) {
        this.y++ ;
    } else if ( inputManager.down ) {
        this.y-- ;
    } else if ( inputManager.left ) {
        this.x += player.speed * delta;
    } else if ( inputManager.right ) {
        this.x -= player.speed * delta;
    }
}

/**
 * Move a player
 * @param context the canvas's context
 * @param integer pressedKey the pressed key
 */
var movePlayer = function (context, pressedKey, canvasHeight) {
}

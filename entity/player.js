var Player = function Player(){
  this.pseudo= 'player';
  this.x = 240;
  this.vX = 0;
  this.vXMax = 10;
  this.y = 5;
  this.vY = 0;
  this.vYMax = 5;
  this.speed = 0.04;
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
var updatePlayer = function update( ){
    this.move()
}

/**
 * Move a player
 */
var movePlayer = function( ) {
    if ( inputManager.up ) {
        this.vY += 2 ;
    } else if ( inputManager.down ) {
        this.vY -= 2 ;
    } else if ( inputManager.left ) {
        this.vX += 2 ;
    } else if ( inputManager.right ) {
        this.vX -= 2 ;
    }
}

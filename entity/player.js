var Player = function Player(){
  this.pseudo= 'player';
  this.x = 240;
  this.vx = 0;
  this.vxmax = 10;
  this.y = 5;
  this.vy = 0;
  this.vymax = 5;
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
        this.vy += 1 ;
    } else if ( inputManager.down ) {
        this.vy -= 1 ;
    } else if ( inputManager.left ) {
        this.vx += 1 ;
    } else if ( inputManager.right ) {
        this.vx -= 1 ;
    }
}

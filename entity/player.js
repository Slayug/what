function Player(){
    this.x = map.nbTilesByWidth * W_TILE - W_TILE*3; //spawn by default
    this.draw = drawPlayer;
    this.update = updatePlayer;
    this.move = movePlayer;
    this.vX = -0.04;
    this.width = 16;
    this.height = 16;
    this.color = '#00F018';
}
/**
 * Draw the player from the square center
 * @param ctx the canvas's context
 */
var drawPlayer = function draw(ctx){
    ctx.save();
        ctx.translate(WIDTH-POS_TO_LEFT + this.width/2, this.y + this.height/2);
        ctx.rotate(this.alpha);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
    ctx.restore();
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
        this.vY = 0.04;
    } if ( inputManager.down ) {
        this.vY = -0.04;
    } if ( inputManager.left ) {
        this.vX = -0.04;
    } if ( inputManager.right ) {
        this.vX = 0.04;
    }
}
Player.prototype = new Entity;

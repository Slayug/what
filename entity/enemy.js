function Enemy(){
    this.x = player.x - 16; //spawn by default
	this.y += 32;
    this.draw = drawEnemy;
    this.update = updateEnemy;
    this.move = movePlayer;
	this.color = 'yellow';
	this.height = 16;
	this.width = 16;
}
/**
 * Draw the enemy from the square center
 * @param ctx the canvas's context
 */
var drawEnemy = function draw(ctx){
	var xD = (WIDTH-POS_TO_LEFT + player.width/2) - (player.x - this.x);
    var yD = this.y + this.height/2;
	ctx.save();
		ctx.translate(xD, yD);
		ctx.rotate(this.alpha);
    	ctx.fillStyle = this.color;
    	ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
	ctx.restore();
}
/**
 * Update the player
 * @param float delta the PC's speed
 */
var updateEnemy = function update( ){
}
Enemy.prototype = new Entity;

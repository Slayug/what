var idTile = 0;
var TILE = [];
/**
*	meta: 0 OR 1 OR 2
*	0: blocking
*	1: no blocking
*	2: destructible
*	substitute: idTileRemplaçant if meta == 2
**/
var Tile = function Tile(meta, substitute, functionDraw){
	this.id = idTile++;
	this.meta = meta;
	this.substitute = substitute;
	this.draw = functionDraw;
	TILE[this.id] = this;
}
var a = function(ctx, x, y){
	ctx.fillStyle = 'black';
	ctx.fillRect(x, y, W_TILE, H_TILE);
}
var b = function(ctx, x, y){
	ctx.fillStyle = 'red';
	ctx.fillRect(x, y, W_TILE, H_TILE);
}
var c = function(ctx, x, y){
	ctx.fillStyle = 'purple';
	ctx.fillRect(x, y, W_TILE, H_TILE);
}
var d = function(ctx, x, y){
	ctx.fillStyle = randomColor();
	ctx.fillRect(x, y, W_TILE, H_TILE);
}
new Tile(1, 0, a);
new Tile(0, 0, b);
new Tile(0, 0, c);
new Tile(0, 0, d);

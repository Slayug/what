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
}
var a = function(ctx, x, y){
	ctx.fillRect(x, y, W_TILE, H_TILE);
}
TILE[idTile] = new Tile(1, 0, a);

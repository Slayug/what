/**
*	@arg name
*	@arg x spawn
*	@arg y spawn
*
**/
function Map(name){
	this.name = name;
	//spawn pos
	this.x = 0;
	this.y = 0;
	this.draw = drawMap;
	this.update = updateMap;
	this.tiles = loadMap();
}

function loadMap(){
	var tiles = [];
	//genere chunks de test
	for(var x = 256; x > 256-32; x--){
		for(var y = 0; y < TILE_BY_HEIGHT; y++){
			
		}
	}
	return tiles;
}
var updateMap = function(delta){
}
/**
*	one or two chunks to draw
**/
var drawMap = function(ctx){
	ctx.fillStyle='black';
}
/**
*	Represents 16 width of tile
*
**/
var Chunk = function (_x, _y){
	this.tiles = [];
	this.x = _x;
	this.y = _y;
}
function cut(x){
	if(x >= 0){
		return parseInt(x);
	}else{
		return parseInt(x-1);
	}
}

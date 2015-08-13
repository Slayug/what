/**
*	player's position on the right side of canvas
*
**/
var POS_TO_LEFT = 20;
/**
*	@arg name
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
	for(var x = 256; x > 0; x--){
		for(var y = 0; y < TILE_BY_HEIGHT; y++){
			var t = 0;
			if(y == 2){
				t = 1;
			}
			if(tiles[x] == undefined){
				tiles[x] = [];
			}
			var rdm = parseInt((Math.random()*3) + 1);
			if(rdm == 2){
				t = 2;
			}
			tiles[x][y] = t;
		}
	}
	return tiles;
}
var updateMap = function(delta){
}
/**
*	draw the map with the current position of player
**/
var drawMap = function(ctx){
	ctx.fillStyle='black';
	var startX = 0;
	var startY = 0;
	var indexTileX = parseInt(cut((player.x - (WIDTH-POS_TO_LEFT)/W_TILE)));
	var xCanvas = 0;
	var yCanvas = 0;
	for(var yT = 0; yT < TILE_BY_HEIGHT; yT++){
		for(var xT = indexTileX; xT < TILE_BY_WIDTH + indexTileX; xT++){
			TILE[this.tiles[xT][yT]].draw(ctx, xCanvas, yCanvas);
			xCanvas += W_TILE;
		}
		yCanvas += H_TILE;
		xCanvas = 0;
	}
}
function cut(x){
	if(x >= 0){
		return parseInt(x);
	}else{
		return parseInt(x-1);
	}
}

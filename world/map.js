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
	for(var x = -256; x < 100; x++){
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
	var startX = 0;
	var startY = 0;
	// left-top point of canvas in landmark game
	var aX = player.x + (WIDTH-POS_TO_LEFT);
	var indexTileX = cut(aX/W_TILE);
	if(aX % (W_TILE) != 0){
		startX = -(aX - (indexTileX*W_TILE));
	}
	var xCanvas = startX;
	var yCanvas = 0;
	for(var yT = 0; yT < TILE_BY_HEIGHT; yT++){
		for(var xT = indexTileX; xT < TILE_BY_WIDTH + indexTileX + (startX/startX); xT++){
			TILE[this.tiles[xT][yT]].draw(ctx, xCanvas, yCanvas);
			xCanvas += W_TILE;
		}
		yCanvas += H_TILE;
		xCanvas = startX;
	}
}
function cut(x){
	if(x >= 0){
		return parseInt(x);
	}else{
		return parseInt(x-1);
	}
}

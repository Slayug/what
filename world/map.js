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
	var aX = player.x - (WIDTH-POS_TO_LEFT);
	var indexTileX = cut(aX / W_TILE);
	if(aX % W_TILE != 0){
		startX = parseInt(-(aX - indexTileX*W_TILE));
	}
	var tileX = indexTileX;
	var tileY = 0;
	var pos = [];
	for(var xCanvas = startX; xCanvas < WIDTH - startX; xCanvas += W_TILE){
		for(var yCanvas = startY; yCanvas < HEIGHT - startY; yCanvas += H_TILE){
			TILE[this.tiles[tileX][tileY]].draw(ctx, xCanvas, yCanvas);
			tileY++;
		}
		tileX++;
		tileY = 0;
	}
}
function cut(x){
	if(x >= 0){
		return parseInt(x);
	}else{
		return parseInt(x-1);
	}
}

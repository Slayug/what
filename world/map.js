/**
*	player's position on the right side of canvas
*
**/
var POS_TO_LEFT = 40;

/**
*	@arg name
*
**/
function Map(name){
	this.name = name;
	this.draw = drawMap;
	this.update = updateMap;
	this.tiles = loadMap();
	this.next = nextGeneration;
}
/**
*	need only 50 tile by WIDTH to be INFINITY !
*	auto-generate when the 25 first have been scroll until 'x' == 30
*	and when the scroll come back for 'x' == 0
*	nextGeneration generate random tuile to 25 - 50 during 0-5
**/
function loadMap(){
	var tiles = [];
	//genere chunks de test
	for(var x = 0; x < 100; x++){
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
/**
*	auto-generate the tiles
*
**/
var nextGeneration = function(){
// left-top point of canvas in landmark game
	var aX = player.x + POS_TO_LEFT;
	var indexTileX = -cut(aX / W_TILE);
	//default generate 0-25
	var startX = 0;
	var startY = 0;
	// generate x: 25-50
	if(indexTileX == 0){
		startX = 25;
	}else{
		return;
	}
	for(var x = startX; x < startX+25; x++){
		for(var y = startY; y < TILE_BY_HEIGHT; y++){
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
}
var updateMap = function(delta){
	//this.next();
}
/**
*	draw the map with the current position of player
**/
var drawMap = function(ctx){
	var startX = 0;
	var startY = 0;
	// left-top point of canvas in landmark game
	var aX = player.x + (WIDTH-POS_TO_LEFT);
	var indexTileX = cut(aX / W_TILE);
	console.log(indexTileX);
	if(aX % W_TILE != 0){
		startX = parseInt(-(aX - indexTileX*W_TILE));
	}
	var tileX = indexTileX;
	var tileY = 0;
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

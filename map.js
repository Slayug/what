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
	load();
}
function load(){
	//genere chunks de test
	for(var x = 256; x > 256-32; x--){
		chunks[x] = [];
		for(var y = 0; y < 12; y++){
			var chunk = new Chunk(x, y);
			for(var xTile = 0; xTile < 16; xTile++){
				chunk.tiles[xTile] = [];
				for(var yTile = 0; yTile < 15; yTile++){
					if(undefined == chunk.tiles[xTile][yTile]){
						chunk.tiles[xTile][yTile] = [];
					}
					var t = 'a';
					if(y == 3){
						t = 'b';
					}
					chunk.tiles[xTile][yTile][0] = t;
				}
			}
			chunks[x][y] = chunk;
		}
	}
	return chunks;
}
var updateMap = function(delta){
}
/**
*	one or two chunks to draw
**/
var drawMap = function (ctx){
	ctx.fillStyle='black';

	var startX = 0;
	var startY = 0;
	var pY = player.y;
	var aX = player.x - (WIDTH/2);
	var aY = parseFloat(pY) + parseFloat(HEIGHT/2);
	var beMoreX = 0;
	var beMoreY = 0;

	var iXc = cut(aX / (W_TILE*WIDTH_CHUNK));
	var iYc = Math.ceil(aY / (H_TILE*HEIGHT_CHUNK));

	var iXt = cut((aX - iXc*W_TILE*WIDTH_CHUNK) / 16.0);
	var iYt = cut((iYc*H_TILE*HEIGHT_CHUNK - aY) / 16.0);
	if(aX % (WIDTH_CHUNK) != 0){
		startX = -(aX - (iXc*WIDTH_CHUNK*W_TILE + iXt*W_TILE));
	}
	if(aY % (HEIGHT_CHUNK) != 0){
		startY = -(iYc*HEIGHT_CHUNK*H_TILE - iYt*H_TILE) - aY;
	}

	var saveIXC = iXc;
	for(var yD = startY; yD < HEIGHT - startY; yD += H_TILE){
		var tile = this.chunks[iXc][iYc].tiles;
		for(var xD = startX; xD < WIDTH - startX; xD += W_TILE){
			var f = tile[iXt][iYt][0];
			if(f == 'a'){
				ctx.fillStyle='black';
				ctx.fillRect(xD, yD, 16, 16);
			}else{
				ctx.fillStyle='red';
				ctx.fillRect(xD, yD, 16, 16);
			}
			//this.tile[f](ctx, xD, yD);
			//ctx.fillText(iXc+' '+iYc+' '+iXt+' '+iYt, 50, 50);
			if(iXt >= (WIDTH_CHUNK-1)){
				iXt = 0;
				iXc++;
				tile = this.chunks[iXc][iYc].tiles;
			}else{
				iXt++;
			}
		}
		if(iYt >= (HEIGHT_CHUNK-1)){
			iYt = 0;
			iYc++;
		}else{
			iYt++;
		}
		iXc = saveIXC;
	}
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

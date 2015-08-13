var lastFrameTimeMs = 0;
var maxFPS = 120;
var delta = 0;
var timestep = 1000 / 60;
var fps = 120;
var framesThisSecond = 0;
var lastFpsUpdate = 0;
var ctx = null;
var player;
var map;
var inputManager;
/**
*	Constants
**/
var WIDTH = 320;
var HEIGHT = 240;
var SCALE = 1;
var W_TILE = 16;
var H_TILE = 16;
var TILE_BY_WIDTH = 20;
var TILE_BY_HEIGHT = 20;
function mouseMove(e){
	var xR = (e.clientX);
	var yR = (e.clientY);
}

/**
 * Add an event
 * @param elem the elem
 * @param event the event. e.g : "click"
 * @param funct the function to add
 */
function addEvent(elem, event, func) {
	if (elem.addEventListener) {
		elem.addEventListener(event, func, false);
	} else {
		elem.attachEvent('on' + event, func);
	}
}


/**
*	0: loading
*	1: game
**/
var currentState = 0;
/**
*	Image should be loaded
**/
var images = [
	'player.png',
	'monster.png'];
function load(){
	var elem = document.getElementById('c');
	if (!elem || !elem.getContext) {return;}
	ctx = elem.getContext('2d');
	if (!ctx) {return;}

	var w = window,
    e = document.documentElement,
    g = document.getElementsByTagName('body')[0],
    heightW = w.innerHeight|| e.clientHeight|| g.clientHeight;
	heightW = parseInt(heightW/100)*100;
	var widthW = parseInt(heightW * (320/240));
	ctx.canvas.width = widthW;
	ctx.canvas.height = heightW;
	SCALE = widthW/320;
	requestAnimationFrame(mainLoop);
	map = new Map();
	player = new Player();
	//loading image
	// every image is loaded in images
	// like image['player'] equal the image player.png
	// every image should be save in folder image/
	for(var i = 0; i < images.length; i++){
		var img = new Image();
		img.src = 'image/'+images[i];
		img.name = images[i].substr(0, images[i].indexOf('.'));
		images[img.name] = img;
		images[img.name].onload = function(){
			images[img.name] = img;
		}
	}
	//load events
	addEvent(elem, "mousemove", function (e) { mouseMove(e);});
	//load keys events
	inputManager = new Input();
	//start game
	currentState++;
}
function update(delta) {
	player.update(delta);
	//map.update(delta);
}
function draw(){
	ctx.save();
	ctx.scale(SCALE, SCALE);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	if(currentState == 0){
		var rdm = (Math.random()*3) + 1;
		var text = 'LOADING';
		for(var p = 0; p < rdm; p++){
			text += '.';
		}
		ctx.font = '40px serif';
		ctx.fillStyle = '#232323';
		ctx.fillText(text, WIDTH/2 - 77, HEIGHT/2 - 10);
	}else if(currentState == 1){
		map.draw(ctx);
		player.draw(ctx);

	}
	ctx.restore();
}
function panic() {
    delta = 0;
}
function mainLoop(timestamp) {
    // Throttle the frame rate.
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    if (timestamp > lastFpsUpdate + 1000) {
        fps = 0.25 * framesThisSecond + 0.75 * fps;

        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;
    var numUpdateSteps = 0;
    while (delta >= timestep) {
        update(timestep);
        delta -= timestep;
        if (++numUpdateSteps >= 240) {
            panic();
            break;
        }
    }
    draw();
    requestAnimationFrame(mainLoop);
}
load();

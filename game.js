var lastFrameTimeMs = 0;
var maxFPS = 120;
var delta = 0;
var timestep = 1000 / 120;
var fps = 120;
var framesThisSecond = 0;
var lastFpsUpdate = 0;
var ctx = null;
var player;
var map;
var inputManager;
var physHandler;
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
	if(SCALE % 0.5 != 0){
		SCALE = Math.round(widthW/320);
		ctx.canvas.width = 320*SCALE;
		ctx.canvas.height = 240*SCALE;
	}
	map = new Map();
	player = new Player();
	requestAnimationFrame(mainLoop);
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
	//load physique engine
	physHandler = new Phys();
	//start game
	currentState++;
}
function update(delta) {
	map.update(delta);
	player.update();
	physHandler.update( );
}
function draw(){
	ctx.save();
	ctx.fillStyle = "#FFFFFF";
	ctx.scale(SCALE, SCALE);
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
function randomColor(){
    var rdm = Math.round(Math.random()*10);
    switch (rdm) {
        case 0:
            return 'red';
            break;
        case 1:
            return 'green';
            break;
        case 2:
            return 'yellow';
            break;
        case 3:
            return 'rgb(203, 84, 202)';
            break;
        case 4:
            return 'purple';
            break;
        case 5:
            return '#222222';
            break;
        case 6:
            return 'rgb(186, 10, 184)';
            break;
        case 7:
            return 'rgb(131, 230, 111)';
            break;
        case 8:
            return 'rgb(235, 177, 29)';
            break;
        case 9:
            return 'rgb(74, 65, 62)';
            break;
        default:
            return '#232323';

    }
}
load();

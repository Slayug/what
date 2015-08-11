var lastFrameTimeMs = 0,
maxFPS = 120,
delta = 0,
timestep = 1000 / 60,
fps = 120,
framesThisSecond = 0,
lastFpsUpdate = 0,
ctx = null;
var player;
WIDTH = 800,
HEIGHT = 600;
function mouseMove(e){
	var xR = (e.clientX);
	var yR = (e.clientY);
	//console.log(xR+' '+yR);
}
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
	var widthW = parseInt(heightW * (800/600));
	HEIGHT = heightW;
	WIDTH = widthW;
	ctx.canvas.width = WIDTH;
	ctx.canvas.height = HEIGHT;
	player = new Player();
	requestAnimationFrame(mainLoop);
}
var keyReleased = function keyReleased(e){
	var key = e.keyCode? e.keyCode : e.charCode;
	if(key == 90){ //z
	}
	if(key == 83){ //s
	}
	if(key == 81){//q
	}
	if(key == 68){//d
	}
}

var keyPressed = function keyPress(e){
	var key = e.keyCode? e.keyCode : e.charCode;
	var key = e.keyCode? e.keyCode : e.charCode;
	if(key == 90){ //z
	}
	if(key == 83){ //s
	}
	if(key == 81){//q
	}
	if(key == 68){//d
	}
}
function update(delta) {
	player.update(delta);
	//map.update(delta);
}
function draw(){
	ctx.save();
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	player.draw(ctx);
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

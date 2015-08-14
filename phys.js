//Handle the physique of the game
var Phys = function Phys() {
    this.update = updatePhys ;
    this.playerPhys = playerPhys ;
}

var updatePhys = function( delta ) {
    this.playerPhys( delta ) ;
}

//Handle the movement and the gravity of the player
var playerPhys = function( delta  ){

    //Move the player in x
    player.x += player.vx * delta ; 
    //If the player go to the left
    if( player.vx < 0 ){
        player.vx++ ;
	//If the player go to fast
	if( player.vx < -player.vxmax )
	    player.vx = -player.vxmax;
    }
    //If the player go to the right
    if( player.vx > 0 ){
        player.vx-- ;
	//If the player go to fast
	if( player.vx > player.vxmax )
	    player.vx = player.vxmax;
    }

    //Move the player in y
    player.y += player.vy * delta ; 
    //If the player fall
    if( player.vy < 0 ){
        player.vy++ ;
	//If the player go to fast
	if( player.vy < -player.vymax )
	    player.vy = -player.vymax;
    }
    //If the player jump
    if( player.vy > 0 ){
        player.vy-- ;
	//If the player go to fast
	if( player.vy > player.vxmax )
	    player.vx = player.vxmax;
    }
}


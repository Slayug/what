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
    player.x += player.vX * delta * player.speed ;
    //If the player go to the left
    if( player.vX < 0 ){
        player.vX++ ;
	//If the player go to fast
	if( player.vX < -player.vXMax )
	    player.vX = -player.vXMax;
    }
    //If the player go to the right
    if( player.vX > 0 ){
        player.vX-- ;
	//If the player go to fast
	if( player.vX > player.vXMax )
	    player.vX = player.vXMax;
    }

    //Move the player in y
    player.y += player.vY * delta * player.speed;
    //If the player fall
    if( player.vY < 0 ){
        player.vY++ ;
	//If the player go to fast
	if( player.vY < -player.vYMax )
	    player.vY = -player.vYMax;
    }
    //If the player jump
    if( player.vY > 0 ){
        player.vY-- ;
	//If the player go to fast
	if( player.vY > player.vXMax )
	    player.vX = player.vXMax;
    }
}

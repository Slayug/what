//Handle the physique of the game
var Phys = function Phys() {
    this.update = updatePhys;
    this.playerPhys = playerPhys;
    this.colision = colisionPlayerMap;
}

var updatePhys = function( delta ) {
    this.playerPhys( delta ) ;
    this.colision();
}

//Handle the movement and the gravity of the player
var playerPhys = function playerPhys( delta  ){

    //If the player go to the left
    if( player.vX < 0 ){
        player.vX++ ;
	if( player.vX < -player.vXMax )
	    player.vX = -player.vXMax;
    }
    //If the player go to the right
    if( player.vX > 0 ){
        player.vX-- ;
	if( player.vX > player.vXMax )
	    player.vX = player.vXMax;
    }

    //Move the player in x
    player.x += player.vX * delta * player.speed ;
    //Move the player in y
    player.y += player.vY * delta * player.speed;

}

//Reposition the player if he collided with a tile
var colisionPlayerMap = function() {
    //Browse the map
    for( var x = 0 ; x < map.tiles.length ; x ++ ){
        for( var y = 0 ; y < TILE_BY_HEIGHT ; ++y ){

            //If the player hit the tile
            if( map.tiles[x][y] === 0 && collided( x , y ) ){
	        console.log( "Entered" );
		//Inverted the direction of the player
	        /*
		Switch over the position of the thing hited
		compared to the position of the player
		*/
	        switch( positionCollision( x , y ) ){
	            //Up
	            case 0 : 
			player.vY *= -1;
		        player.y = map.tiles[x][y]; 
		    break;
		    //Down
		    case 1 : 
			player.vY *= -1;
		        player.y = map.tiles[x][y] + TILE_BY_HEIGHT;
		    break;
		    //Left
		    case 2 :
		        player.vX *= -1;
		        player.x = map.tiles[x][y] + TILE_BY_WIDTH;
		    break;
		    //Right
		    case 3 : 
		        player.vX *= -1;
		        player.x = map.tiles[x][y];
		    break;
	        }
	    }

	}
    }
}

/*Determine the relative position of the tile 
compared to the player position*/
var positionCollision = function( x , y ){
    //If it's down
    if( y + TILE_BY_HEIGHT < player.y ){
        return 1;
    }
    //If it's up
    if( y > player.y ){
        return 0;
    }
    //If it's left
    if( x + TILE_BY_WIDTH >= player.x ){
        return 2;
    }
    //If it's right
    if( x < player.x ){
        return 3;
    }
}

var collided = function( x , y ){
    return x <= player.x + player.width && 
           x + TILE_BY_WIDTH >= player.x &&
	   y <= player.y + player.height &&
	   y + TILE_BY_HEIGHT >= player.y;
}

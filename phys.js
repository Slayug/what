//Handle the physique of the game
var Phys = function Phys(){
    this.update = updatePhys;
    this.playerPhys = playerPhys;
    this.colision = colisionPlayerMap;
}

var updatePhys = function( delta ){
    this.playerPhys( delta );
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
        player.vX--;
	if( player.vX > player.vXMax )
	    player.vX = player.vXMax;
    }
    //If the player go to the top
    if( player.vY > 0 ){
        player.vY--; 
        if( player.vY > player.vYMax )
            player.vY = player.vYMax;
    }
    //If the player go to the bottom
    if( player.vY < 0 ){
        if( player.vY < -player.vYMax )
            player.vY = -player.vYMax;
    }

    //Move the player in x
    player.x += player.vX * delta * player.speed ;
    //Move the player in y
    player.y += player.vY * delta * player.speed;

    this.colision();
}

//Reposition the player if he collided with a tile
var colisionPlayerMap = function() {

    var pX = parseInt( player.x / W_TILE );
    var pY = parseInt( player.y / H_TILE );
    var borneX = parseInt(player.width/W_TILE) + parseInt(player.x/W_TILE);
    var borneY = parseInt(player.height/H_TILE) + parseInt(player.y/H_TILE);

    //Broswe the tile around the player
    for( var x = pX; 
         x <= borneX; 
         x++ ){
        for( var y = pY; 
             y <= borneY; 
             y++ ){

            //If the tile can be hit by the player
            if( map.tiles[x][y] !== 0 ){
            /*
            Determine the type of collision 
            according to the movement of the player
            */
                switch( positionCollision( x * W_TILE , y * H_TILE ) ){
                    //Up
                    case 0 : 
                        player.vY *= -1;
                        player.y = y * H_TILE + H_TILE;
                    break;
                    //Down
                    case 1 :
                        player.vY = 0;
                        player.y = y * H_TILE - player.height;
                    break;
                    //Left
                    case 2 :
                        player.vX = 0;
                        player.x = x * W_TILE + W_TILE;
                    break;
                    //Right
                    case 3 :
                        player.vX = 0;
                        player.x = x * W_TILE - player.width;
                    break;
                }
            }
        }
    }
}

/*
Determine the relative position of the tile 
compared to the player position
*/
var positionCollision = function( x , y ){
    //If it's down
    if( y + H_TILE > player.y )
        return 1;
    //If it's up
    if( y < player.y + player.height )
        return 0;
    //If it's left
    if( x + W_TILE > player.x )
        return 2;
    //If it's right
    if( x < player.x + player.width )
        return 3;
}

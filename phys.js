//Handle the physique of the game
var Phys = function Phys(){
    this.update = updatePhys;
    this.playerPhys = playerPhys;
    this.colision = colisionPlayerMap;
}

var updatePhys = function( ){
    this.playerPhys( );
}

//Handle the movement , the gravity and the colision of the player
var playerPhys = function playerPhys(){

    player.x += player.vX * delta;
    var xT = parseInt(player.x/16);
    var yT = parseInt(player.y/16);
    //if(map.tiles[xT][yT] == 1){
    map.tiles[xT][yT] = 3;

    //}
}

//Reposition the player if he collided with a tile
var colisionPlayerMap = function() {

    var pX = parseInt( player.x / W_TILE );
    var pY = parseInt( player.y / H_TILE );
    var borneX = parseInt( ( player.x + player.width )/W_TILE);
    var borneY = parseInt( ( player.y + player.height )/H_TILE);

    //Broswe the tile around the player
    for( var x = pX;
         x <= borneX;
         x++ ){
        for( var y = pY;
             y <= borneY;
             y++ ){

            //If the tile can be hit by the player
            if( map.tiles[x][y] !== 1 ){
                /*
                Determine the type of collision
                according to the movement of the player
                */
                switch( positionCollision( x , y ) ){
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
                    default : break;
                }
            }
        }
    }
}

/*
Determine the relative position of the hited tile
compared to the player position
*/
var positionCollision = function( x , y ){
    //Determine the real vY of the player
    var pvY = player.vY * delta * player.speed;
    //Determine the real vX of the player
    var pvX = player.vX * delta * player.speed;

    //If it's top
    if( player.y - pvY > y * H_TILE + H_TILE )
        return 0;
    //If it's down
    if( player.y + player.height - pvY <= y * H_TILE )
        return 1;
    //If it's left
    if( player.x - pvX >= x * W_TILE + W_TILE )
        return 2;
    //If it's right
    if( player.x + player.width - pvX <= x * W_TILE )
        return 3;
}

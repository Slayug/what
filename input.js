var Input = function Input() {
  this.up = false;
  this.down = false;
  this.right = false;
  this.left = false;

  this.init = initInput;
  this.init();
}

var initInput = function initInput(){
    var doKeyDown = function( e ) {
        switch( e.keyCode ) {
            case 90 : case 38 : 
                inputManager.up = true ; 
            break ;
            case 40 : case 83 : 
                inputManager.down = true ; 
            break ;
            case 37 : case 81 : 
                inputManager.left = true ; 
            break ;
            case 39 : case 68 : 
                inputManager.right = true ; 
            break ;
            default : break ;
        }
    }
    var doKeyUp = function( e ) {
        switch( e.keyCode ) {
            case 90 : case 38 : 
                inputManager.up = false ; 
            break ;
            case 40 : case 83 : 
                inputManager.down = false ; 
            break ;
            case 37 : case 81 : 
                inputManager.left = false ; 
            break ;
            case 39 : case 68 : 
                inputManager.right = false ; 
            break ;
            default : break ;
        }
    }
    window.addEventListener( "keydown", doKeyDown);
    window.addEventListener( "keyup", doKeyUp);
}

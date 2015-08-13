var Input = function Input() {
  this.up = false ;  
  this.down = false ;  
  this.right = false ;  
  this.left = false ;  

  this.init = initInput ;
}

var initInput = function initInput(){
    var canvas = document.getElementById( "c" ) ;
    var doKeyDown = function( e ) {
        switch( e.keyCode ) {
	    case 90 : case 38 : this.up = true ; break ;
	    case 40 : case 83 : this.down = true ; break ;
	    case 37 : case 81 : this.left = true ; break ;
	    case 39 : case 68 : this.right = true ; break ;
	    default : break ;
	}
    }
    var doKeyUp = function( e ) {
        switch( e.keyCode ) {
	    case 90 : case 38 : this.up = false ; break ;
	    case 40 : case 83 : this.down = false ; break ;
	    case 37 : case 81 : this.left = false ; break ;
	    case 39 : case 68 : this.right = false ; break ;
	    default : break ;
	}
    }

    canvas.addEventListener( "keydown" , doKeyDown , true ) ;
    canvas.addEventListener( "keyup" , doKeyup , true ) ;
}

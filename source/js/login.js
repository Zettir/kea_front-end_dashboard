"use strict";
/* --------------------------------------------------------------
	Focus on Input
   -------------------------------------------------------------- */
let form = document.querySelectorAll('.input-content');

form.forEach( function( target ) {
    if( form.value != "" ) {
        target.classList.add("has-value");
    }
    else {
        target.classList.remove( 'has-value' );
    }
    target.addEventListener( 'blur', function( input ) {
        if( input.currentTarget.value != "" ) {
            target.classList.add("has-value");
        }
        else {
            target.classList.remove( 'has-value' );
        }
    });
});

/* --------------------------------------------------------------
	Validate Login
   -------------------------------------------------------------- */
function validate() {
    let attempt = 3;
    let username = document.getElementById( 'username' ).value;
    let password = document.getElementById( 'password' ).value;

    if ( username == 'peter' && password == 'peter#123'){
        alert ('Login successfully, welcome Peter.');
        document.querySelector( 'body' ).classList.add( 'color-1' );
        document.querySelector( 'body' ).classList.add( 'peter' );
        loop();
        display();
        return false;
    }
    if ( username == 'jonas' && password == 'jonas#123'){
        alert ('Login successfully, welcome Jonas.');
        document.querySelector( 'body' ).classList.add( 'color-2' );
        document.querySelector( 'body' ).classList.add( 'jonas' );
        loop();
        display();
        return false;
    }
    if ( username == 'martin' && password == 'martin#123'){
        alert ('Login successfully, welcome Martin.');
        document.querySelector( 'body' ).classList.add( 'color-3' );
        document.querySelector( 'body' ).classList.add( 'martin' );
        loop();
        display();
        return false;
    }
    else{
        // Decrementing by one.
        attempt --;
        alert('You have left '+attempt+' attempt');
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById( 'username' ).disabled = true;
            document.getElementById( 'password' ).disabled = true;
            document.getElementById( 'submit' ).disabled = true;
            return false;
        }
    }

    function display() {
        document.querySelector( 'body' ).classList.remove( 'login' );
        document.querySelector( '#main' ).style.display = 'flex';
        document.querySelector( '#user' ).style.display = 'block';
        document.querySelector( '#login' ).style.display = 'none';
    }
}
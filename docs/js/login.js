"use strict";
/* --------------------------------------------------------------
	Focus on Input
   -------------------------------------------------------------- */

let form = document.querySelectorAll('.input-content');

form.forEach( function( target ) {
    target.addEventListener( 'blur', function( input ) {
        console.log( input.currentTarget.value );
        console.log( input.target );
        console.log( input.target.classlist );

        if( input.currentTarget.value != "" ) {
            target.classList.add("has-value");
        }
        else {
            target.classList.remove( 'has-value' );
        }
    });
});

function validate(){
    let attempt = 3;
    let username = document.getElementById( 'username' ).value;
    let password = document.getElementById( 'password' ).value;

    if ( username == 'Formget' && password == 'formget#123'){
        alert ('Login successfully');
        // window.location = 'success.html'; // Redirecting to other page.
        document.querySelector( 'body' ).classList.remove( 'login' );
        document.querySelector( '#main' ).style.display = 'flex';
        document.querySelector( '#user' ).style.display = 'flex';
        document.querySelector( '#login' ).style.display = 'none';
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
}
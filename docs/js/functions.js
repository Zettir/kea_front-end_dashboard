"use strict";

let loops = 0;

async function loop() {
    let data = FooBar.getData();
    let json = JSON.parse(data);

    console.log(json);

/* --------------------------------------------------------------
	Main Variables
   -------------------------------------------------------------- */
   let bar = json.bar;
   let bartenders = json.bartenders;
   let beertypes = json.beertypes;
   let queue = json.queue;
   let serving = json.serving;
   let storage = json.storage;
   let taps = json.taps;
   let timestamp = json.timestamp;

/* --------------------------------------------------------------
	Main Infomations
   -------------------------------------------------------------- */
    document.querySelector( '#name' ).textContent = bar.name;

    user();

/* --------------------------------------------------------------
	Find User
   -------------------------------------------------------------- */
    function user() {
        if ( document.querySelector( 'body' ).classList.contains( 'peter' ) ) {
            if( loops < 1 ){
                console.log( '------------------------------' );
                console.log( 'You have logged in!' );
                console.log( 'Timestamp:', timestamp );
                console.log( 'Welcome', bartenders[0].name );
                console.log( '------------------------------' );
            }
            let bartender = 0;
            profile( bartender );
            team( bartenders, bartender );
            loops++;
        }
        if ( document.querySelector( 'body' ).classList.contains( 'jonas' ) ) {
            if( loops < 1 ){
                console.log( '------------------------------' );
                console.log( 'You have logged in!' );
                console.log( 'Timestamp:', timestamp );
                console.log( 'Welcome', bartenders[1].name );
                console.log( '------------------------------' );
            }
            let bartender = 1;
            profile( bartender );
            team( bartenders, bartender );
            loops++;
        }
        if ( document.querySelector( 'body' ).classList.contains( 'martin' ) ) {
            if( loops < 1 ){
                console.log( '------------------------------' );
                console.log( 'You have logged in!' );
                console.log( 'Timestamp:', timestamp );
                console.log( 'Welcome', bartenders[2].name );
                console.log( '------------------------------' );
            }
            let bartender = 2;
            profile( bartender );
            team( bartenders, bartender );
            loops++;
        }
    }

/* --------------------------------------------------------------
	Create Profile
   -------------------------------------------------------------- */
    function profile( bartender ) {
        document.querySelector( '#bartenderName' ).textContent = bartenders[ bartender ].name;
        document.querySelector( '#bartenderStatus' ).innerHTML = '<span>Status: </span>' + bartenders[ bartender ].status;

        if ( bartenders[ bartender ].statusDetail == 'waiting' ) {
            document.querySelector( '#bartenderStatusDetail .icon' ).innerHTML = '<i class="far fa-clock"></i>';
            document.querySelector( '#bartenderStatusDetail .text' ).innerHTML = '<b>Ongoing Work</b><br />Waiting...';
        }
        if ( bartenders[ bartender ].statusDetail == 'startServing' ) {
            document.querySelector( '#bartenderStatusDetail .icon' ).innerHTML = '<i class="fas fa-hand-holding-heart"></i>';
            document.querySelector( '#bartenderStatusDetail .text' ).innerHTML = '<b>Ongoing Work</b><br />Started Serving';
        }
        if ( bartenders[ bartender ].statusDetail == 'reserveTap' ) {
            document.querySelector( '#bartenderStatusDetail .icon' ).innerHTML = '<i class="fas fa-hourglass-half"></i>';
            document.querySelector( '#bartenderStatusDetail .text' ).innerHTML = '<b>Ongoing Work</b><br />Reserving a Tap';
        }
        if ( bartenders[ bartender ].statusDetail == 'pourBeer' ) {
            document.querySelector( '#bartenderStatusDetail .icon' ).innerHTML = '<i class="fas fa-beer"></i>';
            document.querySelector( '#bartenderStatusDetail .text' ).innerHTML = '<b>Ongoing Work</b><br />Pouring Beer';
        }
        if ( bartenders[ bartender ].statusDetail == 'releaseTap' ) {
            document.querySelector( '#bartenderStatusDetail .icon' ).innerHTML = '<i class="fas fa-sign-language"></i>';
            document.querySelector( '#bartenderStatusDetail .text' ).innerHTML = '<b>Ongoing Work</b><br />Releasing the Tap';
        }
        if ( bartenders[ bartender ].statusDetail == 'receivePayment' ) {
            document.querySelector( '#bartenderStatusDetail .icon' ).innerHTML = '<i class="fas fa-hand-holding-usd"></i>';
            document.querySelector( '#bartenderStatusDetail .text' ).innerHTML = '<b>Ongoing Work</b><br />Handling Payment';
        }
        if ( bartenders[ bartender ].statusDetail == 'replaceKeg' ) {
            document.querySelector( '#bartenderStatusDetail .icon' ).innerHTML = '<i class="fas fa-dolly"></i>';
            document.querySelector( '#bartenderStatusDetail .text' ).innerHTML = '<b>Ongoing Work</b><br />Replacing Keg';
        }

        if ( bartenders[ bartender ].servingCustomer == null ) {
            document.querySelector( '#bartenderServingCustomer .icon' ).innerHTML = '<i class="fas fa-search"></i>';
            document.querySelector( '#bartenderServingCustomer .text' ).innerHTML = '<b>Customer</b><br />Looking...';
        } else {
            document.querySelector( '#bartenderServingCustomer .icon' ).innerHTML = '<i class="fas fa-child"></i>';
            document.querySelector( '#bartenderServingCustomer .text' ).innerHTML = '<b>Customer ID</b><br />' + '<span>#</span>' + bartenders[ bartender ].servingCustomer;
        }
    }

/* --------------------------------------------------------------
	Create Team
   -------------------------------------------------------------- */
   function team( bartenders, bartender ) {
        let template = document.querySelector( '#bartenderTemplate' );
        let teamContainer = document.querySelector('.bartenders' );
        
        teamContainer.innerHTML = '';

        if ( bartender != 0 ) {
            let clone = template.cloneNode(true).content;
            clone.querySelector( '.bartenderImages' ).classList.add( 'color-1' );
            clone.querySelector( '.bartenderName' ).textContent = bartenders[0].name;
            clone.querySelector( '.bartenderStatus' ).innerHTML = '<span>Status: </span>' + bartenders[0].status;
            teamContainer.appendChild( clone );
        }
        if ( bartender != 1 ) {
            let clone = template.cloneNode(true).content;
            clone.querySelector( '.bartenderImages' ).classList.add( 'color-2' );
            clone.querySelector( '.bartenderName' ).textContent = bartenders[1].name;
            clone.querySelector( '.bartenderStatus' ).innerHTML = '<span>Status: </span>' + bartenders[1].status;
            teamContainer.appendChild( clone );
        }
        if ( bartender != 2 ) {
            let clone = template.cloneNode(true).content;
            clone.querySelector( '.bartenderImages' ).classList.add( 'color-3' );
            clone.querySelector( '.bartenderName' ).textContent = bartenders[2].name;
            clone.querySelector( '.bartenderStatus' ).innerHTML = '<span>Status: </span>' + bartenders[2].status;
            teamContainer.appendChild( clone );
        }
        /*
        bartenders.forEach( function( bartender ) {
            let clone = template.cloneNode(true).content;

            clone.querySelector( '.bartenderName' ).textContent = bartender.name;
 
            teamContainer.appendChild( clone );
        });
        */
    }


    // Set interval - data changes every 30 seconds
    setInterval(loop,60000);
}

window.addEventListener(`DOMContentLoaded`, loop);
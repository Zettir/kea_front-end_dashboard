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
   let beerTypes = json.beertypes;
   let queue = json.queue;
   let serving = json.serving;
   let storage = json.storage;
   let tapsInfo = json.taps;
   let timestamp = json.timestamp;

/* --------------------------------------------------------------
	Main Infomations
   -------------------------------------------------------------- */
    document.querySelector( '#name' ).textContent = bar.name;
    document.querySelector( '#queue .number' ).textContent = queue.length;

    user();
    beers( beerTypes );

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
    }

/* --------------------------------------------------------------
	Beer Types
   -------------------------------------------------------------- */
    function beers( types ) {
        console.log( types );
        taps( tapsInfo, types );
    }

/* --------------------------------------------------------------
	Create Taps
   -------------------------------------------------------------- */
    function taps( taps, types ) {
        let template = document.querySelector( '#tap-template' );
        let tapContainer = document.querySelector('#taps' );

        tapContainer.innerHTML = '';

        console.log( taps );

        taps.forEach( function( tap ) {
            let clone = template.cloneNode(true).content;

            if ( tap.beer == types[0].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[0].label + '")';
            }
            if ( tap.beer == types[1].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[1].label + '")';
            }
            if ( tap.beer == types[2].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[2].label + '")';
            }
            if ( tap.beer == types[3].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[3].label + '")';
            }
            if ( tap.beer == types[4].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[4].label + '")';
            }
            if ( tap.beer == types[5].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[5].label + '")';
            }
            if ( tap.beer == types[6].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[6].label + '")';
            }
            if ( tap.beer == types[7].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[7].label + '")';
            }
            if ( tap.beer == types[8].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[8].label + '")';
            }
            if ( tap.beer == types[9].name ) {
                clone.querySelector( '.tap-images' ).style.backgroundImage = 'url("images/img/' + types[9].label + '")';
            }

            clone.querySelector( '.tap-name .number' ).textContent = '#' + (tap.id+1);
            clone.querySelector( '.beer-name .name' ).textContent = tap.beer;


            tapContainer.appendChild( clone );
        });
    }


    // Set interval - data changes every 30 seconds
    setInterval(loop,60000);
}

window.addEventListener(`DOMContentLoaded`, loop);
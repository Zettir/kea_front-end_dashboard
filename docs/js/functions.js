"use strict";

let data;
let json;

async function loop() {
    data = FooBar.getData();
    json = JSON.parse(data);

    console.log(json);

    let bar = json.bar;

    document.querySelector( '#name' ).textContent = bar.name;

    if ( document.querySelector( 'body' ).classList.contains( 'peter' ) ) {
        console.log(json.bartenders[0].name);
        document.querySelector( '#bartenderName' ).textContent = json.bartenders[0].name;
    }
    if ( document.querySelector( 'body' ).classList.contains( 'jonas' ) ) {
        console.log(json.bartenders[1].name);
        document.querySelector( '#bartenderName' ).textContent = json.bartenders[1].name;
    }
    if ( document.querySelector( 'body' ).classList.contains( 'martin' ) ) {
        console.log(json.bartenders[2].name);
        document.querySelector( '#bartenderName' ).textContent = json.bartenders[2].name;
    }


    // Set interval - data changes every 30 seconds
    setInterval(loop,30000);
}    


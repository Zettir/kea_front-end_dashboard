"use strict";

let data;
let json;

async function loop() {
    data = FooBar.getData();
    json = JSON.parse(data);

    console.log(json);

    let bar = json.bar;

    document.querySelector( '#name' ).textContent = bar.name;
}    

// Set interval - data changes every 10 seconds
setInterval(loop,10000);

// Read the script when DOM is downloaded
document.addEventListener("DOMContentLoaded", loop);
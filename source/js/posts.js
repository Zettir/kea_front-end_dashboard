window.addEventListener("load", startThisStuff);
let template;
function startThisStuff(){
    template = document.querySelector("#postTemplate").content;
    
    fetch("data/posts.json").then(e=>e.json()).then(showPosts);
    function showPosts(data){
        data.forEach((dataElement, index)=>{
            let clone = template.cloneNode(!false);
            clone.querySelector(".header").textContent = dataElement.header;
            clone.querySelector(".name").textContent = dataElement.name;
            clone.querySelector(".body").textContent = dataElement.body;
            clone.querySelector(".when").textContent = dataElement.when;
            addMedia(clone.querySelector(".media"), dataElement.media);
            if(dataElement.pinned){
                document.querySelector("#featured").appendChild(clone)
            } else {
                document.querySelector("#posts").appendChild(clone)
            }
        });
    }

    function addMedia(element, media){
        console.log(element);
        console.table(media)
        media.forEach((media, index)=>{
            let el;
            switch(media.type) {
                case "img":
                    el = document.createElement("img");
                    el.setAttribute("src", media.path);
                break;
                case "svg":
                    el = document.createElement("div");
                    fetch(media.path).then(e=>e.text()).then(data=>el.innerHTML=data)
                break;
            }
            el.classList.add("media-item");
            element.appendChild(el);
        });
    }
}
console.log("this is the menu file");
window.addEventListener("load", ()=>{
    let items = ["home", "about"];
    let parent = document.createElement("ul");
    let menu = document.querySelector("#menu");
    for(let i=0; i<items.length; i++){
        let el = document.createElement("li")
        let link = document.createElement("a");
        link.textContent=items[i];
        let path = "./";
            if(items[i]!="home"){
                path = items[i];
            }

        link.setAttribute("href", path);
        link.addEventListener('click',(e)=>{
            e.preventDefault();

            history.pushState({}, items[i], path);
        });
        el.classList.add("mui--text-black-54", "mui--text-body2");
        el.appendChild(link);
        parent.appendChild(el);
    }
    menu.appendChild(parent);
});

//changes the display value, and the onclick attribute depending on the screen size. 
function mediaspecific(x) { 
    let collapsible = document.getElementsByClassName("collapse"); 
    let i;
    for(i = 0; i < collapsible.length; i++){
        collapsible[i].nextElementSibling.setAttribute("id", `${i}`)
        let content = document.getElementById(i);
        if (x.matches) {
            collapsible[i].removeAttribute("onclick");
            collapsible[i].disable = "true";
            content.style.display= "block";
        } else {
            collapsible[i].setAttribute("onclick", `accordion(${i})`);
            content.style.display = "none";
        }
    }
}

//expands and collapses the content
function accordion(x) {
    let content = document.getElementById(x)
    if (content.style.display === "block"){
        content.style.display = "none";
    } else {
        content.style.display = "block";
        
    }
}

var notmobile = window.matchMedia("(min-width:600px)");
mediaspecific(notmobile); //runs when first opened
notmobile.addListener(mediaspecific); //listens for sreen size change



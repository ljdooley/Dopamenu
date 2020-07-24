//changes the display value of sections with class menuoptions, and the onclick attribute of buttons with class collapse depending on the screen size. 
function mediaspecific(x) { 
    let collapsible = document.getElementsByClassName("collapse"); //creates a collection of all buttons with class collapse
    let i;
    for(i = 0; i < collapsible.length; i++){
        collapsible[i].nextElementSibling.setAttribute("id", `${i}`) //next sibling elements all have class menuoptions
        let content = document.getElementById(i); 
        if (x.matches) { //true when min-width:600px
            collapsible[i].removeAttribute("onclick"); 
            collapsible[i].disable = "true"; 
            content.style.display= "block"; 
        } else {
            collapsible[i].setAttribute("onclick", `accordion(${i})`); //assigns the number value of i to be passed to the accordion function onclick. 
            content.style.display = "none";
        }
    }
}

//expands and collapses the content, initiated by clicking button. The value of x was assigned in the mediaspecific function.
function accordion(x) {
    let content = document.getElementById(x) //creates a collection of all buttons w/id attribute value set to the value stored in x
    if (content.style.display === "block"){
        content.style.display = "none";
    } else {
        content.style.display = "block";
        
    }
}

var notmobile = window.matchMedia("(min-width:600px)"); //true or false
mediaspecific(notmobile); //runs when first opened
notmobile.addListener(mediaspecific); //listens for sreen size change



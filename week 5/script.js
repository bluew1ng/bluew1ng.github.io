// tryna do this correctly! 

/* menu show hide */

let isShown = true;

function hideBar() {

    let sideBarHideShow = document.getElementsByClassName('navStyle')[0];
    let content = document.getElementsByClassName('container-content')[0];

    
    // classes return as an array

    if(isShown) {

        //hide
        sideBarHideShow.style.display = "none";
        content.style.position = "absolute";
        content.style.left = "220px";
        content.style.width = "calc(100% - 50px)";
    }

    else {
        // show
        sideBarHideShow.style.display = "block";
        content.style.position = "relative";
        content.style.left = "25vw";
        content.style.width = "65vw";
    }

    isShown = !isShown;
}
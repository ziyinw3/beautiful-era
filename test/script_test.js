
var scrollPos = 0;
var dir = '';


window.addEventListener("scroll", () => {
    dir_listener();
    fade_scroll('element');
})

// functions

function fade_scroll(id) {
    element = document.getElementById(id);
    if (dir = 'down') {    
        console.log('going down');
        var opacity = 1;
        opacity = 3 * (element.offsetHeight + element.getBoundingClientRect().top)/element.offsetHeight;
    }
    else if (dir = 'up') {
        console.log('going up');
        var opacity = 1;
        opacity = 1 - 3 * (element.getBoundingClientRect().top - element.offsetHeight)/element.offsetHeight;
    }
    // floorer
    if (opacity > 1) {
        opacity = 1;
    }
    else if (opacity < 0) {
        opacity = 0;
    }
    element.style.opacity = opacity;
    console.log(opacity);
}


// listen to scroll direction
function dir_listener() {
    if ((document.body.getBoundingClientRect()).top > scrollPos)
    dir = 'up';
    else
    dir = 'down';
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
}
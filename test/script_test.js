window.addEventListener("scroll", () => {
    fade_scroll('element');
})

// functions

function fade_scroll(id) {
    var opacity = 1;
    element = document.getElementById(id);
    element_top = element.getBoundingClientRect().top;
    element_bottom = element.getBoundingClientRect().bottom;
    element_height = element.getBoundingClientRect().height;

    // element entirely within vp
    if (element_bottom > window.innerHeight && element_top < 0) {
        opacity = 1;
        console.log('3');
    }
    // element entirely overlapping vp
    else if (element_bottom < window.innerHeight && element_top > 0) {
        opacity = 1;
        console.log('4');
    }
    // element bottom in vp
    else if (element_top < 0 && element_bottom < window.innerHeight) {
        opacity = element_bottom / window.innerHeight;
        console.log('1');
    }
    // element top in vp
    else if (element_top > 0 && element_bottom > window.innerHeight) {
        opacity = (window.innerHeight - element_top) / window.innerHeight;
        console.log('2');
    }
    // floorer
    if (opacity > 1) {
        opacity = 1;
    }
    else if (opacity < 0) {
        opacity = 0;
    }

    element.style.opacity = opacity;
}
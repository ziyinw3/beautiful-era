document.addEventListener('DOMContentLoaded', () => {
    // elements fade in on launch
    slideUp("scroll_button", 1600);
    slideUp("cn_title_container", 200);
    slideUp("cn_title_small_container", 250);
    slideUp("cn_title_2_container", 300);
    slideUp("en_title_container", 450);
    slideUp("subtitle_container", 700);
});

window.addEventListener("scroll", () => {
    fade_scroll('landing_page');
    fade_scroll('row');
})

// functions


function fade_in(id, delay) {
    setTimeout( () => document.getElementById(id).style.opacity = 1, delay);
}

function fade_out(id, delay) {
    setTimeout( () => document.getElementById(id).style.opacity = 0, delay);
}

function fade_scroll(id) {
    var opacity = 1;
    element = document.getElementById(id);
    element_top = element.getBoundingClientRect().top;
    element_bottom = element.getBoundingClientRect().bottom;
    element_height = element.getBoundingClientRect().height;
    // element entirely within vp
    if (element_bottom > window.innerHeight && element_top < 0) {
        opacity = 1;
    }
    // element entirely overlapping vp
    else if (element_bottom < window.innerHeight && element_top > 0) {
        opacity = 1;
    }
    // element bottom in vp
    else if (element_top < 0 && element_bottom < window.innerHeight) {
        opacity = 1.3 * element_bottom / window.innerHeight;
    // adjust multiplier to tune for 'forgiveness' of opacity based on full element display
    }
    // element top in vp
    else if (element_top > 0 && element_bottom > window.innerHeight) {
        opacity = 1.3 * (window.innerHeight - element_top) / window.innerHeight;
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

function slideUp(id, delay) {
    id = document.getElementById(id);
    setTimeout( () => id.classList.add("slide"), delay);
    
}


var opacity = 1;
element = document.getElementById("element");

window.addEventListener("scroll", () => {
    opacity = 1.5 * (element.offsetHeight + element.getBoundingClientRect().top)/element.offsetHeight;
    if (opacity > 1) {
        opacity = 1;
    }
    else if (opacity < 0) {
        opacity = 0;
    }
    console.log(opacity);
    element.style.opacity = opacity;
})

function scroll_dir_listener() {
    var scroll_position = 0;
    var dir = 'down';
    if (document.body.getBoundingClientRect().top > scroll_position) {
        dir = 'up';
    }
    else {
        dir = 'down';
    }
    scroll_position = document.body.getBoundingClientRect().top;
    console.log(dir);
}
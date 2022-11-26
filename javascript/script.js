function fade_in(id, delay) {
    setTimeout( () => document.getElementById(id).style.opacity = 1, delay);
}

function fade_out(id, delay) {
    setTimeout( () => document.getElementById(id).style.opacity = 0, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    // elements fade in on launch
    fade_in("scroll_button", 1600);
    fade_in("cn_title", 200);
    fade_in("cn_title_small", 250);
    fade_in("cn_title_2", 300);
    fade_in("en_title", 400);
    fade_in("subtitle", 500);
});


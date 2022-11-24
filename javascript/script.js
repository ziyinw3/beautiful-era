function fade_in(id, delay) {
    setTimeout( () => document.getElementById(id).style.opacity = 1, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    fade_in("scroll_button", 2000);
    fade_in("cn_title", 300);
    fade_in("en_title", 500);
    fade_in("subtitle", 600);
});
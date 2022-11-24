function fade_in(id, delay) {
    setTimeout( () => document.getElementById(id).style.opacity = 1, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    fade_in("TEXT", 2000);
});
document.addEventListener("DOMContentLoaded", () => {
    slideUp('text');
})

function slideUp(id) {
    id = document.getElementById(id);
    id.classList.add("slide");
}
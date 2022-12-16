document.addEventListener("DOMContentLoaded", () => {
    slideUp('text');
})

function slideUp(id) {
    var element = document.getElementById(id);
    var pos = 0;
    function frame() {
        if (pos == container_top) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
        }
    }
}
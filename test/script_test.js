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
/*     console.log(opacity); */
    element.style.opacity = opacity;
})



function scroll_dir_listener() {
    var old_scroll_pos = window.scrollY;
    var dir = 'down';
    window.onscroll = function(e) {
        if (old_scroll_pos < window.scrollY) {
            dir = 'down';
        }
        else {
            dir = 'up';
        }
        old_scroll_pos = window.scrollY;
        console.log(old_scroll_pos, window.scrollY);
    }
}

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		console.log('up');
	else
		console.log('down');
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});
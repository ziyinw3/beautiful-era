window.addEventListener('scroll', () => {
    const position = window.scrollY;
    if (Math.ceil(position) === 1000) {
        alert('you passed 1000!');
    }
    console.log(position);
})
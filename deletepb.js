document.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    if (windowHeight + scrollY >= bodyHeight) {
        footer.style.display = 'block'; // Show the footer when scrolled to the bottom
    } else {
        footer.style.display = 'none'; // Hide the footer otherwise
    }
});
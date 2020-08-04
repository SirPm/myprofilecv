const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const close = document.getElementById('close');

hamburger.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    hamburger.style.display = 'none';
});

close.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    hamburger.style.display = 'block';
});
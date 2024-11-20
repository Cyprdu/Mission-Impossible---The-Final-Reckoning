document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const crossIcon = document.getElementById('cross-icon');
    const reserveButton = document.querySelector('.reserve-button');

    // Toggle menu open/close
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
        crossIcon.style.display = menu.classList.contains('open') ? 'block' : 'none';
        reserveButton.classList.toggle('hidden');
    });

    crossIcon.addEventListener('click', function() {
        menu.classList.remove('open');
        crossIcon.style.display = 'none';
        reserveButton.classList.remove('hidden');
    });

    // Hide reserve button when video background is visible
    const bgVideo = document.getElementById('bg-video');
    bgVideo.addEventListener('play', function() {
        reserveButton.classList.remove('hidden');
    });

    bgVideo.addEventListener('ended', function() {
        reserveButton.classList.add('hidden');
    });
});

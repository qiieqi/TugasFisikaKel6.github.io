// Script to toggle dark overlay for Kelompok Kami
document.addEventListener('DOMContentLoaded', function() {
    const darkOverlay = document.getElementById('dark-overlay');
    const kelompokKamiLink = document.querySelector('a[href="/kelompok_kami"]');

    kelompokKamiLink.addEventListener('click', function(event) {
        event.preventDefault();
        darkOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

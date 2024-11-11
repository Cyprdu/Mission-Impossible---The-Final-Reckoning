// Toggle Menu Open/Close
document.getElementById("menu-toggle").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    const crossIcon = document.getElementById("cross-icon");
    const menuIcon = document.getElementById("menu-toggle");
    menu.classList.add("open");
    menuIcon.style.display = "none";
    crossIcon.style.display = "block";
});

// Close Menu on Cross Icon Click
document.getElementById("cross-icon").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    const crossIcon = document.getElementById("cross-icon");
    const menuIcon = document.getElementById("menu-toggle");
    menu.classList.remove("open");
    crossIcon.style.display = "none";
    menuIcon.style.display = "block";
});

// Video Opacity on Scroll
window.addEventListener("scroll", function() {
    const video = document.getElementById("bg-video");
    const opacity = 1 - window.scrollY / 600;
    video.style.opacity = opacity < 0 ? 0 : opacity;
});

// Sélectionne le bouton "Réservez vos places"
const reserveButton = document.querySelector('.reserve-button');

// Fonction pour vérifier la position du défilement
function checkScrollPosition() {
    // Récupère la position actuelle de défilement
    const scrollPosition = window.scrollY;

    // Si la position de défilement dépasse la position du synopsis (100vh + un petit offset)
    if (scrollPosition > document.getElementById('synopsis').offsetTop - window.innerHeight) {
        reserveButton.classList.add('hidden'); // Ajoute la classe "hidden" pour faire disparaître le bouton
    } else {
        reserveButton.classList.remove('hidden'); // Retire la classe "hidden" pour afficher le bouton
    }
}

// Écoute l'événement de défilement et appelle la fonction à chaque défilement
window.addEventListener('scroll', checkScrollPosition);

// Sélection des éléments
const menuToggle = document.getElementById('menu-toggle');
const crossIcon = document.getElementById('cross-icon');
const menu = document.getElementById('menu');

// Fonction pour ouvrir le menu
function openMenu() {
    menu.classList.add('open'); // Ajoute la classe 'open' pour afficher le menu
    crossIcon.style.display = 'block'; // Affiche l'icône de fermeture
    menuToggle.style.display = 'none'; // Masque l'icône du menu (tiroir)
}

// Fonction pour fermer le menu
function closeMenu() {
    menu.classList.remove('open'); // Retire la classe 'open' pour masquer le menu
    crossIcon.style.display = 'none'; // Masque l'icône de fermeture
    menuToggle.style.display = 'block'; // Réaffiche l'icône du menu
}

// Ouvrir le menu lorsque l'icône "menu" est cliquée
menuToggle.addEventListener('click', openMenu);

// Fermer le menu lorsque l'icône "croix" est cliquée
crossIcon.addEventListener('click', closeMenu);

// Fermer le menu si un lien du menu est cliqué (facultatif, si vous voulez fermer quand un lien est sélectionné)
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
// Désactive le clic droit sur toute la page
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Empêche l'ouverture du menu contextuel
});


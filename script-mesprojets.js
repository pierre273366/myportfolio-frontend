//Carrouselle:

// Initialisation de Swiper
const swiper = new Swiper(".swiper", {
  // Paramètres de base pour Swiper
  slidesPerView: 1, // Affiche 1 slide à la fois
  spaceBetween: 20, // Espacement entre les slides
  loop: true, // Permet la boucle infinie
  autoplay: {
    delay: 2500, // Temps avant de passer à un autre slide (en ms)
    disableOnInteraction: false, // L'autoplay continue après l'interaction
  },
  pagination: {
    el: ".swiper-pagination", // Éléments de pagination (les points)
    clickable: true, // Rendre les points cliquables
  },
  navigation: {
    nextEl: ".swiper-button-next", // Flèche "suivant"
    prevEl: ".swiper-button-prev", // Flèche "précédent"
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // Sur les écrans plus larges, afficher 2 slides
    },
    1024: {
      slidesPerView: 3, // Sur les écrans encore plus larges, afficher 3 slides
    },
  },
});

//bouton retour accueil :

function goToHome() {
  window.location.href = "index.html";
}

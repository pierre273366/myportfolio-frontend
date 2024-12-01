//Carrouselle:

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  speed: 600,
  coverflowEffect: {
    rotate: 50,
    stretch: 10,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
});

//bouton retour accueil :

function goToHome() {
  window.location.href = "index.html";
}

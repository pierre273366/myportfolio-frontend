function goToHome() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".whoiam");

  // Déclencher l'animation de fade-in, zoom-in et slide-up après un délai
  setTimeout(() => {
    textElement.classList.add("visible");
  }, 500); // 500ms pour laisser le temps de charger la page

  // Animation pour le bouton "Retour"
  const returnButton = document.querySelector(".button-retour");
  returnButton.addEventListener("click", () => {
    // On pourrait ajouter un effet visuel avant de revenir à l'accueil
    returnButton.innerHTML = "Retour en cours...";
    setTimeout(() => {
      window.location.href = "../pages/index.html";
    }, 500); // Délai de 500ms pour l'effet avant de rediriger
  });
});

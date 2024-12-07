function goToHome() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".whoiam");

  setTimeout(() => {
    textElement.classList.add("visible");
  }, 500);

  const returnButton = document.querySelector(".button-retour");
  returnButton.addEventListener("click", () => {
    returnButton.innerHTML = "Retour en cours...";
    setTimeout(() => {
      window.location.href = "../pages/index.html";
    }, 500);
  });
});

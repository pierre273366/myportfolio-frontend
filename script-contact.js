function goToHome() {
  window.location.href = "index.html";
}

/*formulaire pour envoie de mail :*/

document.querySelector(".btn-2").addEventListener("click", (e) => {
  e.preventDefault(); // Empêche le formulaire de se soumettre normalement
  const formData = {
    name: document.querySelector('[name="name"]').value,
    societe: document.querySelector('[name="societe"]').value,
    phone: document.querySelector('[name="phone"]').value,
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value,
  };
  fetch("https://myportfolio-backend-sigma.vercel.app/api/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    })
    .catch((error) => {
      console.error(error);
      alert(
        "Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer."
      );
    });
});

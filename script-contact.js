function goToHome() {
  window.location.href = "index.html";
}

/*formulaire pour envoie de mail :*/

emailjs.init("xJaV1q3AY-GPUYhsq"); // Remplacez "votre_user_id" par votre User ID EmailJS

document.querySelector(".btn-2").addEventListener("click", (e) => {
  console.log("clic");
  e.preventDefault(); // Empêche le formulaire de se soumettre normalement

  const formData = {
    name: document.querySelector('[name="name"]').value,
    societe: document.querySelector('[name="societe"]').value,
    phone: document.querySelector('[name="phone"]').value,
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value,
  };

  emailjs.send("service_4wlrgpp", "template_81sx2cy", formData).then(
    (response) => {
      console.log("E-mail envoyé avec succès", response);

      // Créer une notification visuelle
      const notification = document.createElement("div");
      notification.classList.add("notification", "success");
      notification.textContent = "E-mail envoyé avec succès 🚀 !";

      // Ajouter la notification au body
      document.body.appendChild(notification);

      // Afficher la notification avec animation
      setTimeout(() => {
        notification.classList.add("show");
      }, 10); // Petite temporisation pour garantir que la classe 'show' soit ajoutée après l'ajout dans le DOM

      // Ajouter un délai pour cacher la notification après 3 secondes
      setTimeout(() => {
        notification.classList.remove("show");
        // La supprimer complètement du DOM après l'animation
        setTimeout(() => {
          notification.remove();
        }, 500); // Délai pour laisser le temps à l'animation de disparaître
      }, 3000);

      // Réinitialiser les champs du formulaire
      document.querySelector('[name="name"]').value = "";
      document.querySelector('[name="societe"]').value = "";
      document.querySelector('[name="phone"]').value = "";
      document.querySelector('[name="email"]').value = "";
      document.querySelector('[name="message"]').value = "";
    },
    (error) => {
      console.error("Erreur lors de l'envoi de l'e-mail", error);

      // Créer une notification d'erreur
      const notification = document.createElement("div");
      notification.classList.add("notification", "error");
      notification.textContent = "Erreur lors de l'envoi de l'e-mail.";

      // Ajouter la notification au body
      document.body.appendChild(notification);

      // Afficher la notification avec animation
      setTimeout(() => {
        notification.classList.add("show");
      }, 10);

      // Ajouter un délai pour cacher la notification après 3 secondes
      setTimeout(() => {
        notification.classList.remove("show");
        // La supprimer complètement du DOM après l'animation
        setTimeout(() => {
          notification.remove();
        }, 500);
      }, 3000);
    }
  );
});

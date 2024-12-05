function goToHome() {
  window.location.href = "index.html";
}

/*formulaire pour envoie de mail :*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn-2").addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const societe = document.querySelector('input[name="societe"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    fetch("http://localhost:6000//mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, societe, phone, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Email sent successfully!") {
          alert("Email sent successfully!");
        } else {
          alert("Failed to send email. Error: " + data.error);
        }
      })
      .catch((error) => {
        alert("Failed to send email. Error: " + error.toString());
      });
  });
});

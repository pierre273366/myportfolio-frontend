function goToHome() {
  window.location.href = "index.html";
}

/*formulaire pour envoie de mail :

const formul = document.getElementsByClassName("form");

const formEvent = formul.addEventListener("btn-2", (event) => {
  event.preventDefault();

  let mail = new FormData(formul);

  sendMail(mail);
});

const sendMail = (mail) => {
  
  fetch("/send", {
    method: "post", 
    body: mail, 

  }).then((response) => {
    return response.json();
  });
};*/

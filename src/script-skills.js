// Barre skills:

function moveJs() {
  let elem = document.getElementById("progress-bar-js");
  let width = 0;
  let id = setInterval(frame, 100);

  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

moveJs();

function moveHtml() {
  let elem = document.getElementById("progress-bar-html");
  let width = 0;
  let id = setInterval(frame, 100);

  function frame() {
    if (width >= 55) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

moveHtml();

function moveCss() {
  let elem = document.getElementById("progress-bar-css");
  let width = 0;
  let id = setInterval(frame, 100);

  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

moveCss();

function moveReact() {
  let elem = document.getElementById("progress-bar-react");
  let width = 0;
  let id = setInterval(frame, 100);

  function frame() {
    if (width >= 30) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}

moveReact();

function goToHome() {
  window.location.href = "index.html";
}

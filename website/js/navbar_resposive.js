var resp_button = document.querySelector('.responsive');colorMode
var colorMode = document.querySelector('.colorMode');
var downicon = document.querySelector('.downicon');
var respon = window.matchMedia("(max-width: 650px)");

function myFunction(respon) {
    if (respon.matches) { // If media query matches
      resp_button.style.display = "block";
      colorMode.style.display = "none";
    } else {
      resp_button.style.display = "none";
      colorMode.style.display = "block";
    }
  }
  myFunction(respon);
  respon.addListener(myFunction);
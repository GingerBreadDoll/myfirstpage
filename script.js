let responsive_menu = document.querySelector(".checkbtn");

responsive_menu.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};

//Contact form
const form = document.getElementById("form");
const names = document.getElementById("name");
const paragraph = document.getElementById("warning");

function checkForm() {
  let warnings = "";
  let valid = true;
  paragraph.innerHTML = "";

  if (names.value.length < 3) {
    warnings += `The name must be at least three (3) letters long`;
    valid = false;
  }

  if (!valid) {
    paragraph.innerHTML = warnings;
  } else {
    paragraph.innerHTML = "Sent successfully";
  }
  return valid;
}

form.addEventListener("submit", (e) => {
  if (checkForm()) {
    // Si la validación es exitosa, puedes enviar el formulario
    form.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
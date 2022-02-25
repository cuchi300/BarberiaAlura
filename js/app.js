document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
  scrollNav();
}

function navegacionFija() {
  const barra = document.querySelector(".header-top");
  const tituloSeccion = document.querySelector(".contenedor-tabla");

  window.addEventListener("scroll", function () {
    console.log(tituloSeccion.getBoundingClientRect());

    if (tituloSeccion.getBoundingClientRect().top < 0) {
      barra.classList.add("fijo");
    } else {
      barra.classList.remove("fijo");
    }
  });
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".header-navegacion a");

  enlaces.forEach((enlaces) => {
    enlaces.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}

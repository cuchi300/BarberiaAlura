const { src, dest, watch } = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");

//IMAGENES
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
  src("src/scss/**/*.scss") // identifica el archivo
    .pipe(plumber()) //
    .pipe(sass()) // compila
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("build/css")); // almacena en disco duro
  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css); // llama a la funcion de arriba para escuchar cambios
  done();
}

exports.css = css;
exports.dev = dev; // parallel ejecuta dos funciones

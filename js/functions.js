const app = document.getElementById('app')

const logo = `<img class="UTV_Logo" onclick="crearPortada()" src="img/UTV_Logo.png" />`
const sectionStyle = ['yaSabemos', 'debemosSaber', 'nuestrosExpertos']

let currentSlide = 1
let currentSection = 1

let seccion = pagina.find(e => e.seccion === currentSection)
let slide = seccion.diapositiva[currentSection - 1]

function crearPortada () {
  let html = `
    <div id="portada">
      <img src="img/00-guia-proteccion-covid.jpg" alt="">
      <div class="player" onclick="verPDF()"><span></span></div>
    </div>
  `
  app.innerHTML = html
}

function createDot (item) {
  let num = item.diapositiva.length
  let pag = `<div class="numbertext">${currentSlide}/${num}</div>`
  let dot = item.diapositiva.map(
    (e, index) => {
      let clase = (index === currentSlide - 1) ? 'dot active' : 'dot'
      return `<span class="${clase}" onclick="showDiapositiva(${index + 1}, ${currentSection})"></span>`
    }
  ).join('')
  let html = dot + pag
  return html
}
function createSection () {
  let section = sectionStyle.map(
    (e, index) => {
      let clase = (index === currentSection - 1) ? 'currentSection active' : 'currentSection'
      return `<div class="${clase} ${sectionStyle[index]}" onclick="showDiapositiva(1, ${index+1})"></div>`
    }
  ).join('')
  return section
}
function showDiapositiva(slide, seccion) {
  currentSlide = slide
  currentSection = seccion
  let newSeccion = pagina.find(e => e.seccion === currentSection)
  let newSlide = newSeccion.diapositiva[currentSlide - 1]
  crearHtml(newSlide, newSeccion)
}

function crearHtml (slide, seccion) {
  let clase = sectionStyle[currentSection - 1]
  let html = ''
  html += `
    ${logo}
    <h2 class="title ${clase}">${seccion.titulo}</h2>
    <div class="container">
      <img src="img/${slide.imagen}" alt="">
      <div class="subTitle ${clase}">${slide.sub_titulo}</div>
      <div class="currentSlide">${createDot(seccion)}</div>
      
      <div class="sections">${createSection()}</div>
      <div class="text">${slide.texto}</div>
    </div>
  `
  app.innerHTML = html
}

function verPDF () {
  crearHtml(slide, seccion)
}

// crearHtml(slide, seccion)
crearPortada()

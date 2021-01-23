const portada = document.getElementById('portada')

const listTitle = [...document.querySelectorAll('.title')]
const listSections = [...document.querySelectorAll('.mySections')]
const listSlides = [...document.querySelectorAll('.mySlides')]
const listCurrentSlide = [...document.querySelectorAll('.currentSlide')]
const listCurrentSection = [...document.querySelectorAll('.currentSection')]
const listDots = [...document.querySelectorAll('.dot')]
const listVerPDF = [...document.querySelectorAll('.verpdf')]

let slideIndex = 1
let sectionIndex = 1

let verpdf = () => {
  portada.classList.add('hide')
  listVerPDF.map(e => e.classList.remove('verpdf', 'hide'))
  slideIndex = 1
  sectionIndex = 1
  showSlides(slideIndex, sectionIndex)
}
let verportada = () => {
  portada.classList.remove('hide')
  listVerPDF.map(e => e.classList.add('verpdf'))
}

function currentSlide(slide, section) {
  slideIndex = slide
  sectionIndex = section
  showSlides(slideIndex, sectionIndex)
}

function showSlides(slide, section) {
  slideIndex = (section === 1) ? slide - 1 :
    (section === 2) ? slide - 1 + 4 : slide - 1 + 7
  sectionIndex = section - 1

  listTitle.map(e => e.classList.add('hide'))
  listTitle[sectionIndex].classList.remove('hide')
  listSections.map(e => e.classList.add('hide'))
  listSections[sectionIndex].classList.remove('hide')
  listCurrentSlide.map(e => e.classList.add('hide'))
  listCurrentSlide[sectionIndex].classList.remove('hide')
  listCurrentSection.map(e => e.classList.remove('active'))
  listCurrentSection[sectionIndex].classList.add('active')

  listSlides.map(e => e.classList.add('hide'))
  listSlides[slideIndex].classList.remove('hide')
  listDots.map(e => e.classList.remove('active'))
  listDots[slideIndex].classList.add('active')
}

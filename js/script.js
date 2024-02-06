'use strict'

const titleElement = document.querySelector('.title')
const buttonsContainer = document.querySelector('.buttons')
const yesButton = document.querySelector('.btn--no')
const noButton = document.querySelector('.btn--yes')
const catImg = document.querySelector('.cat-img')

const MAX_IMAGES = 5

let play = true
let noCount = 0

yesButton.addEventListener('click', handleYesClick)

noButton.addEventListener('click', function () {
  if (play) {
    noCount++
    const imageIndex = Math.min(noCount, MAX_IMAGES)
    changeImage(imageIndex)
    resizeYesButton()
    updateNoButtonText()
    if (noCount === MAX_IMAGES) {
      play = false
    }
  }
})

function handleYesClick() {
  titleElement.innerHTML =
    'AHORA SI LO ADMITES APESTOSHA bañate fuchi JIJIJI 😻😻'
  buttonsContainer.classList.add('hidden')
  changeImage('yes')
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton)
  const fontSize = parseFloat(computedStyle.getPropertyValue('font-size'))
  const newFontSize = fontSize * 1.6

  yesButton.style.fontSize = `${newFontSize}px`
}

function generateMessage(noCount) {
  const messages = [
    'Yo si me ducho😡',
    'Segura??',
    'No te creo hmm',
    'SEGURISIMA?? No me mientas cielo',
    'Pero si hasta aca huele fuchi apestosa😾',
    'Ya acepta que no te duchas JJIJIJI',
  ]

  const messageIndex = Math.min(noCount, messages.length - 1)
  return messages[messageIndex]
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount)
}

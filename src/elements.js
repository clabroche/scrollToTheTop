const item = document.getElementById('0')
const ref = item.cloneNode()
module.exports = {
  item,
  score: document.getElementById('score'),
  scrollContainer: document.querySelector('.scroll-container'),
  color1: document.getElementById('color1'),
  color2: document.getElementById('color2'),
  minOffset: document.getElementById('minOffset'),
  /** @type {HTMLElement | HTMLInputElement} */
  maxOffset: document.getElementById('maxOffset'),
  ref
}
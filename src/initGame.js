const helpers = require('./helpers')
const elements = require('./elements')
module.exports.initGame = function () {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  elements.item.style.height = '0'
  const defaultScore = +localStorage.getItem('item') || 1
  helpers.addChunks(defaultScore, 1000)
  window.scrollTo(0, document.body.scrollHeight);
}

module.exports.initInput = function () {
  const { color1, color2, minOffset, maxOffset } = elements
  color1.addEventListener('input', _ => {
    localStorage.setItem('color1', color1.value)
    helpers.changeStyle()
  })
  color2.addEventListener('input', _ => {
    localStorage.setItem('color2', color2.value)
    helpers.changeStyle()
  })
  minOffset.addEventListener('input', _ => {
    localStorage.setItem('minOffset', minOffset.value)
    helpers.changeStyle()
  })
  maxOffset.addEventListener('input', _ => {
    localStorage.setItem('maxOffset', maxOffset.value)
    helpers.changeStyle()
  })

  color1.value = localStorage.getItem('color1') || '#1e5799'
  color2.value = localStorage.getItem('color2') || '#7db9e8'
  minOffset.value = localStorage.getItem('minOffset') || 0
  maxOffset.value = localStorage.getItem('maxOffset') || 100

}
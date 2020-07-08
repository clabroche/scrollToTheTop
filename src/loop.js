const helpers = require('./helpers')
const elements = require('./elements')
module.exports.launch = function () {
  setInterval(_ => {
    this.tick()
  }, 100)
}

module.exports.tick = function () {
  const {item, score} = elements
  let x = item.offsetLeft + 10
  let y = window.innerHeight  - 10
  const elem = document.elementFromPoint(x, y);
  if(!elem) return 
  score.innerText = elem.id
  item.classList.add('even')
  while (elem.nextElementSibling !== item) { // remove bottom item to free memory
    if (elem.nextElementSibling) {
      elem.nextElementSibling.remove()
    }
  }
  const topItem = document.querySelector('.scroll-item')
  if(+score.innerHTML > +topItem.id - 1000) {
    helpers.addChunks(+topItem.id + 1, 1000)
  }
  localStorage.setItem('item', score.textContent)
}


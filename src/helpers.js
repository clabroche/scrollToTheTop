const elements = require('./elements')
module.exports.addChunks = function(min = 1, nb) {
  const max = min + nb
  for (min; min < max; min++) {
    const clone = elements.ref.cloneNode(true)
    clone.setAttribute('id', min)
    clone.classList.remove('even')
    min % 2 === 0 ?
      clone.classList.add('odd') :
      clone.classList.add('even')
    elements.scrollContainer.prepend(clone)
  }
  this.changeStyle()
} 

module.exports.changeStyle = function() {
  document.querySelectorAll('.even').forEach(even => {
    even.style.background = `linear-gradient(to bottom, ${color2.value} ${minOffset.value}%, ${color1.value} ${maxOffset.value}%)`
  })
  document.querySelectorAll('.odd').forEach(odd => {
    odd.style.background = `linear-gradient(to bottom, ${color1.value} ${minOffset.value}%, ${color2.value} ${maxOffset.value}%)`
  })
}
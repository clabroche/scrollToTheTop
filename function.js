function addChunks(min = 1) {
  console.log('add')
  const max = min + 20
  for (min; min < max; min++) {
    const clone = ref.cloneNode(true)
    clone.setAttribute('id', min)
    clone.classList.remove('even')
    min % 2 === 0 ?
      clone.classList.add('odd') :
      clone.classList.add('even')
    scrollContainer.prepend(clone)
  }
  changeStyle()
}

function changeStyle() {
  document.querySelectorAll('.even').forEach(even => {
    even.style.background = `linear-gradient(to bottom, ${color2.value} ${minOffset.value}%, ${color1.value} ${maxOffset.value}%)`
  })
  document.querySelectorAll('.odd').forEach(odd => {
    odd.style.background = `linear-gradient(to bottom, ${color1.value} ${minOffset.value}%, ${color2.value} ${maxOffset.value}%)`
  })
}
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const minOffset = document.getElementById('minOffset')
const maxOffset = document.getElementById('maxOffset')

color1.addEventListener('input', _ => {
  localStorage.setItem('color1', color1.value)
  changeStyle()
})
color2.addEventListener('input', _ => {
  localStorage.setItem('color2', color2.value)
  changeStyle()
})
minOffset.addEventListener('input', _ => {
  localStorage.setItem('minOffset', minOffset.value)
  changeStyle()
})
maxOffset.addEventListener('input', _ => {
  localStorage.setItem('maxOffset', maxOffset.value)
  changeStyle()
})

color1.value = localStorage.getItem('color1') || '#1e5799'
color2.value = localStorage.getItem('color2') || '#7db9e8'
minOffset.value = localStorage.getItem('minOffset') || 0
maxOffset.value = localStorage.getItem('maxOffset') || 100

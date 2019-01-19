
setInterval(_=> {
  let x = item.offsetLeft + 10
  let y = window.innerHeight  - 10
  const elem = document.elementFromPoint(x, y);
  score.innerText = elem.id
  item.classList.add('even')
  while (elem.nextElementSibling !== item) { // remove bottom item to free memory
    elem.nextElementSibling.remove()
  }
  const topItem = document.querySelector('.scroll-item')
  if(+score.innerHTML > +topItem.id - 1000) {
    addChunks(+topItem.id + 1, 1000)
  }
  localStorage.setItem('item', +score.innerHTML)
}, 100)


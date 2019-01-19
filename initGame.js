if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
const item = document.getElementById('0')
const ref = item.cloneNode()
item.style.height = 0
const score = document.getElementById('score')
const scrollContainer = document.querySelector('.scroll-container')
const defaultScore = +localStorage.getItem('item') || 1
console.log(defaultScore)
addChunks(defaultScore)
window.scrollTo(0, document.body.scrollHeight);

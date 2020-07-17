import Vue from 'vue'
import game from '../services/game'
Vue.directive('scroll', {
  bind(el) {
    el.addEventListener('scroll', scroll)
  },
  unbind(el) {
    el.removeEventListener('scroll', scroll)
  }
})

let lastScrollTop = 0
function scroll(ev) {
  const { force, direction } = getScrollInfos(ev)
  if (direction !== 'up') return
  game.updateScroll(force)
}
function getScrollInfos(ev) {
  const st = ev.target.scrollTop
  let force = (lastScrollTop - st) / 5
  if (force > 8) force = 8
  let direction = 'up'
  if (st > lastScrollTop) {
    direction = 'down'
  }
  lastScrollTop = st <= 0 ? 0 : st
  return {
    direction,
    force
  }
}
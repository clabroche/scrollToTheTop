import Vue from 'vue'
import game from '../services/game'
import colors from '../services/colors'
Vue.directive('background', {
  bind(el) {
    el.style.backgroundColor = backgroundColor()
    game.nbScrollObservable.subscribe(() => {
      el.style.backgroundColor = backgroundColor()
    })
    colors.currentColorsObservable.subscribe(() => {
      el.style.backgroundColor = backgroundColor()
    })
  },
})
function backgroundColor() {
  let percent = game.getCustomPercent(200)
  if (!colors.currentColors[1]) return colors.currentColors[0]
  let p = (percent) / 100
  if (percent > 50) p = 1 - p
  p = p * 2
  let color = colors.currentColors[0]
  const color0 = colors.currentColors[0]
  const color1 = colors.currentColors[1]
  const R = (hexToRgb(color0).r * p + hexToRgb(color1).r * (1 - p))
  const G = (hexToRgb(color0).g * p + hexToRgb(color1).g * (1 - p))
  const B = (hexToRgb(color0).b * p + hexToRgb(color1).b * (1 - p))
  color = rgbToHex(R, G, B)
  return color
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function rgbToHex(r, g, b) {
  return "#" + Math.floor(((1 << 24) + (r << 16) + (g << 8) + b)).toString(16).slice(1);
}
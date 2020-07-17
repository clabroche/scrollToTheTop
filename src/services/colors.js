import CustomObservable from "./CustomObservable"

const defaultColors = [
  '#1e5799',
  '#7db9e8',
]
const colorsFromLocalStorage = localStorage.getItem('colors') || JSON.stringify(defaultColors)
const colors = JSON.parse(colorsFromLocalStorage)
const Colors = {
  defaultColors,
  currentColors: colors,
  currentColorsObservable: new CustomObservable(),
  resetColors() {
    this.currentColors = defaultColors
    this.saveColors()
  },
  deleteColor(index) {
    this.currentColors.splice(index, 1)
    this.saveColors()
  },
  addColor() {
    this.currentColors.push('#000')
    this.saveColors()
  },
  saveColors() {
    localStorage.setItem('colors', JSON.stringify(this.currentColors))
    this.currentColorsObservable.next()
  }
}

export default Colors
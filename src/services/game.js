import CustomObservable from "./CustomObservable"

let score = localStorage.getItem('score') || 0
score = +score
const game = {
  score,
  nbScroll: 0,
  nbScrollObservable: new CustomObservable(),
  updateScroll(force) {
    this.nbScroll += force
    this.updatePercent()
    this.nbScrollObservable.next(force)
  },
  percent: 0,
  updateScore() {
    this.score++
    localStorage.setItem('score', this.score.toString())
    this.scoreObservable.next(this.score)
  },
  scoreObservable: new CustomObservable(),
  updatePercent() {
    const percent = this.nbScroll % 100
    if (percent < this.percent) {
      this.updateScore()
    }
    this.percent = percent
  },
  getCustomPercent(slowRate) {
    return ((this.nbScroll % slowRate) * 100) / slowRate
  }
}

export default game
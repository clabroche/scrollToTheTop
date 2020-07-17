
function CustomObservable() {
  this.funcs = []
}
CustomObservable.prototype.subscribe = function (fun) {
  const funcs = this.funcs
  funcs.push(fun)
  return {
    unsubscribe() {
      const index = funcs.indexOf(fun) 
      funcs.splice(index, 1)
    }
  }
}
CustomObservable.prototype.next = function (...value) {
  this.funcs.map(f => f(...value))
}

export default CustomObservable
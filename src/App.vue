<template>
<div>
  <div class="config">
    <div class="container" v-for="(color, i) of colors" :key="'color-' + i">
      <input type="color" v-model="colors[i]" @input="changeColor(i, $event.target.value)">
      <i class="fas fa-times" @click="deleteColor(i)"></i>
    </div>
    <button class="addColor" @click="addColor()"><i class="fas fa-plus"/></button>
    <button class="resetColor" @click="resetColors()"><i class="fas fa-trash"/></button>
  </div>
  <div class="tiles">
    <div 
      class="tile"
      :id="'score-' + tile.score"
      ref="tiles"
      v-for="tile of tiles"
      :key="tile.score"
      :style="{background: linearGradient}">
      <div class="score small">{{tile.score}}</div>
      <div class="score small">{{tile.score}}</div>
      <div class="score small">{{tile.score}}</div>
      <div class="score">{{tile.score}}</div>
    </div>
  </div>
  <div class="rocket"><i class="fas fa-space-shuttle"></i></div>
  <div :style="{position: 'absolute', top: markerPosition}">---------</div>
  <div :style="{position: 'absolute', top: markerPosition2}">---------</div>
</div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    linearGradient() {
      const colorsArray = this.colors.map(color => {
        return `${color}`
      })
      const colorsString = [...colorsArray, ...colorsArray.reverse()]
      return `linear-gradient(to bottom, ${colorsString})`
    }
  },
  data() {
    return {
      score: 0,
      tiles: [],
      colors: [
        '#1e5799',
        '#7db9e8',
      ],
      markerPosition: 0,
      markerPosition2: 0
    }
  },
  mounted() {
    this.loadColors()
    this.loadScore()
    this.tiles = Array(100).fill('').map((_, i) => ({score: i + this.score})).reverse()
    setTimeout(() => {
      window.scrollTo(0,document.body.scrollHeight);
      this.interval = setInterval(() => {
        this.loop()
      }, 25);
    }, 100);
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods:{
    loop() {
      if(window.scrollY === 0) window.scrollTo(0,1);
      const tiles = this.$refs.tiles
      tiles.sort((a, b) => +b.id.replace('score-', '') - +a.id.replace('score-', ''))
      const lastTile = tiles[tiles.length - 1]
      const lastTileTop = lastTile.offsetTop
      const scrollTop = window.scrollY
      if(scrollTop < lastTileTop - document.body.offsetHeight) {
        this.removeLastTile()
      }
    },
    resetColors() {
      this.colors = ['#1e5799','#7db9e8']
      localStorage.setItem('colors', JSON.stringify(this.colors))
    },
    removeLastTile() {
      const {score} = this.tiles.pop()
      this.score = score + 1
      localStorage.setItem('score', this.score)
      this.tiles.unshift({score: this.tiles[0].score + 1})
    },
    loadScore() {
      const score = localStorage.getItem('score') || 0
      this.score = +score
    },
    loadColors() {
      const colors = localStorage.getItem('colors') || JSON.stringify(this.colors)
      this.colors = JSON.parse(colors)
    },
    deleteColor(index) {
      this.colors.splice(index, 1)
      localStorage.setItem('colors', JSON.stringify(this.colors))
    },
    addColor() {
      this.colors.push('#000')
      localStorage.setItem('colors', JSON.stringify(this.colors))
    },
    changeColor() {
      localStorage.setItem('colors', JSON.stringify(this.colors))
    }
  }
}

</script>

<style lang="scss">
@import url('~@fortawesome/fontawesome-free/css/all.min.css');
body {
  background-color: black;
  margin: 0;
  color: white;
  overflow: auto;
}
.addColor {
  border: 1px dashed white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.rocket {
  position: fixed;
  bottom: 0;
  left: 50vw;
  transform: rotate(-90deg) translateY(-50%) translateX(40px);
  font-size: 90px;
}
.tiles {
  margin: auto;
  width: 100vw;
  background-color: red;
  height: 100vh;
  .tile {
    width: 100%;
    height: 300vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .score {
      border-radius: 50%;
      border: 1px solid white;
      width: 200px;
      height: 200px;
      font-size: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      color: black;
      mix-blend-mode: screen;
      position: relative;
      border: 5px solid #a7a7a7;
      z-index: 2;
      &, &::before, &::after{
        box-shadow: 0px 0px 3px 1px black;
      }
      &::before, &::after {
        content: '';
        width: 100px;
        height: 100px;
        position: absolute;
        background-color: #fff;
        border-radius: 50%;
      }
      &::after {
        left:90%
      }
      &::before {
        right:90%
      }
      &.small {
        font-size: 1em;
        width: 100px;
        height: 100px;

        &::after, &::before {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
.config {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 100px;
  button {
    width: 100%;
    border: none;
    padding: 5px;
    margin: 10px 0;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 4px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      flex-grow: 1;
      background-color: transparent;
      padding: 0;
      border: none;
    }
    i {
      margin: 0 5px;
    }
  }
}
#score {
  color: white;
  position: fixed;
  font-size: 2em;
  padding: 10px;
  border: 1px solid white;
  border-radius: 100%;
  margin: 10px;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

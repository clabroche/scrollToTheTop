<template>
<div v-background >
  <config></config>
  <div class="tiles" v-scroll  ref="tilesContainer">
    <div 
      class="tile"
      :id="'score-' + tile.score"
      ref="tiles"
      v-for="tile of tiles"
      :key="tile.score">
    </div>
  </div>
  <cloud :slowRate="(i+1) * 100" v-for="(_,i) of Array(10)" :key="'cloud-' + i"></cloud>
  <div class="rocket"><i class="fas fa-space-shuttle"></i></div>
</div>
</template>

<script>
import cloudVue from './components/Cloud.vue'
import game from './services/game'
import ConfigVue from './components/Config.vue'
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;
export default {
  name: 'App',
  components: {
    cloud: cloudVue,
    config: ConfigVue
  },
  data() {
    return {
      opacity: 1,
      score: 0,
      tiles: [],
      colors: [
        '#1e5799',
        '#7db9e8',
      ],
      innerWidth: window.innerWidth,
      markerPosition: 0,
      markerPosition2: 0,
      percent: 0,
      nbTiles: 100,
      nbScroll: 0
    }
  },
  mounted() {
    SplashScreen.hide();
    this.tiles = Array(this.nbTiles).fill('').map((_, i) => ({score: i + this.score})).reverse()
    setTimeout(() => {
      const tilesContainer = this.$refs.tilesContainer
      tilesContainer.scrollTo(0,tilesContainer.scrollHeight - 2000);
    }, 100);
    this.removeLastTileObservable = game.scoreObservable.subscribe(this.removeLastTile)
  },
  beforeDestroy() {
    this.removeLastTileObservable.unsubscribe()
  },
  methods:{
    removeLastTile() {
      if(this.tiles[0].score !== this.score + 1) {
        this.tiles.pop()
        this.tiles.unshift({score: this.tiles[0].score + 1})
      }
    },
    
  }
}

</script>

<style lang="scss">
@import url('~@fortawesome/fontawesome-free/css/all.min.css');
body {
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
  pointer-events: none;
  bottom: 0;
  left: 50vw;
  transform: rotate(-90deg) translateY(-50%) translateX(40px);
  font-size: 90px;
}
.tiles {
  margin: auto;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  transition: 300ms;
  .tile {
    width: 100%;
    height: 2400vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
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

<template>
  <div class="background-color" :style="{backgroundColor}">
  </div>
</template>

<script>
import game from '../services/game'
export default {
  data() {
    return {
      
      game
    }
  },
  computed: {
    
  },
  mounted() {
    this.loadColors()
  },
  methods: {
    
    
  }
}
</script>

<style>
.background-color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
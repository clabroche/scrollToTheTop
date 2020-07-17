<template>
  <div class="config">
    <div class="container" v-for="(color, i) of Colors.currentColors" :key="'color-' + i">
      <input type="color" :value="Colors.currentColors[i]" @input="save(i, $event.target.value)">
      <i class="fas fa-times" @click="Colors.deleteColor(i)"></i>
    </div>
    <!-- <button class="addColor" @click="Colors.addColor()"><i class="fas fa-plus"/></button> -->
    <button class="resetColor" @click="Colors.resetColors()"><i class="fas fa-trash"/></button>
  </div>
</template>

<script>
import Colors from '../services/colors'
export default {
  data() {
    return {
      Colors
    }
  },
  methods: {
    save(index, value) {
      this.$set(Colors.currentColors, index, value)
      Colors.saveColors()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
<div>
  <div class="config">
    <div class="container">
      <label>color1</label>
      <input type="text" id="color1">
    </div>
    <div class="container">
      <label>color2</label>
      <input type="text" id="color2">
    </div>
    <div class="container">
      <label>minOffset</label>
      <input type="number" id="minOffset">
    </div>
    <div class="container">
      <label>maxOffset</label>
      <input type="number" id="maxOffset">
    </div>
  </div>
  <div id="score"></div>
  <div class="scroll-container">
    <div class="scroll-item" id="0"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

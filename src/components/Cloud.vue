<template>
  <div
    class="cloud"
    ref="cloud"
    :style="{
  top,
  width: this.cloudSize + 'px',
  height: this.cloudSize + 'px',
  borderWidth: this.cloudSize / 20 + 'px',
  left
}"
  >
    <div
      class="left"
      :style="{
    width: this.cloudSize / 2 + 'px',
    height: this.cloudSize / 2 + 'px'
  }"
    ></div>
    <div
      class="right"
      :style="{
    width: this.cloudSize / 2 + 'px',
    height: this.cloudSize / 2 + 'px'
  }"
    ></div>
    <span v-if="slowRate === 100">{{game.score}}</span>
  </div>
</template>

<script>
import game from "../services/game";
export default {
  name: "Cloud",
  props: {
    slowRate: { default: 100 }
  },
  data() {
    return {
      cloudSize: 100,
      game,
      left: 0,
      lastPercent: 0,
      percent: 0,
      offset: 0
    };
  },
  watch: {
    "game.nbScroll"() {
      this.percent = game.getCustomPercent(this.slowRate);
      this.applyOffset();
      if (this.percent < this.lastPercent) {
        this.updateLeft();
      }
      this.lastPercent = this.percent;
    }
  },
  computed: {
    top() {
      const height = document.body.offsetHeight;
      return (this.percent * (height + 200)) / 100 - 200 + "px";
    }
  },
  mounted() {
    this.cloudSize = 100 / (this.slowRate / 100);
    this.updateLeft();
    this.offset = Math.random() * 100;
    this.applyOffset()
  },
  methods: {
    applyOffset() {
      if (this.slowRate === 100) return;
      this.percent += this.offset;
      if (this.percent > 100) this.percent = this.percent - 100;
    },
    updateLeft() {
      this.left =
        this.slowRate === 100
          ? "50%"
          : Math.random() * window.innerWidth + "px";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$cloudSize: 100px;
.cloud {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 50%;
  border-radius: 50%;
  border: 1px solid white;
  width: $cloudSize;
  height: $cloudSize;
  font-size: $cloudSize / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: black;
  mix-blend-mode: screen;
  border: 5px solid #a7a7a7;
  transform: translateX(-50%);
  z-index: 2;
  &,
  .left,
  .right {
    box-shadow: 0px 0px 3px 1px black;
  }
  .left,
  .right {
    content: "";
    width: $cloudSize / 2;
    height: $cloudSize / 2;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
  }
  .right {
    left: 90%;
  }
  .left {
    right: 90%;
  }
}
</style>

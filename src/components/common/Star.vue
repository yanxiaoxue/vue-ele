<template>
  <div class="star">
    <span class="star-item" v-for="(star, index) in itemClasses" :class="star" :key="index"></span>
  </div>
</template>

<script>
export default {
  props: {
    score: Number
  },
  computed: {
    //计算属性
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push("on");
      }
      if (hasDecimal) {
        result.push("half");
      }
      while (result.length < 5) {
        result.push("off");
      }
      return result;
    }
  }
};
</script>

<style scoped>
.star {
  font-size: 0;
}

.star-item {
  display: inline-block;
  background-repeat: no-repeat;
  width: 0.45rem;
  height:0.45rem;
  margin-right: 0.01rem;
  background-size: 100%;
}

.star-item.on {
  background-image: url("../../assets/on.png");
}

.star-item.half {
  background-image: url("../../assets/half.png");
}

.star-item.off {
  background-image: url("../../assets/off.png");
}
</style>
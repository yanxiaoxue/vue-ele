<template>
  <div v-show="showtip">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">暂未开放支付功能</p>
      <div class="confrim" @click="showtip=!showtip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showtip: true
    };
  }
};
</script>

<style scoped>
.tip_text_container .tip_icon,
.tip_text_container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: column;
  flex-direction: column;
}
.tip_text_container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6rem;
  margin-left: -6rem;
  width: 12rem;
  animation: tipMove 0.4s;
  background-color: #fff;
  padding-top: 0.6rem;
  border: 1px;
  border-radius: 0.25rem;
}
.tip_text_container .tip_icon {
  width: 3rem;
  height: 3rem;
  border: 0.15rem solid #f8cb86;
  border-radius: 50%;
}
.tip_text_container .tip_text {
  font-size: 0.7rem;
  color: #333;
  line-height: 0.9rem;
  text-align: center;
  margin-top: 0.8rem;
  padding: 0 0.4rem;
}
.tip_text_container .confrim {
  font-size: 0.8rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.8rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 1.8rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.tip_text_container .tip_icon span:first-of-type {
  width: 0.12rem;
  height: 1.5rem;
  background-color: #f8cb86;
}
.tip_text_container .tip_icon span:nth-of-type(2) {
  width: 0.2rem;
  height: 0.2rem;
  border: 1px;
  border-radius: 50%;
  margin-top: 0.2rem;
  background-color: #f8cb86;
}
</style>
<template>
  <div>
    <header id="head_top">
      <section class="head_goback">
        <a href @click.prevent="$router.go(-1)">
          <img src="../../assets/img/leftjt.png" alt style="width:150%" />
        </a>
      </section>

      <section class="title_head ellipsis">
        <span class="title_text">用户等级说明</span>
      </section>
    </header>
    <div>
      <section class="markdown"></section>
      <h2>{{superc.rankContent}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      superc: {
        rankContent: ""
      }
    };
  },
  created() {
    this.$axios
      .get("https://elm.cangdu.org/v3/profile/explain", this.superc)
      .then(res => {
        console.log(res.data);
        this.superc = res.data;
      });
  }
};
</script>

<style scoped>
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
.head_goback {
  left: 0.4rem;
  width: 0.6rem;
  height: 1rem;
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.head_login {
  right: 0.55rem;
  font-size: 0.65rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login_span {
  color: #fff;
}
.title_head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title_text {
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
h2 {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.markdown {
  font-size: 0.65rem;
  padding: 0 0.7rem;
  color: #666;
  padding-bottom: 2rem;
}
</style>
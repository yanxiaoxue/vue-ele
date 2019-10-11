<template>
  <div id="header">
    <div class="header">
      <i @click="$router.go(-1)" class="iconfont">&#xe667;</i>
      <span>{{guess.name}}</span>
      <span>
        <router-link to="/">切换城市</router-link>
      </span>
    </div>
    <div class="body">
      <input v-model="inputs" type="text" placeholder="输入学校、商务楼、地址" />
      <button @click="getAddress">提交</button>
    </div>
    <div v-show="titshow" class="body-title">搜索历史</div>
    <div class="body-h">
      <ul class="record">
        <li v-for="(arr,index) in this.rein" :key="index">
          <router-link :to="{path:'/takeout',query:{geohash:arr.geohash}}">
            <div>
              <p>{{arr.name}}</p>
              <p>{{arr.address}}</p>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="cl" @click="clearAll">清空所有</div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],

  data() {
    return {
      titshow: true,
      guess: {},
      rein: [],
      inputs: ""
      // 这是一个比较奇葩的问题，如果 v-model 的变量不在 data 中初始化，就会报这个错误
    };
  },
  beforeRouteEnter(to, from, next) {
    // next(vm => console.log(vm));
    next(vm => vm.getGuess(to.params.guess));
  },
  methods: {
    getGuess(guess) {
      this.guess = guess;
      // console.log(`${this.guess.id}`);
    },
    getAddress() {
      // console.log(this.inputs);
      // console.log(`${this.guess.id}`);
      this.$axios
        .get(
          `https://elm.cangdu.org/v1/pois?city_id=${this.guess.id}&keyword=${this.inputs}&type=search`
        )
        .then(res => {
          this.rein = res.data;
          console.log(this.rein);
          this.reload();
        });
      this.titshow = !this.titshow;
    },
    clearAll() {
      this.rein = "";
      // console.log(this.inputs);
      this.inputs = "";
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont";
  /* project id 1384101 */
  src: url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.eot");
  src: url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.woff") format("woff"),
    url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.svg#iconfont") format("svg");
}
a{
    text-decoration: none;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 0.8rem;
  font-style: normal;
}

#header {
  background: #f5f5f5;
}

.header {
  background: #ffffff;
  /* width: 3.75rem; */
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  align-items: center;
  padding: 0 0.1rem;
  box-sizing: border-box;
  background: #3190e8;
  /* height: 0.457rem; */
  height: 1.95rem;
  color: #ffffff;
}
.header a {
  text-decoration: none;
  color: #ffffff;
}

.header span:nth-of-type(1) {
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
}

.header span:nth-of-type(2) {
  display: block;
  font-size: 0.6rem;
}

.body {
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding: 0.4rem 0.5rem 0;
}

input {
  width: 100%;
  border: 1px solid #e4e4e4;
  font-size: 0.65rem;
  color: #333;
  margin-bottom: .5rem;
  padding: 0.3rem 0;
}

button {
  border: none;
  width: 100%;
  height: 1.4rem;
  background: #3190e8;
  font-size: 0.65rem;
  color: #ffffff;
  outline: none;
}

.body-title {
  display: flex;
  /* height: 0.2rem; */
  font: 0.475rem/.8rem Microsoft YaHei;
  border: 0.01rem solid #e4e4e4;
  padding: 0 0.1rem;
  align-items: center;
}

.record {
  width: 100%;
  background: #ffffff;
}

.record li {
  display: flex;
  padding-top: 0.65rem;
  /* height: 7rem; */
  align-content: center;
  flex-wrap: wrap;
  font-size: 0.152rem;
  border: 0.01rem solid #e4e4e4;
  border-top: none;
}

.record li p {
  padding-left: 0.8rem;
}

.record li p:nth-of-type(1) {
  margin: 0 auto 0.35rem;
  font-size: 0.65rem;
  color: #333;
}

.record li p:nth-of-type(2) {
  margin: 0 auto 0.55rem;
  font-size: 0.45rem;
  color: #999;
}

a:hover {
  outline: none;
}

.cl {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 0.46rem; */
  font-size: 0.7rem;
  line-height: 2rem;
  box-sizing: border-box;
  background: #ffffff;
  border-top: none;
  border: 0.01rem solid #e4e4e4;
}
</style>
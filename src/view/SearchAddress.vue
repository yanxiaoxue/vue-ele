<template>
  <div class="search_address_page">
    <header id="head_top">
      <section class="head_goback">
        <a href @click.prevent="$router.go(-1)">
          <img src="./../assets/img/leftjt.png" alt style="width:150%" />
        </a>
      </section>
      <section class="title_head ellipsis">
        <div @click="getAddress">搜索</div>
      </section>
    </header>

    <form class="search_form">
      <input v-model="inputs" type="text" placeholder="输入学校、商务楼、地址" @click.prevent="emshow=!emshow" />
      <div @click="getAddress">搜索</div>
    </form>
    <div class="body-h">
      <ul class="record">
        <li v-for="(arr,index) in this.rein" :key="index">
          <router-link :to="{name:'addaddress',params:{guess:arr}}">
            <div class="searchp">
              <p class="p1">{{arr.name}}</p>
              <p class="p2">{{arr.address}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="empty_tips" v-show="emshow">
      <p>找不到地址？</p>
      <p>尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号等）可稍后输入哦</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emshow: true,
      inputs: "",
      rein: []
    };
  },
  methods: {
    getAddress() {
      // console.log(this.inputs);
      // console.log(`${this.guess.id}`);
      this.$axios
        .get(
          `https://elm.cangdu.org/v1/pois?city_id=1&keyword=${this.inputs}&type=search`
        )
        .then(res => {
          this.rein = res.data;
          console.log(this.rein);
        });
      this.emshow = false;
    }
  }
};
</script>

<style scoped>
.search_address_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 204;
  overflow-y: auto;
  padding-top: 1.95rem;
}
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
.search_form {
  display: -ms-flexbox;
  display: flex;
  padding: 0.7rem;
}
.search_form input {
  font-size: 0.65rem;
  color: #999;
  -ms-flex: 4;
  flex: 4;
  background-color: #f1f1f1;
  margin-right: 0.6rem;
  height: 1.5rem;
  border-radius: 0.15rem;
  padding: 0 0.4rem;
}

.search_form div {
  display: flex;
  justify-content: center;
  align-items: center;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.65rem;
  color: #fff;
  background-color: #3190e8;
  border-radius: 0.15rem;
}
.empty_tips {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.empty_tips p {
  font-size: 0.5rem;
  color: #aaa;
  line-height: 0.7rem;
  text-align: center;
}
.record {
  width: 100%;
  background: #ffffff;
  padding: 0.7rem;
}

.record li {
  padding: 0.7rem 0;
  border-bottom: 0.025rem solid #f5f5f5;
  line-height: 1rem;
}

/* .record li div p {
        
    } */

.record li .p1 {
  font-size: 0.75rem;
  color: #555;
}

.record li p:nth-of-type(2) {
  font-size: 0.65rem;
  color: #999;
}
a {
  text-decoration: none;
}
ul,
li,
p {
  list-style: none;
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
</style>
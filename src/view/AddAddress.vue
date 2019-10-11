<template>
  <div>
    <div class="address_page">
      <header id="head_top">
        <section class="head_goback">
          <a href @click.prevent="$router.go(-1)">
            <img src="./../assets/img/leftjt.png" alt style="width:150%" />
          </a>
        </section>
        <section class="title_head ellipsis">
          <span class="title_text">添加地址</span>
        </section>
      </header>

      <section class="page_text_container">
        <section class="section_list">
          <span class="section_left">联系人</span>
          <section class="section_right">
            <input v-model="newUser.id" type="text" class="input_style" placeholder="你的名字" />
            <div class="choose_sex">
              <span class="choose_option">
                <a href @click.prevent="ok">
                  <img :src="ok_url" alt class="address_empty_right" />
                </a>
                <span>先生</span>
              </span>
              <span class="choose_option">
                <a href @click.prevent="ok2">
                  <img :src="ok2_url" alt class="address_empty_right" />
                </a>
                <span>女士</span>
              </span>
            </div>
          </section>
        </section>

        <section class="section_list">
          <span class="section_left">联系电话</span>
          <section class="section_right">
            <input v-model="newUser.phnum" type="text" class="input_style" placeholder="你的电话" />
            <div class="phone_add">
              <input type="text" class="input_style" placeholder="你的手机号" />
              <a href @click.prevent="showphone=!showphone">
                <img src="./../assets/img/add2.png" alt height="20" width="20" />
              </a>
            </div>
            <input v-show="showphone" type="text" class="input_style phone_bk" placeholder="备选电话" />
          </section>
        </section>

        <section class="section_list">
          <span class="section_left">送餐地址</span>
          <section class="section_right">
            <div class="choose_address">
              <router-link to="/searchaddress"><span v-if="guess.name.length<=0">请先选择地址</span>{{guess.name}}</router-link>
            </div>
            <input
              v-model="newUser.address"
              type="text"
              placeholder="详细地址（如门牌号等）"
              class="input_style"
            />
          </section>
        </section>

        <section class="section_list">
          <span class="section_left">标签</span>
          <section class="section_right">
            <input v-model="newUser.lable" type="text" placeholder="无/家/学校/公司" class="input_style" />
          </section>
        </section>
      </section>

      <div class="determine">
        <button @click="routerTo">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import ok from "./../assets/img/ok.png";
import nook from "./../assets/img/nook.png";
export default {
  data() {
    return {
      ok_url: nook,
      ok2_url: nook,
      showphone: false,
      guess: { name: "" },
      newUser: {
        id: "",
        phnum: "",
        address: "",
        lable: ""
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getGuess(to.params.guess));
  },
  methods: {
    routerTo() {
      this.$router.push({
        name: "chooseadress",
        params: { userId: this.newUser }
      });
      localStorage.setItem("addAddress", JSON.stringify(this.newUser));
    },
    ok() {
      this.ok_url = ok;
      this.ok2_url = nook;
    },
    ok2() {
      this.ok2_url = ok;
      this.ok_url = nook;
    },
    addphone() {
      this.showphone = !showphone;
    },
    getGuess(guess) {
      this.guess = guess;
    }
  }
};
</script>

<style scoped>
.confirmOrderContainer[data-v-4e0d5034] {
  padding-top: 1.95rem;
  padding-bottom: 3rem;
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
.address_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 204;
  padding-top: 1.95rem;
}
.page_text_container {
  background-color: #fff;
  padding: 0 0.7rem;
}
.section_list {
  display: -ms-flexbox;
  display: flex;
  border-bottom: 0.025rem solid #f5f5f5;
}
.section_list .section_left {
  font-size: 0.7rem;
  color: #333;
  -ms-flex: 2;
  flex: 2;
  line-height: 2.5rem;
}
.section_list .section_right {
  -ms-flex: 5;
  flex: 5;
}
.section_list .section_right .input_style {
  width: 100%;
  height: 2.5rem;
  font-size: 0.7rem;
  color: #999;
}
.section_list .section_right .choose_sex {
  display: -ms-flexbox;
  display: flex;
  line-height: 2.5rem;
  border-top: 0.025rem solid #f5f5f5;
}
.section_list .section_right .choose_sex .choose_option {
  font-size: 0.7rem;
  color: #333;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 0.8rem;
}
.section_list .section_right .choose_sex .choose_option img {
  margin-right: 0.3rem;
  width: 0.8rem;
  height: 0.8rem;
}
.section_list .section_right .phone_add {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.section_list .section_right .input_style {
  width: 100%;
  height: 2.5rem;
  font-size: 0.7rem;
  color: #999;
}
.section_list .section_right .phone_bk {
  border-top: 0.025rem solid #f5f5f5;
}
.section_list .section_right .input_style {
  width: 100%;
  height: 2.5rem;
  font-size: 0.7rem;
  color: #999;
}
.section_list .section_right .choose_address {
  font-size: 0.7rem;
  color: #999;
  line-height: 2.5rem;
  border-bottom: 0.025rem solid #f5f5f5;
}
.section_list .section_right .choose_address span{
  color: rgb(226, 44, 44);
  font-size: 0.6rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.7rem;
  color: #fff;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.6rem;
}
a,
article,
aside,
b,
body,
button,
dd,
div,
dl,
dt,
figcaption,
figure,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
header,
i,
input,
li,
nav,
p,
section,
select,
span,
textarea,
ul {
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
</style>
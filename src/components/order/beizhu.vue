<template>
  <div class="BZ">
    <header id="head_top">
      <section class="head_goback">
        <a href @click.prevent="$router.go(-1)">
          <img src="../../assets/img/leftjt.png" alt style="width:150%" />
        </a>
      </section>
      <section class="title_head ellipsis">
        <span class="title_text">订单备注</span>
      </section>
    </header>

    <section class="quick_remark">
      <header class="header_style">快速代码</header>
      <ul class="remark_arr_list_ul">
        <li class="remark_arr_list_li">
          <span class="remark_item_li first" @click="showBeizhu1($event)">不要辣</span>
          <span class="remark_item_li first" @click="showBeizhu2($event)">少点辣</span>
          <span class="remark_item_li last" @click="showBeizhu3($event)">多点辣</span>
        </li>
        <li class="remark_arr_list_li">
          <span class="remark_item_li first last" @click="showBeizhu4($event)">不要香菜</span>
        </li>
        <li class="remark_arr_list_li">
          <span class="remark_item_li first last" @click="showBeizhu5($event)">不要洋葱</span>
        </li>
        <li class="remark_arr_list_li">
          <span class="remark_item_li first last" @click="showBeizhu6($event)">多点醋</span>
        </li>
        <li class="remark_arr_list_li">
          <span class="remark_item_li first last" @click="showBeizhu7($event)">多点葱</span>
        </li>
        <li class="remark_arr_list_li">
          <span class="remark_item_li first" @click="showBeizhu8($event)">去冰</span>

          <span class="remark_item_li last" @click="showBeizhu9($event)">少冰</span>
        </li>
      </ul>
    </section>

    <section class="input_remark quick_remark">
      <header class="header_style">其他备注</header>
      <textarea class="input_text" placeholder="请输入备注内容（可不填）"></textarea>
    </section>

    <div class="determine">
      <button @click="routerTo">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BZ",
  data() {
    return {
      beizhu: {
        option: [
          { nola: "", zhongla: "", la: "" },
          { noxiang: "" },
          { nocong: "" },
          { cu: "" },
          { cong: "" },
          { noice: "", ice: "" }
        ],
        qita: "",
        sss: {}
      }
    };
  },
  methods: {
    showBeizhu1(event) {
      var e = event.currentTarget;
      this.beizhu.option[0].nola = e.innerHTML;
      console.log(this.beizhu.option[0].nola);
      this.sss = this.beizhu.option[0].nola;
      e.style = "background:#3190e8";
      localStorage.setItem("beizhu",)
    },
    showBeizhu2(event) {
      var e = event.currentTarget;
      this.beizhu.option[0].zhongla = e.innerHTML;
      console.log(this.beizhu.option[0].zhongla);
      this.sss = this.beizhu.option[0].zhongla;
      e.style = "background:#3190e8";
    },
    showBeizhu3(event) {
      var e = event.currentTarget;
      this.beizhu.option[0].la = e.innerHTML;
      this.sss = this.beizhu.option[0].la;
      e.style = "background:#3190e8";
    },
    showBeizhu4(event) {
      var e = event.currentTarget;
      this.beizhu.option[1].noxiang = e.innerHTML;
      this.sss = this.beizhu.option[1].noxiang;
      e.style = "background:#3190e8";
    },
    showBeizhu5(event) {
      var e = event.currentTarget;
      this.beizhu.option[2].nocong = e.innerHTML;
      this.sss = this.beizhu.option[2].nocong;
      e.style = "background:#3190e8";
    },
    showBeizhu6(event) {
      var e = event.currentTarget;
      this.beizhu.option[3].cu = e.innerHTML;
      this.sss = this.beizhu.option[3].cu;
      e.style = "background:#3190e8";
    },
    showBeizhu7(event) {
      var e = event.currentTarget;
      this.beizhu.option[4].cong = e.innerHTML;
      this.sss = this.beizhu.option[4].cong;
      e.style = "background:#3190e8";
    },
    showBeizhu8(event) {
      var e = event.currentTarget;
      this.beizhu.option[5].noice = e.innerHTML;
      this.sss = this.beizhu.option[5].noice;
      e.style = "background:#3190e8";
    },
    showBeizhu9(event) {
      var e = event.currentTarget;
      this.beizhu.option[5].ice = e.innerHTML;
      this.sss = this.beizhu.option[5].ice;
      e.style = "background:#3190e8";
    },
    routerTo() {
      this.$router.push({
        name: "订单",
        params: { userId: this.sss }
      });
    }
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
.quick_remark {
  background-color: #fff;
  margin-top: 0.4rem;
  padding: 0 0.6rem 1rem;
}
.header_style {
  font-size: 0.65rem;
  color: #333;
  line-height: 2rem;
}
.quick_remark ul {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.quick_remark ul li {
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
}
.quick_remark ul li .last {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
.quick_remark ul li .first {
  border-left: 0.025rem solid #3190e8;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.quick_remark ul li span {
  font-size: 0.6rem;
  color: #333;
  padding: 0.3rem 0.6rem;
  border: 0.025rem solid #3190e8;
  border-left: 0;
}
.input_remark {
  background-color: #fff;
}
.quick_remark {
  background-color: #fff;
  margin-top: 0.4rem;
  padding: 0 0.6rem 1rem;
}
.input_remark .input_text {
  width: 100%;
  background-color: #f9f9f9;
  border: 0.025rem solid #eee;
  resize: none;
  min-height: 4.5rem;
  border-radius: 0.2rem;
  font-size: 0.6rem;
  color: #666;
  padding: 0.5rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.7rem;
  color: #fff;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
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
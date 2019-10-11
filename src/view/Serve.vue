<template>
  <div class="rating_page">
    <header id="head_top">
      <section class="head_goback">
        <a href @click.prevent="$router.go(-1)">
          <img src="./../assets/img/leftjt.png" alt style="width:150%" />
        </a>
      </section>

      <section class="title_head ellipsis">
        <span class="title_text">服务中心</span>
      </section>
    </header>

    <section class="service_connect">
      <a href class="service_left">
        <img src="./../assets/img/kefu.png" alt style="width:16%" />
        <span>在线客服</span>
      </a>
      <a href class="service_right">
        <img src="./../assets/img/dianhua.png" alt style="width:16%" />
        <span>在线客服</span>
      </a>
    </section>

    <section class="hot_questions">
      <h4 class="question_header">热门问题</h4>
      <ul>
        <li class="question_title">
          <span>超级会员权益说明</span>
          <router-link to="/supervipc">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>签到规则</span>
          <router-link to="/signContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>用户等级说明</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>积分问题</span>
          <router-link to="/pointtextContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>教我拍大片</span>
          <router-link to="/phototutorialContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>支付问题</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>其他问题</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>准时达问题</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>会员说明</span>
         <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>会员问题</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>红包问题</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>活动细则</span>
         <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>补签规则</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>优惠说明</span>
         <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>免责声明</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>代金券说明</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>商务合作</span>
         <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>余额问题</span>
         <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>超赞商家</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
        <li class="question_title">
          <span>匿名购买</span>
          <router-link to="/rankContent">
            <img src="./../assets/img/grayjt1.png" alt class="arrow-svg" />
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.rating_page {
  background-color: #fff;
  padding-top: 1.95rem;
}
div:hover {
  outline: none;
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
.service_connect {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.service_connect .service_left {
  border-right: 1px solid #f5f5f5;
}
.service_connect a {
  -ms-flex: 1;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid #f5f5f5;
}
.service_connect a span {
  margin-top: 0.4rem;
  font-size: 0.6rem;
  color: #666;
}
.hot_questions .question_header {
  font-size: 0.75rem;
  color: #333;
  line-height: 3rem;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 0.7rem;
}
.hot_questions .question_title {
  padding: 0 0.7rem;
  line-height: 2rem;
  border-bottom: 1px solid #f5f5f5;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.hot_questions .question_title span {
  font-size: 0.6rem;
  color: #666;
}
.arrow-svg {
  width: 0.6rem;
  height: 0.6rem;
}
</style>
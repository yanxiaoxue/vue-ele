<template>
  <div>
    <section class="profile-number">
      <a href class="profile-link">
        <span class="privateImage">
          <img src="../../assets/img/pepole.png" alt style="width:100%" />
        </span>
        <div class="user-info">
          <p>登陆|注册</p>
          <p>
            <span class="user-icon">
              <img src="../../assets/img/phone.png" alt style="width:110%" />
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <img src="../../assets/img/rightjt.png" style="width:180%" alt />
        </span>
      </a>
    </section>

    <section class="info-data">
      <ul class="clear">
        <li class="info-data-link">
          <span class="info-data-top">
            <b>0.00</b>"元"
          </span>
          <span class="info-data-bottom">我的余额</span>
        </li>
        <li class="info-data-link">
          <span class="info-data-top">
            <b>0.00</b>"个"
          </span>
          <span class="info-data-bottom">我的优惠</span>
        </li>
        <li class="info-data-link">
          <span class="info-data-top">
            <b>0.00</b>"分"
          </span>
          <span class="info-data-bottom">我的积分</span>
        </li>
      </ul>
    </section>

    <section class="profile-1reTe">
      <router-link to="/myorder" class="myorder">
        <aside>
          <img src="../../assets/img/list.png" alt style="width:120%" />
        </aside>
        <div class="myorder-div">
          <span>我的订单</span>
          <span class="myorder-divsvg">
            <img src="../../assets/img/grayjt1.png" alt style="width:180%" />
          </span>
        </div>
      </router-link>
      <router-link to="/jifen" class="myorder">
        <aside>
          <img src="../../assets/img/shop.png" alt style="width:120%" />
        </aside>

        <div class="myorder-div">
          <span>积分商城</span>
          <span class="myorder-divsvg">
            <img src="../../assets/img/grayjt1.png" alt style="width:180%" />
          </span>
        </div>
      </router-link>
      <a href class="myorder">
        <aside>
          <img src="../../assets/img/vip.png" alt style="width:120%" />
        </aside>
        <div class="myorder-div">
          <span>饿了么会员卡</span>
          <span class="myorder-divsvg">
            <img src="../../assets/img/grayjt1.png" alt style="width:180%" />
          </span>
        </div>
      </a>
    </section>

    <section class="profile-1reTe">
      <router-link to="/serve" href class="myorder">
        <aside>
          <img src="../../assets/img/serv.png" alt style="width:120%" />
        </aside>
        <div class="myorder-div">
          <span>服务中心</span>
          <span class="myorder-divsvg">
            <img src="../../assets/img/grayjt1.png" alt style="width:180%" />
          </span>
        </div>
      </router-link>
      <router-link to="./order" class="myorder">
        <aside>
          <img src="../../assets/img/elm.png" alt style="width:180%" />
        </aside>
        <div class="myorder-div">
          <span>下载饿了么APP</span>
          <span class="myorder-divsvg">
            <img src="../../assets/img/grayjt1.png" alt style="width:180%" />
          </span>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section,
a,
ul,
div {
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
.profile-number {
  padding-top: 1.95rem;
}
.profile-number .profile-link {
  display: block;
  display: -ms-flexbox;
  display: flex;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #3190e8;
  padding: 0.666667rem 0.6rem;
}
.profile-number .profile-link .privateImage {
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  vertical-align: middle;
}
.profile-number .profile-link .user-info {
  margin-left: 0.48rem;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
.profile-number .profile-link .user-info p {
  font-weight: 700;
  font-size: 0.8rem;
  color: #fff;
}
.profile-number .profile-link .user-info p .user-icon {
  width: 0.5rem;
  height: 0.75rem;
  display: inline-block;
  vertical-align: middle;
  line-height: 0.75rem;
}
.profile-number .profile-link .user-info p .icon-mobile-number {
  display: inline-block;
  font-size: 0.57333rem;
  color: #fff;
}
.profile-number .profile-link .arrow {
  width: 0.46667rem;
  height: 0.98rem;
  display: inline-block;
}
.info-data {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}
.clear {
  zoom: 1;
}
.info-data ul .info-data-link {
  width: 33%;
  display: inline-block;
  border-right: 1px solid #f1f1f1;
}
.info-data ul .info-data-link .info-data-top {
  font-size: 0.55rem;
  color: #333;
  padding: 0.853333rem 0 0.453333rem;
}
.info-data ul .info-data-link .info-data-top b {
  display: inline-block;
  font-size: 1.2rem;
  color: #f90;
  font-weight: 700;
  line-height: 1rem;
  font-family: Helvetica Neue, Tahoma;
}
.info-data ul .info-data-link span {
  display: block;
  width: 100%;
  text-align: center;
}
.info-data ul .info-data-link .info-data-bottom {
  font-size: 0.57333rem;
  color: #666;
  font-weight: 400;
  padding-bottom: 0.453333rem;
}
.info-data ul .info-data-link:nth-of-type(2) .info-data-top b {
  color: #ff5f3e;
}
.info-data ul .info-data-link:nth-of-type(3) .info-data-top b {
  color: #6ac20b;
}
.profile-1reTe {
  margin-top: 0.4rem;
  background: #fff;
}
.profile-1reTe .myorder {
  padding-left: 1.6rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.profile-1reTe .myorder aside {
  width: 0.7rem;
  height: 0.7rem;
  margin-left: -0.866667rem;
  margin-right: 0.266667rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.profile-1reTe .myorder .myorder-div {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.433333rem 0.266667rem 0.433333rem 0;
  font-size: 0.7rem;
  color: #333;

  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.profile-1reTe .myorder .myorder-div span {
  display: block;
}
.profile-1reTe .myorder .myorder-div .myorder-divsvg {
  width: 0.46667rem;
  height: 0.46667rem;
}
</style>
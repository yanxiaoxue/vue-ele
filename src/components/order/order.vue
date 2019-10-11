<template>
  <div>
    <header class="header-top">
      <router-link to="/takeout">
      <i class="iconfont icon-right1"></i>
      </router-link>
      <router-link to="/" class="header-school">确认订单</router-link>
      <span class="header-login-register">
        <router-link to>登陆</router-link>
        <span>|</span>
        <router-link to>注册</router-link>
      </span>
    </header>
    <div class="order">
      <router-link to="/chooseadress" class="address_container">
        <div class="address_empty_left">
          <img src alt />
          <div v-if="this.address" class="bodycc">
            <li>
              <div >
                <header class="header">
                  <span>{{this.address.id}}</span>
                  <span>{{this.address.phnum}}</span>
                </header>
                <div class="content">
                  <span>{{this.address.lable}}</span>
                  <span>{{this.address.address}}</span>
                </div>
              </div>
            </li>
          </div>
          <div v-else class="add_address">请添加一个收获地址{{adrs.name}}</div>
        </div>
        <img src="../../assets/img/grayjt1.png" alt class="address_empty_right" />
      </router-link>
    </div>

    <section class="delivery_model container_style">
      <p class="deliver_text">送达时间</p>
      <section class="deliver_time">
        <p>尽快送达|预计 11：07</p>
        <p>蜂鸟专送</p>
      </section>
    </section>

    <section class="pay_way container_style">
      <header class="header_style">
        <span>支付方式</span>
        <div class="more_type">
          <span>在线支付</span>
          <img src="../../assets/img/grayjt1.png" alt class="address_empty_right" />
        </div>
      </header>
      <section class="hongbo">
        <span>红包</span>
        <span>暂时只在饿了么APP中支持</span>
      </section>
    </section>

    <section class="food_list">
      <header>
        <img src alt />
        <span>效果演示</span>
      </header>
      <ul class="food_list_ul">
        <li class="food_item" v-for="(food,index) in foodList" :key="index">
          <p>{{food.name}}</p>
          <div class="num_price">
            <span class="num_count">X{{food.count}}</span>
            <span class="num_price">￥{{food.specfoods[0].price}}</span>
          </div>
        </li>
      </ul>
      <div class="food_item_style">
        <p class="food_name ellipis">餐盒费</p>
        <div class="num_price">
          <span>￥2</span>
        </div>
      </div>
      <div class="food_item_style">
        <p class="food_name ellipis">配送费</p>
        <div class="num_price">
          <span>￥5</span>
        </div>
      </div>
      <div class="food_item_style total_price">
        <p class="food_name ellipis">订单</p>
        <div class="num_price">
          <span>待支付</span>
        </div>
      </div>

      <section class="pay_way container_style">
        <router-link to="/beizhu" class="header_style">
          <span>订单备注</span>
          <div class="more_type">
            <router-link to="/beizhu">
              <span>{{this.$route.params.userId}}</span>
            </router-link>
            <img src="../../assets/img/grayjt1.png" alt />
          </div>
        </router-link>
        <router-link to="/fapiao" class="hongbo support_is_available">
          <span>发票抬头</span>
          <span>不需要开发票</span>
        </router-link>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beiz: {},
      adrs: {},
      address: {},
      foodList:[],
      money:0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      this.address = this.$route.params.newAddress;
      this.foodList = JSON.parse(localStorage.getItem("foodList"));

    }
  },
};
</script>

<style scoped>
.handleOrder{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  color: #fff;
  font-size: .75rem;
  line-height: 2rem;
}
.handleOrder p:first-of-type{
  background: #3c3c3c;
  width: 11rem;
  padding-left:0.5rem; 
}
.handleOrder p:last-of-type{
  flex: auto;
  background: #56D176;
  text-align: center;
}
.food_item{
  display: flex;
  font-size: 0.7rem;
  color: #666;
}
.food_item p{
  width:4rem;
  margin-left: 0.75rem;
  
}
.food_item .num_count{
  display: inline-block;
  width: 9rem;
  text-align: center;
  color:#FF6600 ;


}
.food_item .num_price{
  color: #666;
  
}
.iconfont{
  color: #fff;
}
.bodycc {
  /* margin-top: 50px; */
}
.bodycc li{
  box-sizing: border-box;
  padding: 0.5rem 0.7rem;
}
.bodycc li .header span:first-of-type{
  font-size: 0.8rem;
  font-weight: 700;
}
.bodycc li .header span:last-of-type{
  font-size: 0.7rem;
  color: #444;
}
.bodycc li .content span:first-of-type{
  font-size: 0.6rem;
  color: #fff;
  background: red;
  border-radius: 0.2rem;
}
.bodycc li .content span:last-of-type{
  font-size: 0.65rem;
  color: #cccccc;
  margin-left: 0.3rem;
}
header {
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
.order {
  margin-top: 2rem;
}

.address_container {
  min-height: 3.5rem;
  justify-content: space-between;
  padding: 0 0.6rem;
  background-color: #fff;
  background-size: auto 0.12rem;
}
.address_container .address_empty_left,
.address_container[data-v-4e0d5034] {
  display: flex;

  align-items: center;
}
.address_container .address_empty_left,
.address_container {
  display: flex;
  align-items: center;
}
.address_container .address_empty_left .add_address {
  font-size: 0.7rem;
  color: #333;
}
router-link,
a {
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
.address_empty_right {
  width: 0.6rem;
  height: 0.6rem;
  fill: #999;
}
.delivery_model {
  border-left: 0.2rem solid #3190e8;
  min-height: 4rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}

.container_style {
  background-color: #fff;
  margin-top: 0.4rem;
  padding: 0 0.7rem;
}
.delivery_model .deliver_text {
  font-size: 0.8rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.3rem;
}
.delivery_model .deliver_time {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: end;
  align-items: flex-end;
}
.delivery_model .deliver_time p:first-of-type {
  font-size: 0.7rem;
  color: #3190e8;
}
.delivery_model .deliver_time p:nth-of-type(2) {
  font-size: 0.5rem;
  color: #fff;
  background-color: #3190e8;
  width: 2.4rem;
  margin-top: 0.5rem;
  text-align: center;
  border-radius: 0.12rem;
  padding: 0.1rem;
}
section {
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
.pay_way .header_style {
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 2rem;
}
.pay_way .header_style span:first-of-type {
  font-size: 0.7rem;
  color: #666;
}
span {
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
.pay_way .header_style .more_type img {
  width: 0.5rem;
  height: 0.5rem;
  fill: #ccc;
}
.pay_way .header_style .more_type span:first-of-type {
  font-size: 0.6rem;
  color: #aaa;
  width: 10rem;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
.more_type span:first-of-type {
  font-size: 0.6rem;
  color: #aaa;
  width: 10rem;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
.address_empty_right {
  width: 0.6rem;
  height: 0.6rem;
  fill: #999;
}
.hongbo {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-top: 0.025rem solid #f5f5f5;
}
.pay_way .hongbo span {
  font-size: 0.6rem;
  color: #aaa;
  line-height: 2rem;
}
.pay_way .hongbo span:nth-of-type(2) {
  color: #aaa;
}
.food_list {
  background-color: #fff;
  margin-top: 0.4rem;
}
.food_list header {
  padding: 0.7rem;
  border-bottom: 0.025rem solid #f5f5f5;
}
.food_list header img {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
}
.food_list header span {
  font-size: 0.8rem;
  color: #333;
}
.food_list .food_list_ul {
  padding-top: 0.5rem;
}
.food_list .food_item_style {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 1.8rem;
  padding: 0 0.7rem;
}
.food_list .food_item_style .food_name {
  width: 11rem;
}
.food_list .food_item_style p,
.food_list .food_item_style span {
  font-size: 0.65rem;
  color: #666;
}
.food_list .food_item_style .num_price {
  display: -ms-flexbox;
  display: flex;
  flex: 1;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;

}
.food_list .food_item_style .num_price span:first-of-type {
  color: #666;
}
.food_list .food_item_style .num_count{
  width: 3rem;
}
.food_item_style span {
  font-size: 0.65rem;
  color: #666;
}
.delivery_model .food_item_style {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 1.8rem;
  padding: 0 0.7rem;
}
.food_list .food_item_style .food_name {
  width: 11rem;
}
.food_list .food_item_style p,
.food_list .food_item_style span {
  font-size: 0.65rem;
  color: #666;
}
.food_list .food_item_style .num_price {
  -ms-flex: 1;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.food_list .food_item_style .num_price span:first-of-type {
  color: #666;
}
.food_list .food_item_style span {
  font-size: 0.65rem;
  color: #666;
}
.food_list .food_item_style {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 1.8rem;
  padding: 0 0.7rem;
}
.food_list .food_item_style .food_name {
  width: 11rem;
}
.food_list .food_item_style .num_price {
  -ms-flex: 1;
  flex: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.food_list .food_item_style .num_price span:first-of-type {
  color: #666;
}
.food_list .food_item_style p,
.food_list .food_item_style span {
  font-size: 0.65rem;
  color: #666;
}
.food_list .total_price {
  border-top: 0.025rem solid #f5f5f5;
}
.food_list .food_item_style {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 1.8rem;
  padding: 0 0.7rem;
}
.food_list .food_item_style .food_name {
  width: 11rem;
}

.food_list .food_item_style p,
.food_list .food_item_style span {
  font-size: 0.65rem;
  color: #666;
}
.container_style {
  background-color: #fff;
  margin-top: 0.4rem;
  padding: 0 0.7rem;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.header-top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
  line-height: 1.95rem;
  padding: 0 0.45rem;
  box-sizing: border-box;
  text-align: center;
}
.iconfont {
  font-size: 0.75rem;
  position: absolute;
  left: 0.2rem;
}
.header-school {
  font-size: 0.65rem;
  text-align: center;
}
.header-login-register {
  position: absolute;
  right: 0.2rem;
  color: #fff;
  font-size: 0.55rem;
}
.header-login-register span {
  color: #fff;
}
</style>
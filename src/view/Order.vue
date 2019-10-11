<template>
  <div id="order">
    <div class="confirmOrderContainer">
      <navSure />
      <Order />
      <payFooter />
    </div>
  </div>
</template>

<script>
import navSure from "../components/order/navSure";
import payFooter from "../components/order/payfooter";
import Order from "../components/order/order";
export default {
  name: "order",

  components: { payFooter, navSure, Order }
};
</script>

<style scoped>
.confirmOrderContainer {
  padding-bottom: 3rem;
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
  color: #f60;
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
  color: #f60;
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
  color: #f60;
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
.container_style {
  background-color: #fff;
  margin-top: 0.4rem;
  padding: 0 0.7rem;
}
.pay_way .header_style {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 2rem;
}
.pay_way .hongbo {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-top: 0.025rem solid #f5f5f5;
}
.pay_way .support_is_available span {
  color: #666;
}
.pay_way .hongbo span:nth-of-type(2) {
  color: #aaa;
}
</style>
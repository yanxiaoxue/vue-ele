<template>
  <div class="foodheader">
    <i class="iconfont icon-right1" @click.prevent="$router.go(-1)"></i>
    <span class="food-title">{{title}}</span>
     <span class="header-login-register">
              <router-link to="">登陆</router-link>
              <span>|</span>
              <router-link to="">注册</router-link>
          </span>
  </div>
</template>

<script>
export default {
  name: "FoodHeader",
  props:{
    title:String
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: #ffffff;
  font-size: 0.6rem;
}
.foodheader {
  position: relative;
  background-color: #3190e8;
  color: #ffffff;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
  line-height: 1.95rem;
  text-align: center;
}
.food-title {
  font-size: 0.8rem;
  
}
.iconfont{
    position: absolute;
    left: 2%;
    color: #ffffff;
    font-size: 0.8rem;
}
.header-login-register span:nth-child(2){
    font-size: 0.6rem;
}
.header-login-register {
  position: absolute;
  right: 0.2rem;
}
</style>
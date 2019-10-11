<template>
  <div class="foodInfo">
    <header class="header">
      <i class="iconfont icon-right1" @click.prevent="$router.go(-1)"></i>
      <span class="food-title">{{this.food.name}}</span>
    </header>
    <div class="img-cover">
      <img :src="`//elm.cangdu.org/img/`+this.food.image_path" class="food-img">
      <div class="cover"></div>
    </div>
    <p class="description">
      {{this.food.description}}
    </p>
    <section class="detail-container">
        <section class="detail-left">
          <p>{{this.food.name}}</p>
          <div class="rating-sale">
            <span>评分</span>
            <span>
                <!-- <Star :score="this.food.rating"/> -->
            </span>
            <span>4.8</span>
          </div>
          <p>
            <span>月售  {{this.food.month_sales}}单</span>
            <span>售价￥20</span>
            <span>起</span>
          </p>
          <p>
            <span>评论数{{this.food.rating_count}}</span>
            <span>好评率{{this.food.satisfy_rate}}%</span>
          </p>
        </section>
    </section>
  </div>
</template>

<script>
import Star from '../components/common/Star'
export default {
  name: "FoodInfo",
  data() {
    return {
    };
  },
  components:{
    Star
  },
  methods: {
    getParams() {
      this.food = JSON.parse(this.$route.query.food);
      console.log(this.food);
    }
  },
  created() {
    this.getParams();
  }
};
</script>

<style scoped>
.foodInfo{
  width: 100%;
  color: #666;
}
.header {
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
.iconfont {
  position: absolute;
  left: 2%;
  color: #ffffff;
  font-size: 0.8rem;
}
.img-cover{
  position: relative;
  margin-top: 1.95rem;
}
.food-img{
  width: 100%;
  display: block;
}
.cover{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.description{
  font-size: .6rem;
  color: #666;
  margin-top: .5rem;
  line-height: .8rem;
  bottom: .2rem;
  padding: 0 .4rem;
}
.detail-container{
  font-size: .6rem;
  padding: .4rem;
  display: flex;
  justify-content:space-between;
  align-items: center; 
}
.detail-left{
  color: #666;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
}
.detail-left p {
  margin-top: .2rem;
}
.detail-left p:first-of-type{
  color: #333;
  font-size: .7rem;
  margin-bottom: .2rem;
}
.rating-sale{
  display: flex;
  align-items: center;
}
.rating-sale span:last-of-type{
  color: rgba(252, 168, 11, 0.979);
}
.detail-left p:nth-of-type(2) span{
  margin-right: .5rem;
  color: rgba(252, 168, 11, 0.979);
}
.detail-left p:nth-of-type(2) span:first-of-type{
 color: #666;
}
.detail-left p:nth-of-type(3) span{
 margin-right: .5rem;
}
</style>
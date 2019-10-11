<template>
  <div>
    <section class="confrim_order">
      <p>待支付：￥{{this.moneyAll}}</p>
      <p @click="showtip=!showtip">确认下单</p>
    </section>
    <tipzhifu v-show="showtip" />
  </div>
</template>

<script>
import tipzhifu from "././tipzhifu";
export default {
  components: { tipzhifu },
  data() {
    return {
      showtip: false,
      foodList:[],
      money:0,
      moneyAll:0

    };
  },
  created(){
    this.foodList = JSON.parse(localStorage.getItem("foodList"));
     console.log(this.foodList);
     for(var i=0;i<this.foodList.length;i++){
         this.money =  this.foodList[i].count*this.foodList[i].specfoods[0].price;
         this.moneyAll += this.money;
     }
     this.moneyAll = this.moneyAll+2+5;
  }
};
</script>

<style scoped>
.confrim_order {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  /* height: 2rem; */
}
.confrim_order p:first-of-type {
  background-color: #3c3c3c;
  -ms-flex: 5;
  flex: 5;
  padding-left: 0.7rem;
}
.confrim_order p:nth-of-type(2) {
  -ms-flex: 2;
  flex: 2;
  background-color: #56d176;
  text-align: center;
}
.confrim_order p {
  line-height: 2rem;
  font-size: 0.75rem;
  color: #fff;
}
</style>
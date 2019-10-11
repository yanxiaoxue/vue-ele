<template>
  <div class="purchase">
    <section v-if="this.foodList.length > 0" v-show="isShow">
      <!-- 遮罩层 -->
    <section class="cover" ref="cover">
    </section>
    <!-- 购物车列表 -->
    <section class="shop-list"  ref="shopList">
      <p class="shop-list-title">
        <span>购物车</span>
        <span @click="clearCart">清空</span>
      </p>
      <section class="shop-list-wrapper" ref="shopListScroll">
        <ul>
          <li class="shop-list-content" v-for="(item,index) in foodList" :key="index">
            <div class="shop-list-left">{{item.name}}</div>
            <div class="shop-list-middle">{{item.specfoods[0].price}}</div>
            <div class="shop-list-right">
              <CartControl :listItem="item" />
            </div>
          </li>
        </ul>
      </section>
    </section>
    </section>
    <!-- 加入购物车 -->
    <section class="buy_container" @click="toggle()">
      <section class="circle" v-show="totalCount">{{totalCount}}</section>

      <section class="cart_icon_num">
        <div class="icon_container2" v-if="totalCount>0">
          <i class="iconfont icon-gouwuche"></i>
        </div>
        <div class="icon_container" v-else>
          <i class="iconfont icon-gouwuche"></i>
        </div>
        <div class="num_container">
          <div>￥{{totalMoney}}</div>
          <div>配送费5元</div>
        </div>
      </section>
      <section class="gotopay">
        <span v-if="totalMoney <20" class="money1">还差20元起送</span>
        <span v-else class="money2" @click.prevent="handlePurchase">
          <router-link to="">
            去结算
          </router-link>
        </span>
      </section>
    </section>
    
  </div>
</template>

<script>
import BScroll from "better-scroll";
import CartControl from "./CartControl";
export default {
  data() {
    return {
      isShow: false
    };
  },
  props: {
    foodList: Array
  },
  components: {
    CartControl
  },

  computed: {
    totalMoney() {
      let total = 0;
      this.foodList.forEach(val => {
        if (!val.count) {
          return;
        } else {
          total += val.count * val.specfoods[0].price;
        }
      });
      return total;
    },
    totalCount() {
      let num = 0;
      this.foodList.forEach(val => {
        if (!val.count) {
          return;
        } else {
          num += val.count;
        }
      });
      return num;
    }
  },
  methods: {
    _scrollInit() {
      this.scroll = new BScroll(this.$refs.shopListScroll, {
        click: true
      });
    },
    clearCart() {
      this.foodList.forEach(val => {
        val.count = 0;
      });
      this.isShow = false;
    },
    toggle() {
      if (!this.totalCount) {
        this.isShow = false;
      }
      this.isShow = !this.isShow;
      // this.height = this.$refs.shopList.offsetHeight;

    },
    handlePurchase(){
      this.$router.push({
        name: "confirmOrder",
      });
      localStorage.setItem("foodList",JSON.stringify(this.foodList));
      console.log("purchase",this.foodList);
    }
    
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: #ffffff;
}
.purchase {
  width: 100%;
  bottom: 0;
  position: fixed;
}
.buy_container {
  /* position: relative; */
  position: absolute;
  background: #3d3d3f;
  z-index: 20;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  color: #ffffff;
}
.cart_icon_num {
  flex: 1;
}
.iconfont {
  font-size: 1.2rem;
}
.icon_container {
  background-color: #3d3d3f;
  position: absolute;
  padding: 0.4rem;
  border: 0.18rem solid #444;
  border-radius: 50%;
  left: 0.5rem;
  top: -0.7rem;
}
.icon_container2 {
  background-color: #1296db;
  position: absolute;
  padding: 0.4rem;
  border: 0.18rem solid #444;
  border-radius: 50%;
  left: 0.5rem;
  top: -0.7rem;
}
.num_container {
  margin-left: 3rem;
}
.num_container div:first-of-type {
  font-size: 0.85rem;
  font-weight: 700;
}
.num_container div:last-of-type {
  font-size: 0.45rem;
}
.gotopay {
  height: 100%;
}
.gotopay .money1 {
  width: 5.5rem;
  height: 100%;
  display: block;
  box-sizing: border-box;
  font-size: 0.7rem;
  background: #535356;
  font-weight: 700;
  text-align: center;
  line-height: 2rem;
}
.gotopay .money2 {
  width: 5.5rem;
  height: 100%;
  display: block;
  box-sizing: border-box;
  font-size: 0.7rem;
  background: #4cd964;
  font-weight: 700;
  text-align: center;
  line-height: 2rem;
}
.circle {
  z-index: 21;
  width: 0.6rem;
  height: 0.6rem;
  font-size: 0.45rem;
  background: red;
  position: absolute;
  left: 2.3rem;
  top: -0.5rem;
  border-radius: 50%;
  text-align: center;
}
.shop-list { 
  position: relative;
  z-index: 20;
  width: 100%;
  background: #ffffff;
}
.shop-list-title {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.6rem;
  color: #666;
  background-color: #eceff1;
}
.shop-list-title span:first-of-type {
  font-size: 0.7rem;
}
.shop-list-title span:last-of-type {
  font-size: 0.6rem;
}
.shop-list-wrapper{
   padding-bottom: 2rem;
}
.shop-list-content {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.5rem;
  font-size: 0.7rem;

}
.shop-list-left {
  color: #666;
  font-weight: 700;
  width:8.5rem;
}
.shop-list-middle{
    color: #f60;
    font-family: Helvetica Neue,Tahoma;
    font-weight: 700;
}
.cover{
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.4)
}
</style>
<template>
  <div class="search">
    <div class="foodheader">
      <i class="iconfont icon-right1" @click.prevent="$router.go(-1)"></i>
      <span class="food-title">搜索</span>
    </div>
    <!-- 搜索标签 -->
    <div class="searchTag">
      <input type="text" v-on:handle="handleKey" placeholder="请输入商家或食品名称" v-model="keyword" />
    </div>
    <!-- 搜索内容 -->
    <div class="content" v-if="this.keyword!= null &&this.keyword.length>0 ">
      <ul>
        <li v-for="(shop,index) in shoplist" :key="index" class="shop_li">
          <router-link :to="{path:'/foodDisplay',query:{id:shop.id}}" class="shop_link">
            <img :src="`//elm.cangdu.org/img/`+shop.image_path" alt class="shop_img" />

            <div class="shop_right">
              <header class="shop_detail_header shop_common">
                <h4 class="shop_title">{{shop.name}}</h4>
                <ul class="shop_supports">
                  <li
                    v-if="shop.supports.length > 0"
                    class="supports"
                  >{{shop.supports[0].icon_name}}</li>
                  <li
                    v-if="shop.supports.length > 1"
                    class="supports"
                  >{{shop.supports[1].icon_name}}</li>
                  <!-- 
                    v-if="shop.supports.length > 2"  用来处理supports显示的问题
                  -->
                  <li
                    v-if="shop.supports.length > 2"
                    class="supports"
                  >{{shop.supports[2].icon_name}}</li>
                </ul>
              </header>
              <h5 class="rating_order_num shop_common">
                <section class="rating_order_num_left">
                  <section class="rating_section">
                    <section class="star_container">
                      <star :score="shop.rating" />
                    </section>
                    <span class="rating_num">{{shop.rating}}</span>
                  </section>
                  <section class="order_section">月售{{shop.recent_order_nums}}单</section>
                </section>
                <section class="rating_order_num_right">
                  <span v-if="shop.delivery_mode" class="delivery_left">{{shop.delivery_mode.text}}</span>
                  <span v-if="shop.supports[1]" class="delivery_right">{{shop.supports[1].name}}</span>
                </section>
              </h5>
              <h5 class="fee_distance shop_common">
                <p class="fee">
                  ￥{{shop.float_minimum_order_amount}}起送
                  <span>/</span>
                  配送费约{{shop.float_delivery_fee}}
                </p>
                <p class="distance_time">
                  <span>{{shop.distance}}</span>
                  <span>/</span>
                  <span class="shop_time">{{shop.order_lead_time}}</span>
                </p>
              </h5>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 搜索历史 -->
    <div class="history" v-if="!this.keyword">
      <div class="history-header">搜索历史</div>
      <div class="history-content" v-if="this.arr">
        <ul>
          <li v-for="(title,index) in arr" :key="index" @click="searchItem(index)">
            <span class="title">{{arr[index]}}</span>
            <span class="delete" @click="deleteOne()">X</span>
          </li>
        </ul>
      </div>
      <div class="clearAll" @click="deleteAll">
          清空所有
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Star from "../components/common/Star";
export default {
  name: "FoodHeader",
  data() {
    return {
      keyword: "",
      shoplist: {},
      arr: []
    };
  },
  components: {
    Footer,
    Star
  },
  created() {
    this.SearchWord();
  },
  //   实时监控关键字的变化
  watch: {
    keyword() {
      this.handleKey();
    }
  },
  methods: {
    handleKey() {
      this.$axios
        .get(
          `https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=` +
            this.keyword
        )
        .then(res => {
        //   console.log(res.data);
          this.shoplist = res.data;
          if (this.keyword) {
            let searchWord = localStorage.getItem("searchword");
            if (searchWord == null) {
              localStorage.setItem("searchword", this.keyword);
            } else {
              this.arr = localStorage.getItem("searchword");
              this.arr = this.arr.split(",");
              if (this.arr.indexOf(this.keyword) != -1) {
                this.arr = this.arr;
              } else {
                this.arr.unshift(this.keyword);
              }
              this.historyWord = this.arr;
              if (this.historyWord.length > 5) {
                this.historyWord.pop();
              }
              localStorage.setItem("searchword", this.historyWord);

            //   console.log("arr", this.arr);
            }
          }
        })
        .catch((res)=>{
           console.error(res.data.message)
        })
        ;
    },
    SearchWord() {
      //页面加载时先读取localStorage的关键字
      this.historyWord = localStorage.getItem("searchword");
      this.historyWord = this.historyWord.split(","); //字符串转化为数组
      this.arr = this.historyWord;
    },
    searchItem(index){
      this.keyword = this.arr[index];
      this.handleKey(this.keyword);
    },
    deleteAll(){
        this.historyWord = localStorage.clear();
        this.arr = this.historyWord;
    }
  }
};
</script>

<style scoped>
.history {
  margin-top: 0.3rem;
}
.history-header {
  background: #f0eeee;
  color: #333;
  font-size: 0.7rem;
  padding: 0.3rem;
  box-sizing: border-box;
}
.history-content li {
  background: #fff;
  color: #333;
  font-size: 0.65rem;
  border-bottom: 1px solid #eee;
  padding: 0.5rem 0.3rem;
  display: flex;
  justify-content: space-between;

}
.clearAll{
    border-bottom: 1px solid #eee;
    text-align: center;
    font-size: 0.8rem;
    color: #3190e8;
    padding: 0.5rem 0;
}
.delete{
    color: #666;
}
a {
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
.iconfont {
  position: absolute;
  left: 2%;
  color: #ffffff;
  font-size: 0.8rem;
}
.header-login-register span:nth-child(2) {
  font-size: 0.6rem;
}
.header-login-register {
  position: absolute;
  right: 0.2rem;
}
.searchTag {
  margin-top: 2rem;
  width: 100%;
  font-size: 0.6rem;
  padding: 0.3rem 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.searchTag input {
  flex: auto;
  height: 1.5rem;
  border: 1px solid #cccccc;
  background: #f0eeee;
  border-radius: 0.2rem;
}
.searchTag input:focus {
  outline: none;
}
.searchTag button {
  flex: 0rem;
  background-color: #3190e8;
  border: none;
  border-radius: 0.2rem;
  color: #ffffff;
  margin-left: 0.2rem;
}
a {
  text-decoration: none;
  color: #333;
}
li {
  list-style: none;
}
.shop_body {
  width: 100%;
}
.shop_li {
  border-bottom: 0.025rem;
  padding: 0.7rem 0.4rem;
}
.shop_link {
  display: flex;
}

.shop_right {
  flex: auto;
}
.shop_img {
  width: 2.7rem;
  height: 2.7rem;
  display: inline-block;
  margin-right: 0.4rem;
}
.shop_common {
  display: flex;
  justify-content: space-between;
}
.shop_title {
  width: 8.5rem;
  color: #333;
  padding-top: 0.01rem;
  font: 0.65rem/0.65rem PingFangSC-Regular;
  font-weight: 700;
}
.shop_title::before {
  content: "\54C1\724C";
  display: inline-block;
  font-size: 0.5rem;
  line-height: 0.6rem;
  color: #333;
  background-color: #ffd930;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  margin-right: 0.2rem;
}
.shop_supports {
  display: flex;
}
.supports {
  width: 0.6rem;
  height: 0.6rem;
  font-size: 0.5rem;
  color: #999;
  border: 0.025rem solid #f1f1f1;
  padding: 0 0.04rem;
  border-radius: 0.08rem;
  margin-left: 0.05rem;
}
.rating_order_num {
  height: 0.6rem;
  margin-top: 0.52rem;
  font-size: 0.4rem;
}
.rating_section,
.rating_order_num_left {
  display: flex;
}
.rating_num {
  color: #ff6000;
  margin: 0 0.2rem;
}
.delivery_left,
.delivery_right {
  padding: 0.04rem 0.08rem 0;
  border-radius: 0.08rem;
  margin-left: 0.08rem;
}
.delivery_left {
  color: #fff;
  background-color: #3190e8;
  border: 0.025rem solid #3190e8;
}
.delivery_right {
  color: #3190e8;
  background-color: #ffffff;
  border: 0.025rem solid #3190e8;
}
.fee_distance {
  margin-top: 0.52rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0.5rem;
  color: #333;
}
.fee_distance .fee {
  color: #666;
}
.distance_time {
  color: #999;
}
.shop_time {
  color: #3190e8;
}
</style>
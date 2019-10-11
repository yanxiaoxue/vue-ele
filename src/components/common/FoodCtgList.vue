<template>
  <div class="foodList">
    <div class="swiper-container">
      <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide>
          <ul class="swiper">
            <li
              v-for="(food ,index) in foodList.slice(0,this.foodList.length/2)"
              :key="index"
            >
              <router-link :to="{path:'/foodList',query:{title:food.title}}">
                <img
                  v-bind:src="`https://fuss10.elemecdn.com`+food.image_url"
                  alt
                  width="50px"
                  height="50px"
                />
                <span>{{food.title}}</span>
              </router-link>
            </li>
          </ul>
        </swiper-slide>

        <swiper-slide>
          <ul class="swiper">
            <li
              v-for="(food ,index) in foodList.slice(this.foodList.length/2,this.foodList.length)"
              :key="index"
            >
              <router-link :to="{path:'/foodList',query:{title:food.title}}">
                <img
                  v-bind:src="`https://fuss10.elemecdn.com`+food.image_url"
                  alt
                  width="50px"
                  height="50px"
                />
                <span>{{food.title}}</span>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
require("swiper/dist/css/swiper.css");
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "FoodList",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      foodList: [
        {
          title: "",
          image_url: ""
        }
      ],
      swiperOption: {
        loop: false, //循环切换
        directionType: "horizontal", //方向
        pagination: {
          //分页器
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
      }
    };
  },
  created() {
    // 请求食品分类列表数据
    this.getFoodCtgList();
  },
  
  computed:{
    swiper(){
       return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    getFoodCtgList() {
      this.$axios.get("/api/v2/index_entry").then(res => {
        this.foodList = res.data;
        console.log(this.foodList);

      });
    },
    handleClick(food) {
      console.log(food);
      // 提交方法到action,并传递food参数
      this.$store.dispatch("setFoodAsync",food)

      // 跳转每一个食品分类的页面
      this.$router.push("/foodList")
    }
  }
};
</script>

<style scoped>
.foodList {
  width: 100%;
  overflow: hidden;
  padding-bottom: 0.6rem;
}
.swiper-container {
  width: 200%;
}
.swiper {
  float: left;
}
a {
  text-decoration: none;
}
.foodList li {
  width: 25%;
  text-align: center;
  list-style: none;
  float: left;
}
.foodList img {
  margin-bottom: 0.3rem;
  width: 1.8rem;
  height: 1.8rem;
}
.foodList span {
  display: block;
  text-align: center;
  font-size: 0.55rem;
  color: #666;
}
</style>
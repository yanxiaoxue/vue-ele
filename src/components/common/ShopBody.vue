<template>
  <div class="shop_body">
     <ul>
      <li v-for="(shop,index) in shoplist" :key="index" class="shop_li">
        <router-link :to="{path:'/foodDisplay',query:{id:shop.id}}" class="shop_link">
          <img :src="`//elm.cangdu.org/img/`+shop.image_path" alt class="shop_img" />

          <div class="shop_right">
            <header class="shop_detail_header shop_common">
              <h4 class="shop_title">{{shop.name}}</h4>
              <ul class="shop_supports">
                <li v-if="shop.supports.length > 0" class="supports">{{shop.supports[0].icon_name}}</li>
                <li v-if="shop.supports.length > 1" class="supports">{{shop.supports[1].icon_name}}</li>
                <!-- 
                    v-if="shop.supports.length > 2"  用来处理supports显示的问题
                -->
                <li v-if="shop.supports.length > 2" class="supports">{{shop.supports[2].icon_name}}</li>
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
                <section class="order_section">月售{{shop.recent_order_num}}单</section>
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
</template>

<script>
import Star from './Star'
export default {
  data() {
    return {
      show: false,
      shoplist: {
        image_path: "",
        name: "",
        rating: "",
        recent_order_nums: "",
        float_minimum_order_amount: "",
        float_delivery_fee: "",
        distance: "",
        order_lead_time: "",
        supports: [
          { icon_name: "" },
        ],
        delivery_mode: {
          text: ""
        }
      },
      id:0
    };
  },
  props:{
    newId:Number
  },
  components: {
    Star
  },
  created() {
    // 请求商店分类列表数据
    console.log("hello")
    console.log("1122"+this.id);
    this.getShopList(this.id);
  },
  watch:{
    newId:function(){
    this.id = this.newId;
    this.getShopList(this.id);
    }
  },
  methods: {
    getShopList(id) {
      this.$axios
        .get("/api/shopping/restaurants?latitude=37.851375&longitude=112.545341&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]="+id)
        .then(res => {
          this.shoplist = res.data;
          console.log(res.data);
        });
    }
  }
};
</script>

<style scoped>
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
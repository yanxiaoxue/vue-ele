<template>
  <div ref="wrapper" class="foodDisplay">
    <section class="shop_container">
      <nav>
        <i class="iconfont icon-right1" @click.prevent="$router.go(-1)"></i>
        <ul class="shop_nav">
          <li class="nav_li">
            <router-link to>点餐</router-link>
          </li>
          <li class="nav_li">
            <router-link to>评价</router-link>
          </li>
        </ul>
      </nav>
      <section class="food_container">
        <section class="menu_container">
          <!-- 左侧菜单栏 -->
          <section ref="left" class="menu_left">
            <ul>
              <li
                ref="lItem"
                v-for="(item, index) in menu"
                :key="index"
                class="menu_left_li"
                :class="{current: index === currentIndex}"
                @click="selectLeft(index,$event)"
              >
                <span>{{item.name}}</span>
              </li>
            </ul>
          </section>
          <!-- 右侧菜单 -->
          <section ref="right" class="menu_right">
            <ul>
              <li :checkCount="checkCount"  class="right-item-hook" v-for="(menu, index) in menu" :key="index">
                <header class="menu_right_header">
                  <section class="menu_right_header_left">
                    <strong>{{menu.name}}</strong>
                    <span class="menu_description">{{menu.description}}</span>
                  </section>
                  <span class="menu_right_header_right">...</span>
                </header>
                <section v-for="(food,id) in menu.foods" :key="id" class="menu_detail_list">
                  <div @click="showProductDetail(food)" class="menu_detail_list_description">
                    <img
                      class="food_img"
                      :src="`//elm.cangdu.org/img/`+food.image_path"
                      :onerror="defaultImg"
                    />
                    <section class="food_description">
                      <strong class="food_description_name">{{food.name}}</strong>
                      <p class="food_description_content">{{food.description}}</p>
                      <p class="food_description_sale_rating">
                        <span>月售{{food.month_sales}}份</span>
                        <span>好评率{{food.satisfy_rate}}%</span>
                      </p>
                      <!-- <p v-if="food.activity.image_text != null &&food.activity.image_text.length > 0"  class="food_activity">{{food.activity.image_text}}</p> -->
                    </section>
                  </div>
                  <footer>
                    <section class="food_price">
                      <section>
                        <span>￥</span>
                        <span>{{food.specfoods[0].price}}</span>
                        <span>起</span>
                      </section>
                      <section class="show_icon_container">
                        <!-- 加减号 -->
                        <CartControl @hiddenShow="hiddenShow(food)"  :listItem="food"/>
                      </section>
                    </section>
                  </footer>
                </section>
              </li>
            </ul>
          </section>
        </section>
        <!-- 弹框 -->
        <section v-if="isShow" >
          <div class="specs_cover"></div>
          <div class="specs_list">
            <header class="specs_List_header">
              <h4>{{this.specName}}</h4>
              <span @click="hiddenShow">X</span>
            </header>
            <section class="specs_details">
              <h5>规格</h5>
              <ul>
                <li>{{this.specsName1}}</li>
                <li v-if="this.specsName2">{{this.specsName2}}</li>
              </ul>
            </section>
            <footer class="specs_footer">
              <div class="specs_price">￥{{this.specPrice}}</div>
              <div class="specs_addTo_cart">加入购物车</div>
            </footer>
          </div>
        </section>

        <Purchase  :foodList="checkCount"/>
      </section>
    </section>
  </div>
</template>

<script>
import CartControl from '../components/common/CartControl'
import Purchase from "../components/common/Purchase";
import BScroll from "better-scroll";
export default {
  name: "FoodDisplay",
  data() {
    return {
      id: "",
      defaultImg: 'this.src = "' + require("../assets/nav/takeout.png") + '"',
      menu: {
        name: "",
        description: "",
        foods: [
          [
            {
              image_path: "",
              name: "",
              descriptin: "",
              month_sales: "",
              satisfy_rate: "",
              specfoods: [
                { price: "", name: "", specs_name: "" },
                { price: "", name: "", specs_name: "" }
              ],
              activity: {
                image_text: null,
                image_text_color: "",
                icon_color: ""
              }
            }
          ]
        ]
      },
      specPrice:"",
      specName:"",
      specsName1:"",
      specsName2:"",
      scrollY: 0,
      heightList: [],
      clickEvent: false,
      foodDescription: "",
      isShow: false,

    };
  },
  components: { Purchase,CartControl},
  created() {
    // 接受ShopList传过来的id值
    this.id = this.$route.query.id;
    this.$axios
      // 根据id值得变化获取对象的数据
      .get(`/api/shopping/v2/menu?restaurant_id=` + this.id)
      .then(res => {
        console.log(res.data);
        this.menu = res.data;
        // console.log(this.menu[0].foods[0].activity.image_text);
        this.$nextTick(() => {
          this._scrollInit();
          this.getHeight();
        });
      });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.heightList.length; i++) {
        let height = this.heightList[i];
        let height2 = this.heightList[i + 1];
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          if (this.clickEvent) {
            console.log(i);
            return i;
          } else {
            return i;
          }
        }
      }
      return 0;
    },
    checkCount(){
       let foodList = [];
        this.menu.forEach(val=>{
        val.foods.forEach(val=>{
          if(val.count){
            foodList.push(val)
          }
        })

      })
      console.log(foodList);
      return foodList;
    }
  },
  methods: {
    // getFoodDisplay(id) {

    // },
    _scrollInit() {
      this.lefts = new BScroll(this.$refs.left, {
        click: true
      });
      this.scroll = new BScroll(this.$refs.wrapper,{
      click:true
      })

      this.rights = new BScroll(this.$refs.right, {
        probeType: 3
      });
      this.rights.on("scroll", pos => {
        //获取实时滚动的距离 使用scrollY接收
        this.scrollY = Math.abs(Math.round(pos.y));
        console.log(this.scrollY);
      });
    },
    getHeight() {
      let rightItems = this.$refs.right.getElementsByClassName(
        "right-item-hook"
      );
      //heightList的第一个元素为0
      let height = 0;
      this.heightList.push(height);
      //之后的高度即为当前li的高度加上之前面li的高度和
      // console.log("个数" + rightItems.length);

      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i];
        height += item.clientHeight;
        this.heightList.push(height);
        // console.log("个数" + this.heightList.length);
      }
    },
    selectLeft(index, event) {
      this.currentIndex = index;
      this.clickEvent = true;
      if (!event._constructed) {
        return;
      } else {
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );

        let el = rightItems[index];
        this.rights.scrollToElement(el, 300);
      }
    },
    showProductDetail(food) {
      this.foodDescription = JSON.stringify(food);
      this.$router.push({
        path: "/foodInfo",
        query: {
          food: this.foodDescription
        }
      });
    },
    hiddenShow(food) {
      this.isShow = !this.isShow;
      this.specPrice = food.specfoods[0].price;
      this.specName = food.specfoods.name;
      this.specsName1 = food.specfoods[0].specs_name;
      this.specsName2 = food.specfoods[1].specs_name;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
  font-size: 0.8rem;
}
li {
  list-style: none;
}
.shop_container {
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  right: 0;
  left: 0;
  height: 100%;
  box-sizing: border-box;
}
.shop_nav {
  /* position: fixed;
    top: 0;
    left: 0; */
  width: 100%;
  height: 2rem;
  /* z-index: 11; */
  /* padding-top: .2rem;
    padding-left: .2rem; */
  display: flex;
  text-align: center;
}
.nav_li {
  list-style: none;
  flex: 1;
}
.menu_container {
  width: 100%;
  position: absolute;
  top: 2.1rem;
  bottom: 0rem;
  display: flex;
  flex: 1;
  padding-bottom: 2rem;
  overflow: hidden;
}
.menu_left {
  width: 3.8rem;
  word-wrap: break-word;
}
.menu_left_li {
  display: block;
  padding: 0.7rem 0.3rem;
  border-bottom: 0.025rem solid #ededed;
  box-sizing: border-box;
  border-left: 0.15rem solid #f8f8f8;
  background: #f8f6f6;
}
.menu_left_li span {
  font-size: 0.6rem;
  color: #666;
}
.menu_right {
  flex: auto;
  overflow-y: auto;
}
.menu_right_header {
  padding: 0.4rem;
  position: relative;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  background: #f8f6f6;
}
.menu_right_header_left {
  width: 11rem;
  white-space: nowrap;
  overflow: hidden;
}
.menu_right_header_right {
  width: 0.5rem;
  height: 1rem;
  display: block;
}
.menu_right_header strong {
  font-size: 0.7rem;
  color: #666;
  font-weight: 700;
}
.menu_description {
  font-size: 0.5rem;
  color: #999;
  width: 30%;
  overflow: hidden;
  margin: 0 0.15rem;
}
.menu_detail_list {
  border-bottom: 1px solid #f8f8f8;
  padding: 0.6rem 0.4rem;
}
.menu_detail_list_description {
  overflow: hidden;
  display: flex;
}
.menu_detail_list_description img {
  width: 2rem;
  height: 2rem;
  display: block;
}
.food_description {
  margin-left: 0.4rem;
}
.food_description_name {
  font-size: 0.7rem;
  color: #333;
}
.food_description_content {
  font-size: 0.5rem;
  color: #999;
  line-height: 0.6rem;
}
.food_description_sale_rating {
  font-size: 0.5rem;
  line-height: 0.8rem;
}
.food_activity {
  line-height: 0.4rem;
  font-size: 0.4rem;
}
.food_price {
  margin-left: 2.4rem;
  font-size: 0;
  margin-top: 0.3rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.food_price span {
  font-size: 0.7rem;
  color: #f60;
  font-weight: 700;
  margin-right: 0.3rem;
}
.food_price section:nth-child(1) span:last-of-type {
  font-size: 0.5rem;
  color: #666;
}
.iconfont {
  position: absolute;
  top: 1%;
  left: 2%;
  color: #3190e8;
  font-size: 0.8rem;
}
.current {
  background: #ffffff;
  border-left: 0.17rem solid #3190e8;
}

.specs_cover {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
}
.specs_list {
  position: fixed;
  top: 35%;
  left: 15%;
  width: 70%;
  color: #222;
  background: #ffffff;
  z-index: 22;
  border: 1px;
  border-radius: 0.2rem;
  font-weight: 400;
}

.specs_list .specs_List_header {
  font-size: 0.7rem;
  padding: 0.5rem;
}
.specs_list .specs_List_header h4 {
  position: relative;
  text-align: center;
}
.specs_list .specs_List_header span {
  font-size: 0.8rem;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
}
.specs_list .specs_details {
  padding: 0.5rem;
}
.specs_list .specs_details h5 {
  font-size: 0.6rem;
  color: #666;
}
.specs_list .specs_details ul {
  display: flex;
  padding: 0.4rem 0;
  font-size: 0.6rem;
}
.specs_list .specs_details ul li {
  padding: 0.3rem 0.5rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.2rem;
}
.specs_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 0.5rem;
  border: 1px;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
.specs_footer .specs_price {
  font-size: 0.8rem;
  font-weight: 700;
  color: #ff6000;
  font-family: Helvetica Neue, Tahoma;
}
.specs_footer .specs_addTo_cart {
  width: 4rem;
  height: 1.3rem;
  background-color: #3199e8;
  border: 1px;
  border-radius: 0.15rem;
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
  line-height: 1.3rem;
}
</style>
<template>
  <div class="screen" ref="screen">
    <section class="sort-container">
      <div class="sort-item" >
        <!-- 下拉显示导航 -->
        <div class="sort-item-container"  @click="start()">
          <div class="sort-item-border">
            <span :class="[color?'changeColor':'color']">{{title}}</span>
            <i :class="[rotate?'iconfont icon-xia-copy go':'iconfont icon-xia aa']"></i>
          </div>
        </div>
        <!-- 下拉框 -->
        <div class="category-container" v-show="isShow">
          <div class="category-left" ref="left">
            <ul>
              <li
              :class="{current:currentIndex== index}"
                @click="selectCategory($event,cate)"
                v-for="(cate,index) in category"
                :key="index"
              >
                <span>{{cate.name}}</span>
                <section>
                  <span class="category-count">{{cate.count}}</span>
                  <span class="icon">></span>
                </section>
              </li>
            </ul>
          </div>
          <div class="category-right">
            <section class="category-right-container" ref="menuScroll">
              <ul>
                <li 
                  v-for="(subCate,id) in subCategories"
                  @click="getFood(subCate.id)"
                  :key="id">
                  <span>{{subCate.name}}</span>
                  <span>{{subCate.count}}</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div class="sort-item">
        <div class="sort-item-container" @click="start2()">
          <div class="sort-item-border">
            <span :class="[color1?'changeColor':'color']">排序</span>
            <i class="iconfont icon-xia"></i>
          </div>
        </div>
        <div class="category-container2" v-show="false">
          <ul>
            <li>
              <span><i class="iconfont icon-paixu2"></i></span>
              <p>
                <span>智能排序</span>
                <span>></span>
              </p>
            </li>
            <li>
              <span><i class="iconfont icon-msnui-pos"></i></span>
              <p>
                <span>距离最近</span>
                <span>></span>
              </p>
            </li>
            <li>
              <span><i class="iconfont icon-msnui-pos"></i></span>
              <p>
                <span>智能排序</span>
                <span>></span>
              </p>
            </li>
            <li>
              <span><i class="iconfont icon-msnui-pos"></i></span>
              <p>
                <span>智能排序</span>
                <span>></span>
              </p>
            </li>
            <li>
              <span><i class="iconfont icon-msnui-pos"></i></span>
              <p>
                <span>智能排序</span>
                <span>></span>
              </p>
            </li>
            <li>
              <span><i class="iconfont icon-msnui-pos"></i></span>
              <p>
                <span>智能排序</span>
                <span>></span>
              </p>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="sort-item">
        <div class="sort-item-container">
          <div class="sort-item-border">
            <span>川湘菜</span>
            <i class="iconfont icon-xia"></i>
          </div>
        </div>
        <div class="category-container"></div>
      </div>
    </section>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      category: {},
      subCategories: [],
      leftHeight: "",
      rotate:false,
      isShow:false,
      isShow2:false,
      isShow3:false,
      color:false,
      color1:false,
      color2:false,
      currentIndex:0,
      id:0
    };
  },
  props: {
    title: String
  },
  created() {
    // 获取菜单分类数据
    this.$axios
        .get("https://elm.cangdu.org/shopping/v2/restaurant/category")
        .then(res => {
          this.category = res.data;
          // console.log(this.category);
          this.initScroll();
        });
  },
  methods: {
    selectCategory($event,cate) {
      this.subCategories = cate.sub_categories;
    },
    initScroll() {
      this.height = new BScroll(this.$refs.menuScroll,{
        click:true
      }); //实例化    用this.$refs.menuScroll 来找到要滚动的元素
    },
    start(){
          this.rotate=!this.rotate;
          console.log(this.rotate);
          this.isShow = !this.isShow;
          this.color = !this.color;
      },
    start2(){
          this.rotate=!this.rotate;
          this.isShow = false;
          this.isShow2 = !this.isShow2;
          this.color = false;
          this.color1 =  !this.color1;
      },
    getFood(id){
          this.id = id;
          console.log(id);
          this.isShow = false;
          this.$emit('sendId',this.id);

    }
  }
};
</script>

<style lang="css" scoped>
.current{
  background: #fff;
}
li {
  list-style: none;
}
.iconfont {
  font-size: 0.8rem;
}
.screen {
  z-index: 30;
  top: 1.9rem;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  position: fixed;
  display: flex;
  position: relative;
  flex-direction: column;
  background: #fff;
}
.sort-container {
  display: flex;
  justify-content: space-around;
}
.sort-container .sort-item {
  font-size: 0.55rem;
  color: #444;
  width: 33.3%;
  height: 1.6rem;
  text-align: center;
  line-height: 1rem;
}
.sort-item-container {
  box-sizing: border-box;
  padding-top: 0.3rem;
}
.sort-item-border {
  height: 1rem;
  border-right: 0.025rem solid #e4e4e4;
}
.sort-item-border:last-of-type {
  border-right: none;
}
.category-container {
  position: absolute;
  /* top: 0.1rem; */
  display: flex;
  width: 100%;
  background: #ffffff;
}
.category-left,
.category-right {
  flex: 1;
  height: 16rem;
  overflow: hidden;
}
.category-left li {
  background: #f3f2f2;
}
.category-container li {
  height: 1.8rem;
  line-height: 1.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.45rem;
  box-sizing: border-box;
  overflow: hidden;
}
.category-count {
  background-color: #ccc;
  font-size: 0.4rem;
  color: #fff;
  padding: 0 0.1rem;
  border: 0.025rem solid #ccc;
  border-radius: 0.8rem;
  margin-right: 0.25rem;
}
.icon {
  color: #ccc;
  font-size: 0.65rem;
}
.aa {
  transition: all 2s;
}
.go {
  transform: rotateZ(180deg);
  transition: all 2s;
}
.changeColor{
  color:#3190E8;
}
.color{
  color: #444;
}
.category-container2{
  width: 100%;
 position: absolute;
 top:1.2rem;
 left: 0;
 background: #fff;
}
.category-container2 li{
  height: 2.5rem;
  line-height: 2.5rem;
  display: flex;

   
}
.category-container2 li > span{
  margin:0 1rem 0 2rem;
}
.category-container2 li p{
  display: flex;
  justify-content: space-between;
  width: 90%;
} 

</style>
<template>
  <div >
    <div class="footer">
      <li v-for="(item,index) in nav" :key="index" @click.prevent="selectNav(item.title)">
        
        <img :src="isSelect === item.title ? item.url_one : item.url" alt="item.title">
        <span :class="isSelect===item.title?'active':''">{{item.title}}</span>
       
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      isSelect:'外卖',
      nav:[
        {title:'外卖',url:require('../assets/nav/takeout.png'),url_one:require('../assets/nav/takeout1.png')},
        {title:'搜索',url:require('../assets/nav/select.png'),url_one:require('../assets/nav/select1.png')},
        {title:'订单',url:require('../assets/nav/order.png'),url_one:require('../assets/nav/order1.png')},
        {title:'我的',url:require('../assets/nav/min.png'),url_one:require('../assets/nav/min1.png')},
      ]
    }
  },
  mounted(){
    this.isSelect = this.$route.name
  },
  // updated(){
  //     this.isSelect = this.$route.name
  // },
  methods:{
    selectNav(title){
      switch(title){
        case '外卖': this.$router.push('/takeout')
            break
        case '搜索': this.$router.push('/search')
            break
        case '订单': this.$router.push('/myorder')
            break
        case '我的': this.$router.push('/profile')
            break

      }
      this.isSelect = this.$route.name
    }
  }
};
</script>

<style scoped>
.router-link-active i{
    background: blue;
  }
.footer {
  background: #ffffff;
  position: fixed;
  z-index: 100;
  left: 0;
  right:0;
  bottom: 0;
  width: 100%;
  height: 1.95rem;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);

  /* border: 1px solid red; */
  /* margin: 50px 0; */
}
.footer li {
  flex: 1;
  float: left;
  list-style: none;
  text-align: center;
  padding: 0 0 0.15rem;
  box-sizing: border-box;
}
img {
  width: 0.7rem;
  height: 0.7rem;
}
.footer li span {
  color: #333333;
  display: block;
  font-size: 0.45rem;
}
.iconfont{
  width: .8rem;
  height: .8rem;
  margin-top: .3rem;
  /* color: #ccc; */
}
</style>
<template>
  <div class="takeOut">
    <HeaderNav :name="name" />
    <FoodCtgList class="foodLists" />
    <ShopList />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import FoodCtgList from "../components/common/FoodCtgList";
import ShopList from "../components/common/ShopList";

export default {
  name: "TakeOut",
  data() {
     return {
         name:""
     }
  },
  components: {
    FoodCtgList,
    ShopList,
    HeaderNav,
    Footer
  },
 created() {
    this.geohash = this.$route.query.geohash;
    console.log("~~~~~~~" + this.geohash);
    this.$axios.get('https://elm.cangdu.org/v2/pois/'+this.geohash)
    .then(res=>{
        console.log(res.data)
        this.name = res.data.name;
        console.log(this.name)

    })
  },
  methods: {}
};
</script>

<style  scoped>
.takeOut {
  width: 100%；;
}
.foodLists {
  margin-top: 2.1rem;
}
</style>
<template>
  <div>
    <FoodHeader :title="title" />
    <Screen :title="title" class="screen" @sendId ="getId"/>
    <div >
      <ShopBody :newId="id" class="shopBody" />
    </div>
    <!-- <div class="cover"></div> -->
  </div>
</template>

<script>
import FoodHeader from "../components/common/FoodHeader";
import ShopBody from "../components/common/ShopBody";
import Screen from "../components/common/Screen";
import ShopCategory from "../components/common/ShopCategory";

export default {
  data() {
    return {
      title: "",
      id:0
    };
  },
  components: {
    FoodHeader,
    ShopBody,
    Screen,
    ShopCategory
  },
  created() {
    this.title = this.$route.query.title;
    // console.log(this.title);
  },
  methods:{
      getId(id){
     this.id = id;
    //  console.log("id"+this.id);
  }
  }
};
</script>

<style scoped>
.screen{
    margin-bottom: 0.5rem;
}
.shopBody {
    position: absolute;
    top: 4rem;
}
.cover{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4)
}
</style>
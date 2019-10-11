<template>
  <div class="shop_list">
    <ShopHeader/>
    <ShopBody/>
    
  </div>
</template>

<script>
import ShopHeader from './ShopHeader'
import ShopBody from './ShopBody'
export default {
  name: "ShopList",
  components:{
    ShopBody,ShopHeader
  }
  
};
</script>

<style scoped>

.shop_list {
  width: 100%;
}
.shop_list {
  margin-top: 0.4rem;
  border-top: 0.45rem solid #e4e4e4;
  background-color: #fff;
}

</style>
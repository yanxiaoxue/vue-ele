<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>
<script>
import Footer from "../src/components/Footer";
// import TakeOut from "./view/TakeOut";
export default {
  name: "App",
  components: {
    Footer,
    // TakeOut
  }
};
</script>
<style scope>
#app {
  width: 100%;
}
</style>

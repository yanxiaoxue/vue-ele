import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from './utils/https'
// require ('swiper/dist/css/swiper.css')
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


// 全局axios
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

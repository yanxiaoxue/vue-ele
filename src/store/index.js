import Vue from 'vue'
import Vuex from 'vuex'
import food from './modules/food'
import shop from './modules/shop'
import position from './modules/position'



Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        food,shop,position
    }
})

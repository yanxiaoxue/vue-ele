const state={
    shop:{}  //设置初始值
};
const getters ={
    shop:state=>state.shop  //返回目前的food
};
const mutations ={
    setShop:(state,shop)=>state.shop = shop //设置新的值
};
const actions = { //使用解构{commit}
    setShopAsync:({commit},shop)=>commit("setShop",shop)
};             //commit("setFood",food) 用于提交mutations方法 ，传递食物

export default{
    state,getters,mutations,actions
}
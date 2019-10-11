const state={
    food:{}  //设置初始值
};
const getters ={
    food:state=>state.food  //返回目前的food
};
const mutations ={
    setFood:(state,food)=>state.food = food //设置新的值
};
const actions = { //使用解构{commit}
    setFoodAsync:({commit},food)=>commit("setFood",food)
};             //commit("setFood",food) 用于提交mutations方法 ，传递食物

export default{
    state,getters,mutations,actions
}
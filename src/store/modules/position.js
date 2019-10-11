const state={
    recruitScrollY:0  //设置初始值
};
const getters ={
    recruitScrollY:state => state.recruitScrollY
};
const mutations ={
    changeRecruitScrollY(state,recruitScrollY) { 
        state.recruitScrollY = recruitScrollY
      }
  
};
const actions = { //使用解构{commit}
    
};             

export default{
    state,getters,mutations,actions
}
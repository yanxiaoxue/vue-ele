<template>
  <div class="cartControl">
    <span>
        <transition name="roll">
           <i class="iconfont icon-jian1 decrease" @click.stop="decrease" v-show="listItem.count"></i>
        </transition>
        <div class="count" v-show="listItem.count">{{listItem.count}}</div>  
        <i class="iconfont icon-jia add" @click.stop.prevent="add"></i>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return {
    }
  },
  props: {
    listItem: Object
  },
  methods:{
      chooseList(){
        //   子组件里用$emit向父组件触发一个事件，父组件监听这个事件
          this.$emit('hiddenShow')
      },
      decrease(){
          if(this.listItem.count == 0){
              return
          }
          this.listItem.count--;
      },
      add(e){
          if(!this.listItem.count){
            //   Vue.set 全局注册属性
              Vue.set(this.listItem,"count",1)
          }else{
              this.listItem.count++
          }

      }
  }
};
</script>

<style  scoped>
.cartControl{
}
.iconfont{
    font-size: 0.65rem;
    color:#3190e8; 
}
.show_chooseList {
  display: block;
  font-size: 0.55rem;
  color: #ffffff;
  padding: 0.15rem 0.25rem;
  background: #3190e8;
  border-radius: 0.2rem;
}
.count {
    display: inline-block;
    font-size: 0.65rem;
    margin: 0 0.15rem;
}
.add,.decrease {
  display: inline-block;
 
}
.roll-enter-active, .roll-leave-active {
    transition: .5s all linear;
}
.roll-enter, .roll-leave-to {
    transform: translateX(0.5rem) rotate(180deg) ;
    transition: .3s all linear;
}
</style>
<template>
    <div >
       <header class="header-top">
          <router-link to="/search"><i class="iconfont icon-sousuo1"></i></router-link>
          <router-link to="/" class="header-school">{{name}}</router-link>
          <span class="header-login-register">
              <router-link to="">登陆</router-link>
              <span>|</span>
              <router-link to="/register">注册</router-link>
          </span>
       </header>
    </div>
</template>

<script>
    export default {
        name:"Header",
         props:{
             name:String
         },
        
    }
</script>

<style scoped>
a{
    text-decoration: none;
    color: #ffffff;
}
.header-top{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
    line-height: 1.95rem;
    padding: 0 0.45rem;
    box-sizing: border-box;
    text-align: center;
}
.iconfont{
    font-size: 0.75rem;
    position: absolute;
    left: 0.2rem;
}
.header-school{
    font-size: .65rem;
    text-align: center;

}
.header-login-register{
    position: absolute;
    right: 0.2rem;
    color: #fff;
    font-size: 0.55rem;

}
</style>
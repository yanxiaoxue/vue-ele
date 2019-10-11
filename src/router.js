import Vue from 'vue'
import Router from 'vue-router'
import TakeOut from './view/TakeOut'
import Header from './components/Header'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./components/Local')
    },
    {
      path: '/register',
      name: 'register',
      //懒加载
      component: () => import('./view/Register.vue')
    },
    {
      path: '/repassword',
      name: 'repassword',
      //懒加载
      component: () => import('./view/Repassword.vue')
    },
    // {
    //   path: '/reOk',
    //   name: 'reOk',
    //   //懒加载
    //   component: () => import('./views/reOk.vue')
    // },
    // {
    //   path: '/LoginOk',
    //   name: 'LoginOk',
    //   //懒加载
    //   component: () => import('./views/loginOk.vue')
    // },
    // {
    //   path: '/next',
    //   name: 'next',
    //   //懒加载
    //   component: () => import('./views/next.vue')
    // },
    {
      path: '/takeout',
      name:'外卖',
      component: TakeOut
    },
    {
      path: '/search',
      name: '搜索',
      //搜索
      component: () => import('./view/Search.vue')
    },
    {
      path: '/order',
      name: '订单',
      //订单查询
      component: () => import('./view/Order.vue')
    },
    {
      path: '/Profile',
      name: '我的',
      //我的
      component: () => import('./view/Profile.vue')
    },
    {
      path: '/foodList',
      name: 'foodList',
      //食品展示
      component: () => import('./view/FoodList.vue')
    },
    {
      path: '/foodDisplay',
      name: 'foodDisplay',
      //点击商店 食品菜单展示页
      component: () => import('./view/FoodDisplay.vue')
    },
    {
      path: '/foodInfo',
      name: 'foodInfo',
      //食品详情页
      component: () => import('./view/FoodInfo.vue')
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      //确认订单
      component: () => import('./view/Order.vue')
    },
    {
      path: '/chooseadress',
      name: 'chooseadress',
      //懒加载
      component: () => import('./view/ChooseAdress.vue')
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      //懒加载
      component: () => import('./view/AddAddress.vue')
    },
    {
      path: '/searchaddress',
      name: 'searchaddress',
      //懒加载
      component: () => import('./view/SearchAddress.vue')
    },
    {
      path: '/chooseadress',
      name: 'chooseadress',
      //懒加载
      component: () => import('./view/ChooseAdress.vue')
    },
    {
      path: '/serve',
      name: 'serve',
      //懒加载
      component: () => import('./view/Serve.vue')
    },
    {
      path: '/supervipc',
      name: 'supervipc',
      //懒加载
      component: () => import('./components/servecenter/supervipc.vue')
    },
    {
      path: '/myorder',
      name: 'myorder',
      //懒加载
      component: () => import('./components/my/myorder.vue')
    },
    {
      path: '/signContent',
      name: 'signContent',
      //懒加载
      component: () => import('./components/servecenter/signContent.vue')
    },
    {
      path: '/jifen',
      name: 'jifen',
      //懒加载
      component: () => import('./components/my/jifen.vue')
    },
    {
      path: '/beizhu',
      name: 'beizhu',
      //懒加载
      component: () => import('./components/order/beizhu.vue')
    },
    {
      path: '/rankContent',
      name: 'rankContent',
      //懒加载
      component: () => import('./components/servecenter/rankContent.vue')
    },
    {
      path: '/pointtextContent',
      name: 'pointtextContent',
      //懒加载
      component: () => import('./components/servecenter/pointtextContent.vue')
    },
    {
      path: '/phototutorialContent',
      name: 'phototutorialContent',
      //懒加载
      component: () => import('./components/servecenter/phototutorialContent.vue')
    },
    
    {
      path: '/*',
      redirect: "/"
    },

  ]
})

export default route;

import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"

import store from './store/index'

Vue.config.productionTip = false



//注册过滤器
import "./filters/index";


//路由全局钩子 中间验证
// router.beforeEach((to, from, next) => {
//路由过滤,根据需要决定是否需要校验登录

// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

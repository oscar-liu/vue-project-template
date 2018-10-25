import Vue from 'vue'
import Router from 'vue-router'

//导入路由模块文件

import common from './common'   //公共路由
import home from './home'       //首页路由模块
import about from './about'     //模块路由
import form from './form'       //表单测试

Vue.use(Router)

const routes = [
	...common.routers,
	...home.routers,
    ...about.routers,
    ...form.routers,
];

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})


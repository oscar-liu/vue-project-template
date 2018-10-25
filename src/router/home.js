/**
 * 入口路由
 */

const homePage = () => import(/* webpackChunkName: "about" */ '@/views/home/index.vue');

const routers = [
    {
      path: "/",
      name:'home',
      component: homePage
    },
]

export default {
    routers
}

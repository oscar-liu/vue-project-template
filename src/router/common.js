/**
 * 公用路由
 */

const errorPage = () => import(/* webpackChunkName: "about" */ '@/views/common/error.vue');

const routers = [
    {
      path : '*', 
      name: "error 404",
      component : errorPage
    }
]

export default {
    routers
}

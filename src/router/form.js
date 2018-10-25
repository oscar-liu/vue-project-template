/**
 * 入口路由
 */

const formPage = () => import('@/views/form/demo.vue');

const routers = [
    {
      path: "/form",
      name:'form',
      component: formPage
    },
]

export default {
    routers
}

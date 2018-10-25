/**
 * About Test
 */

const aboutPage = () => import(/* webpackChunkName: "about" */ '@/views/about/index.vue');

const routers = [
    {
      path: "/about",
      name:'about',
      component: aboutPage
    },
]

export default {
    routers
}

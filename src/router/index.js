import Vue from 'vue'
import VueRouter from 'vue-router'
import VuetifyDatatable from '../views/VuetifyDatatable.vue'
import ChartWatch from '../ChartWatch.vue'
import SSmartproject from '../views/SSmartproject.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: VuetifyDatatable
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: "/person",
    name: "person-watch",
    component: ChartWatch,
    params: true
  },
  {
    path: "/smart",
    name: "smartproject",
    component: SSmartproject,
    params: true
  }
]

const router = new VueRouter({
  routes
})

export default router

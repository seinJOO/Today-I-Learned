import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingAttr from '../views/DataBindingAttr.vue'
import DataBindingList from '../views/DataBindingList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingAttr',
    name: 'DataBindingAttr',
    component: DataBindingAttr
  },
  {
    path: '/databindingList',
    name: 'DataBindingList',
    component: DataBindingList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

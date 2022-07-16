import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding/DataBinding.vue'
import DataBindingAttr from '../views/DataBinding/DataBindingAttr.vue'
import DataBindingFor from '../views/DataBinding/DataBindingFor.vue'
import NestedComponent from '../views/Compo/NestedComponent.vue'

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
    path: '/databindingFor',
    name: 'DataBindingFor',
    component: DataBindingFor
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

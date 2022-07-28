import Vue from 'vue';
import VueRouter from 'vue-router';

// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
  // routes에 의해 컨트롤되는 page component들 - views에 있음
  routes: [
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
  ],
});

import Vue from 'vue';
import VueRouter from 'vue-router';

// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
  // routes에 의해 컨트롤되는 page component들 - views에 있음
  routes: [
    {
      path: '/',
      redirect: '/login', // 서버에 접속하면 가장 먼저 띄울 페이지로 redirect
    },
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

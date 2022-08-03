import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';

// 전역 필터 설정 {{ postItem.createdAt | formateDate }}
import { formatDate } from '@/utils/filters';
Vue.filter('formatDate', formatDate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  getters: {
    // getters : state값이 변경됐을 때 특정 상태를 계산 - computed와 비슷
    isLogin(state) {
      return state.username !== ''; // =*3 : 타입까지 비교
    },
  },
  mutations: {
    // state를 바꾸는 mutations - 새로운 username을 받아서 state의 값을 변경함
    setUsername(state, username) {
      state.username = username;
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    // state를 바꾸는 mutations - 새로운 username을 받아서 state의 값을 변경함
    setUsername(state, username) {
      state.username = username;
    },
  },
});

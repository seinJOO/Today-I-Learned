import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 쿠키값이 있으면 꺼내오고, 없으면 빈 문자열
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // context값이 오고, context에서는 commit이 제공됨
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      // store 내부에 있기 때문에 this.$store.commit에서 코드 변경
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      // 쿠키에 유저정보 저장하기
      saveAuthToCookie(data.token); // 쿠키에 til_auth=토큰값 저장
      saveUserToCookie(data.user.username); // 쿠키에 til_user=유저명 저장

      return data;
      // async는 반드시 promise를 리턴하긴 하지만, 추후에 사용할 수도 있는 데이터임을 명시하기 위해
      // 별도로 return을 표시해보기
    },
  },
});

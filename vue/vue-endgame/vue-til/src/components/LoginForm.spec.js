import { shallowMount } from '@vue/test-utils';
//import Vue from 'vue';
import LoginForm from './LoginForm.vue';
// 컴포넌트 테스트 + vue/test-utils를 활용해보기
// 테스트 단위를 LoginForm.vue로 grouping
describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    const wrapper = shallowMount(LoginForm); // const instance = new Vue(LoginForm).$mount();
    // wrapper.vm.username === instance.username (vm이 wrapper(shallowMount)내부의 인스턴스를 의미함)
    expect(wrapper.vm.username).toBe(''); // expect(instance.username).toBe('');
  });
});

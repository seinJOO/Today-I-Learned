// 테스트 유틸 라이브러리 로딩
import { shallowMount } from '@vue/test-utils';
// 컴포넌트 로딩
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('아이디 형식이 맞지 않으면 경고 메세지가 뜬다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'a',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    console.log(warningText.exists());
    expect(warningText.exists()).toBeTruthy();
  });
});

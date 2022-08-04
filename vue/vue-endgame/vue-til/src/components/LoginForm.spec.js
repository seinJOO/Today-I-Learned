/*
jest : 자바스크립트의 라이브러리 ! https://jestjs.io/docs/api#describename-fn
테스트코드가 필요한 이유
1. id 인풋박스에 이메일을 입력했을 때 이메일이 맞는지 확인하는 로직
2. id, pw가 맞는 경우 로그인 처리가 되고, 다음 페이지로 이동
=> console.log나 logMessage 등의 코드를 섞어가며 기능이 잘 작동하는지 확인해야 함
BUT, 테스트코드로 하면 일일이 기능을 손으로 확인하는 시간을 줄여줌
*/

import { sum } from './math.js';

// jest가 제공하는 API의 활용법

// describe(name, fn) : 연관된 테스트 케이스를 그룹화하는 API
describe('math.js', () => {
  // test(name, fn, timeout) : 하나의 테스트 케이스를 검증하는 API
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    // expect(결과값).toBe(추정값); : 결과값이 추정값이라고 예상한다~ 를 설정
    // result === 30; 과 같은 의미
    expect(result).not.toBe(20); // not으로도 판별 가능
  });
});

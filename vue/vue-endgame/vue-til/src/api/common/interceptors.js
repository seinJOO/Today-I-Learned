import store from '@/store/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent : request 전송 전에 처리할 코드
      console.log(config); // config객체 확인 - 어떻게 headers/Authorization를 실을 지 확인하기
      config.headers.Authorization = store.state.token; // config의 headers에 토큰값 저장
      return config;
    },
    function(error) {
      // Do something with request error : 에러 전처리
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data : 응답을 받기 전 처리할 코드
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error : 에러 전처리
      return Promise.reject(error);
    },
  );
  return instance;
}

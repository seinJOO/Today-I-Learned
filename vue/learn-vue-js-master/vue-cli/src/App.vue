<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str"></app-header>  
    <!-- 프롭스 속성 이름은 해당 하위 컴포넌트(app-header = AppHeader.vue)에 정의된 props 변수
          상위 컴포넌트인 App.vue에서 하위 컴포넌트에 str값을 내려줌 -->
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'  // 1. 컴포넌트 import
export default {
  data: function() {  // .vue파일에서는 data 문법 꼭 지켜야함 ! 안그러면 콘솔에 오류
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader // 2. 컴포넌트 등록
  }
}
</script>
<style>
  
</style>
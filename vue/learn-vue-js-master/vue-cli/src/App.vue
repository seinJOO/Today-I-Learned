<template>
  <div>
    <app-header></app-header> <!-- 컴포넌트 사용 -->
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'  // 1. 컴포넌트 import
export default {
  data: function() {  // .vue파일에서는 data 문법 꼭 지켜야함 ! 안그러면 콘솔에 오류
    return {
      str: 'hi'
    }
  },
  components: {
    'app-header': AppHeader // 2. 컴포넌트 등록
  }
}
</script>
<style>
  
</style>
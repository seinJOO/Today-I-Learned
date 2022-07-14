<template>
  <h1>Hello, {{ title }}!</h1>
  <div>
    <img v-bind:src="imgSrc"/><br>
    <input type="text" v-model="textValue"/>
    <button type="button" v-bind:disabled="textValue==''">Click</button> <!--textValue가 ''이 아니면 버튼 활성화-->
    <div class="container" v-bind:class="{'active':isActive, 'text-red': hasError}">Class Binding</div>
    <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding2</div>
  </div>
  <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
  <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
</template>
<script>
export default {
  data () {
    return {
      title: '105page ~ 110page',
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      textValue: '',
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-red',
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyle: 'background-color:yellow;width:100%;height:20px;',
      addStyle: 'color:red;font-weight:bold;'
    }
  }
}
</script>
<style scoped>
  .container {
    width : 100%;
    height : 25px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>

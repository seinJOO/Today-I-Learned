<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <!-- 상위 컴포넌트인 App.vue에서 전달받은 데이터(props) 표출 -->
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
 props: ['propsdata'],
 methods: {
    sendEvent: function() {
        this.$emit('renew');
    }
 }
}
</script>

<style>

</style>
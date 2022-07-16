<template>
  <h1>Hello, {{ title }}!</h1>
  <div>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
    <input type="text" v-model="valueModel"/><br>
    <input type="number" v-model.number="numberModel"/><br>
    <textarea v-model="message"></textarea><br>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select><br>
    <div>
    <label><input type="checkbox" v-model="checked">{{checked}}</label><br>
    <label><input type="checkbox" v-model="checked2" true-value="yes" false-value="no">{{checked2}}</label><br><br>
    <label><input type="checkbox" v-model="checked3" value="서울">서울</label>
    <label><input type="checkbox" v-model="checked3" value="부산">부산</label>
    <label><input type="checkbox" v-model="checked3" value="제주">제주</label>
    </div>
    <span>체크한 지역 : {{checked3}}</span><br><br>
    <div>
      <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
      <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
      <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label><br>
      <span>선택한 지역 : {{picked}}</span><br><br>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'World, ~104page',
      htmlString: '<p style="color:red;">This is a red string.</p>',
      valueModel: 'South Korea',
      numberModel: 6,
      message: '여러 줄을 입력할 수 있는 textarea 입니다.',
      city: '064',
      checked: false,
      checked2: true,
      checked3: [],
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주'
    }
  }
}
</script>

<template>
  <div class="form-wrapper">
    <form class="form">
      <p>{{ myList }}</p>
      <button class="btn" @click="changeList">Get Log</button>
      <button class="btn" @click="resetList">Refresh</button>
      <button class="btn" @click="parsingExam">Console Log</button>
      <div v-for="result in resultList" :key="result.index">
        <span>{{ result[0].desc }} =====> {{ result[1].func }} </span>
      </div>
      <div
        v-for="(setting, index) in $_.chain(payload0).get('switchPress0[0]')"
        :key="`setting-${index}`"
      >
        <p>{{ setting }}</p>
        Action : {{ setting.taskType }} =====
        {{ setting.params.hopperNum != null ? `${setting.params.hopperNum}번 호퍼 =====` : '' }}
        {{ `${setting.params.duration.min}분 ${setting.params.duration.sec}초` }}
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
Object.defineProperty(Vue.prototype, '$_', { value: _ });

export default {
  data() {
    return {
      myList: [],
      resultList: [],
      payload0: {
        switchPress0: [
          {
            '0': { taskType: 'vibHopper', params: { hopperNum: 0, duration: { min: 1, sec: 0 } } },
            '1': { taskType: 'vibHopper', params: { hopperNum: 1, duration: { min: 1, sec: 0 } } },
            '2': { taskType: 'waterClean', params: { duration: { min: 1, sec: 0 } } },
            '3': { taskType: 'blowerClean', params: { duration: { min: 1, sec: 0 } } },
          },
        ],
      },
    };
  },
  computed: {},
  methods: {
    initList() {
      this.myList = ['물', '치킨', '레몬', '포스트잇', '물', '키보드', '치킨'];
    },
    resetList() {
      this.resultList = [];
    },
    parsingExam() {},
    changeList() {
      this.resultList.push([
        { desc: '_.chunk( TargetList , 3)' },
        { func: _.chunk(this.myList, 3) }, // 리스트를 세 개씩 분할
      ]);
      this.resultList.push([
        {
          desc: '_.difference( TargetList, [물, 치킨] )', // 특정 요소와 같은 요소 모두 제거
        },
        { func: _.difference(this.myList, ['물', '치킨']) },
      ]);
      this.resultList.push([
        { desc: '_.difference( TargetList, [키보드, 포스트잇] )' },
        { func: _.difference(this.myList, ['키보드', '포스트잇']) },
      ]);
      this.resultList.push([
        // 글자들 사이를 특정 문자로 채워서 하나의 String으로 만듬
        { desc: '_.join( TargetList, "-=-" )' },
        { func: _.join(this.myList, '-=-') },
      ]);
      this.resultList.push([
        // 제거할 요소를 리스트 형태로 주지 않아도 difference와 같은 효과
        { desc: '_.without( TargetList, "-" )' },
        { func: _.without(this.myList, '물', '치킨') },
      ]);
      this.resultList.push([
        // 중복되는 요소의 경우 하나만 남기고 모두 삭제
        { desc: '_.uniq( TargetList )' },
        { func: _.uniq(this.myList) },
      ]);
    },
  },
  async created() {
    await this.initList();
  },
};
</script>

<style scoped>
button {
  margin: 0 5px;
  color: white;
}
form {
  width: 80%;
  margin: 10px auto;
}
</style>

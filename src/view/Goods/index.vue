<template>
    <div>
        <formSearch ref="form" :opts="opts.opts" @formSearch="formSearchVal" />
        <el-button @click="info">获取子组件方法</el-button>
        <div class="bg">你好</div>
    </div>
</template>
<script setup name="goods">
import formSearch from '@/components/formSearch/index.vue';
import { ref } from 'vue'
// import { formSearch } from '../../../lib/db-formsearch-plus.js';
// import '../../../lib/style.css';
let form = ref(null);
const opts = reactive({
  opts: [
    {
      label: '姓名',
      val: '',
      key: 'name',
      type: 'input',
      size: 'default',
    },
    {
      label: '日期',
      val: '',
      key: 'index',
      type: 'date',
      format: 'YYYY',
      dateType: 'year',
      placeholder: '请选择日期',
      size: 'default',
    },
    {
      label: '性别',
      key: 'max',
      type: 'select',
      selects: [
        { id: 1, name: '男' },
        { id: 2, name: '女' },
      ],
      size: 'default',
    },
    {
      label: '多选',
      key: 'maxs',
      type: 'remoteSelect',
      selects: [
        { id: 1, name: '苹果' },
        { id: 2, name: '梨子' },
        { id: 3, name: '香蕉' },
        { id: 4, name: '桃子' },
      ],
      size: 'default',
    },
    {
      label: '时间范围',
      key: 'maxs2',
      type: 'daterange',
      key: 'startTime',
      key2: 'endTime',
      format: 'YYYY-MM-DD',
      starPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      size: 'default',
    },
  ],
});

const formSearchVal = (val) => {
  //   console.log(form.value.formDataFlag())
  //   form.value.formDataFlag()
  //   form.formDataFlag('添加')
  // form.value.search()
};
const info = () => {
  //   form.value.search();
  // form.value.getForm()
  //   console.log(form.value.formData, '数据')
  //   form.value?.formDataFlag()
};
</script>
<style lang="scss" scoped>
.bg {
    color: $bg;
}
</style>

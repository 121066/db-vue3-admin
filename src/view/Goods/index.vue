<template>
    <div>
        <formSearch ref="form" :opts="opts.opts" @formSearch="formSearchVal" />
        <el-button @click="info">获取子组件方法</el-button>
    </div>
</template>
<script setup>
// import formSearch from '@/components/formSearch/index.vue';
import { formSearch } from '../../../lib/db-formsearch-plus.js';
import '../../../lib/style.css';
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
const form = ref();
const formSearchVal = (val) => {};
const info = () => {
    form.value.search();
};
</script>

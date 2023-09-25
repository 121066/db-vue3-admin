<template>
    <div>
        <div>
            <el-button
                v-for="item in data.tabList"
                :key="item.id"
                type="primary"
                @click="data.tabIndex = item.id"
                >{{ item.name }}</el-button
            >
        </div>
        <template v-if="data.tabIndex === 1">
            <div>
                <h4>禁用时间大于今天</h4>
                <div>
                    <el-date-picker
                        v-model="data.toDay"
                        type="date"
                        placeholder="Pick one or more dates"
                        :disabled-date="optionsToday"
                    />
                </div>
            </div>
            <div>
                <h4>禁用时间小于今天</h4>
                <div>
                    <el-date-picker
                        v-model="data.yeserDay"
                        type="date"
                        placeholder="Pick one or more dates"
                        :disabled-date="optionsday"
                    />
                </div>
            </div>
        </template>
        <div v-if="data.tabIndex === 2">
            <h4>禁用时间一周</h4>
            <div>
                <el-date-picker
                    v-model="data.toDay"
                    type="date"
                    placeholder="Pick one or more dates"
                    :disabled-date="optionsToday"
                />
            </div>
            <h4>开始时间禁用一周</h4>
            <div>
                <el-date-picker
                    v-model="data.yeserDays"
                    type="daterange"
                    start-placeholder="Start Date"
                    end-placeholder="End Date"
                    :disabled-date="optionsyeserDays"
                />
            </div>
        </div>
        <div v-if="data.tabIndex === 3">
            <h4>禁用时间一个月</h4>
            <div>
                <el-date-picker
                    v-model="data.toDay"
                    type="date"
                    placeholder="Pick one or more dates"
                    :disabled-date="optionsMonth"
                />
            </div>
        </div>
        <h1>count{{ count }}</h1>
        <el-button type="primary" @click="addCount">添加</el-button>
        <el-button type="primary" @click="reduceCount">减少</el-button>
        <el-input v-model.number="intNum"></el-input>
    </div>
</template>
<script setup>
import { useInitCount } from '@/useState/index.js';
import { ref } from 'vue';
const intNum = ref(22)
const data = reactive({
  toDay: '',
  optionsToday: {},
  yeserDay: '',
  tabList: [
    { id: 1, name: '今天' },
    { id: 2, name: '一周' },
    { id: 3, name: '一个月' },
  ],
  tabIndex: 1,
  yeserDays: [],
});
const optionsToday = (time) => {
  return time.getTime() < +new Date().getTime() - 86400000;
};
const optionsday = (time) => {
  return time.getTime() > +new Date().getTime() - 86400000
};
const optionsMonth = (time) => {
  return time.getTime() < +new Date().getTime() + 86400000 * 30
};
const reduceCount = () => {
  intNum.value += 2
}
const addCount = () => {
  intNum.value += 2
  console.log(intNum)
}
const optionsyeserDays = (time) => { };
const { count, addFn } = useInitCount(intNum)
addFn(intNum.value)
console.log(count, 'count', intNum)
</script>
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
        </div>
        <div v-if="data.tabIndex === 3">
            <h4>禁用时间一个月</h4>
            <div>
                <el-date-picker
                    v-model="data.toDay"
                    type="date"
                    placeholder="Pick one or more dates"
                    :disabled-date="optionsToday"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
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
});
const optionsToday = (time) => {
    return time.getTime() < +new Date().getTime() - 86400000;
};
const optionsday = (time) => {
    return time.getTime() > +new Date().getTime() - 86400000;
};
</script>
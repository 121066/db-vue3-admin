<template>
    <div>
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
    </div>
</template>
<script setup>
const data = reactive({
    toDay: '',
    optionsToday: {},
    yeserDay: '',
});
const optionsToday = (time) => {
    return time.getTime() < +new Date().getTime() - 86400000;
};
const optionsday = (time) => {
    return time.getTime() > +new Date().getTime() - 86400000;
};
</script>
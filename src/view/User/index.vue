<template>
    <div class="user">
        <el-input
            placeholder="请输入内容"
            v-dbyxs
            v-model="state.val"
        ></el-input>

        <div v-dbyxs>测试自定义指令背景颜色</div>
        <div v-color="{ color: 'red' }">测试自定义文字颜色</div>
        <div v-color="{ color: 'orange' }">测试自定义文字颜色</div>
        <div v-value="{ val: state.val }">测试自定义文字变化</div>
        <CardList ref="card"></CardList>
        <el-button @click="addItem">点击调用子组件方法</el-button>
        <el-table :data="state.dataList">
            <el-table-column
                prop="name"
                show-overflow-tooltip
                label="衣服名称"
            ></el-table-column>
            <el-table-column>
                <template #default="scope">
                    <img :src="scope.row.url" alt="" />
                </template>
            </el-table-column>
        </el-table>
        <div>123</div>
    </div>
</template>
<script setup>
import { getGoodsList } from '@/api/goods';
import { onMounted, provide, reactive } from 'vue';
import CardList from './components/card.vue';
const state = reactive({
    dataList: [],
    val: '',
    password: '',
});
const userName = reactive({
    name: '你好',
});
provide('userName', {
    userName,
});
const card = ref('card');
const search = async () => {
    let { message } = await getGoodsList();
    state.dataList = message;
    console.log(state.dataList);
};
const addItem = () => {
    console.log(card.value.init('我的天啊'), '子组件');
    let user = card.value.user.userName.name;
    console.log(user, 'user');
};
onMounted(() => {
    search();
});
</script>
<style lang="scss">
.user {
    height: 110vh;
}
</style>
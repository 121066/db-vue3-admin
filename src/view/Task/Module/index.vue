<template>
    <div class="module">
        <div class="module_item">
            <span class="module_item_label">父组件</span>
            <el-input
                class="module_item_int"
                placeholder="输入组件传值"
                v-model="int.keyword"
            ></el-input>
        </div>
        <div class="module_item">
            <span class="module_item_label">我是子组件</span>
            <FormItem v-model="int" class="module_item_int" />
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import FormItem from './components/formItem.vue';
const int = ref({
  keyword: ''
})
const modelValue = (e) => {
  console.log(e, '变化的值')
}
watch(int, (value) => {
  console.log(value)
})
</script>
<style lang="scss" scoped>
.module {
    display: flex;
    flex-direction: column;
    .module_item {
        width: 600px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 16px 10px 0 0;
        .module_item_label {
            width: 100px;
        }
        .module_item_int {
            width: 400px;
        }
    }
}
</style>
<template>
    <div>
        <modelDialog ref="modelDialogs" />
        <el-button type="primary" class="btn" @click="addModel" v-copy="'你好'"
            >ref点击弹出</el-button
        >
        <p>子组件</p>
        <vmodelDialog
            v-model:modelValue="flag"
            v-model:str="vmodelDialogs.str"
        />
        <!--   @update:modelValue="(newValue) => (flag = newValue)" -->
        <el-button type="primary" class="btn" @click="addVmodel"
            >点击v-model弹出</el-button
        >
        <p>父组件输入</p>
        <el-input
            v-model="vmodelDialogs.str"
            placeholder="父组件输入"
        ></el-input>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import modelDialog from './components/modelDialog.vue';
import vmodelDialog from './components/vmodelDialog.vue';
const modelDialogs = ref(null)
const copyText = ref('a copy directives')
const flag = ref(false)
const vmodelDialogs = reactive({
  flag: false,
  str: '修改'
})
const addModel = () => {

  modelDialogs.value.centerDialogVisible = true
  modelDialogs.value.addRef('ref点击弹出')

}
const addVmodel = () => {
  flag.value = !flag.value
  console.log(vmodelDialogs)
}
</script>
<style lang="scss" scoped>
.btn {
    margin: 10px 0;
}
</style>
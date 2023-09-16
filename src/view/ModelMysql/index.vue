<template>
    <div>
        <modelDialog ref="modelDialogs" />
        <vmodelDialog
            :modelValue="flag"
            @update:modelValue="(newValue) => (flag = newValue)"
        />
        <el-button type="primary" @click="addModel">ref点击弹出</el-button>
        <el-button type="primary" @click="addVmodel">点击v-model弹出</el-button>
        <!-- <el-button type="primary" @click="addModel">点击弹出</el-button> -->
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import modelDialog from './components/modelDialog.vue';
import vmodelDialog from './components/vmodelDialog.vue';
const modelDialogs = ref(null)
const flag = ref(false)
const vmodelDialogs = reactive({
  flag: false,
  str: '修改'
})
// const formSearch = reactive({
//   name: '',
//   status: '',
//   date: [],
//   progress: ''
// })
const addModel = () => {

  modelDialogs.value.centerDialogVisible = true

}
const addVmodel = () => {
  // vmodelDialogs.flag = !vmodelDialogs.flag
  flag.value = !flag.value
  console.log(vmodelDialogs)
}
</script>
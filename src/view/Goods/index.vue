<template>
  <div>goods页面
     <el-input v-model="int.val" placeholder="用户输入" />
    <Editor v-model="int.val"/>
   
  </div>
</template>
<script setup>
import Editor from '@/components/editor/index.vue'
const int=reactive({
  val:'测试'
})
</script>
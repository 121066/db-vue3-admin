<template>
<div>
 <el-input v-model="int.val" placeholder="用户输入" />
   <Editor v-model="int.val"/>
</div>
</template>
<script setup>
import Editor from '@/components/editor/index.vue'
const int=reactive({
  val:'测试'
})
//初始化富文本
// const initEditor=()=>{
//     let edi=document.getElementById('edi')
// const editor=reactive(new E(edi))
// editor.config.height="800"
// editor.config.width="1000"
// const menuKey=['alertMenuKey']
// editor.menus.extend(menuKey)
// editor.config.menus=editor.config.menus.concat(menuKey)
// editor.create()
// }
// onMounted(()=>{
// initEditor()
// })
</script>
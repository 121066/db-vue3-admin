<template>
<div>富文本

  <div  id="edi"></div>
</div>
</template>
<script setup>
import E from 'wangeditor'
//初始化富文本
const initEditor=()=>{
    let edi=document.getElementById('edi')
const editor=reactive(new E(edi))
editor.config.height="800"
editor.config.width="1000"
const menuKey=['alertMenuKey']
editor.menus.extend(menuKey)
editor.config.menus=editor.config.menus.concat(menuKey)
editor.create()
}
onMounted(()=>{
initEditor()
})
</script>
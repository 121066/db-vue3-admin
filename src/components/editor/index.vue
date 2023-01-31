<template >
<div>
  <div id="editor">
    
  </div>
  <!-- <Editor style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="'default'"
        @onCreated="handleCreated"></Editor> -->
</div>
</template>
<script setup>
import E from 'wangeditor'
// import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// const valueHtml = ref('<p>hello</p>')
//  const editorConfig = { placeholder: '请输入内容...' }
//   const handleCreated = (editor) => {
//       editorRef.value = editor // 记录 editor 实例，重要！
//     }
const props=defineProps({
  modelValue:{
    type:String,
    default:''
  }
})
const emit=defineEmits(['update:modelValue'])
let hasChangeFlag=ref(false)
let createdFlag=ref(false)
let editor=reactive()
const val=computed(()=>{
  return props.modelValue
})
watch(()=>props.modelValue,(newValue,oldVale)=>{
 if(hasChangeFlag&&createdFlag){
   editor.txt.html(newValue)
 }
  
})
onMounted(()=>{
 let edi=document.getElementById('editor')
 editor=new E(edi)
editor.config.height="800"
editor.config.width="1000"
const menuKey=['alertMenuKey']
editor.menus.extend(menuKey)
editor.config.menus=editor.config.menus.concat(menuKey)
// hasChangeFlag=true
console.log(editor.config)
editor.config.onchange=function (html) {
  console.log(html,'???')
  emit('update:modelValue',html)
  createdFlag=true
}
editor.create()
if(props.modelValue){
  editor.txt.html(props.modelValue)
}
console.log(createdFlag,'文本',props.modelValue)
})
onBeforeUnmount(()=>{
  if(editor==null)return
  editor.destroy()
})
</script>
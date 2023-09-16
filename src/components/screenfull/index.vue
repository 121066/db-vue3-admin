<template>
    <span @click="onclickFull">全屏</span>
</template>
<script setup>
import screenfull from 'screenfull';
import { onMounted } from 'vue';
const init = () => {
  if (screenfull.enabled) {
    screenfull.on('change', change)
  }
}
const isFullscreen = ref(false)
const onclickFull = () => {
  if (!screenfull.enabled) {
    console.log('全屏')
    return false
  }
  screenfull.toggle()
}
const change = () => {
  isFullscreen = screenfull.isFullscreen
}
onMounted(() => {
  init()
})
</script>
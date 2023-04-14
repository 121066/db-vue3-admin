<template>
  <i v-if="isShowIconSvg">
    <component :is="iconName" class="icon_size"></component>
  </i>
  <i v-else :class="iconName" class="icon_size" :style="setIconSvgStyle"></i>
</template>
<script setup>
import { computed } from "vue"

const props = defineProps({
  iconName: {
    type: String
  },
  size: {
    type: Number,
    default: () => 10,
  },
  // svg 颜色
  color: {
    type: String,
  },
})
//获取图标名称
const iconName = computed(() => {
  return props.iconName
})
//获取是否是plus自带图标
const isShowIconSvg = computed(() => {
  return props?.iconName?.startsWith('ele-')
})
// 设置图标样式
const setIconSvgStyle = computed(() => {
  return `font-size: ${props.size}px;color: ${props.color};`;
});
</script>
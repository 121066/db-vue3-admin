<template>
  <div>
   <template v-for="(item) in parents">
    <el-sub-menu :index="item.path" v-if="item.children&&item.children.length>0" :key="item.path">
      <template #title>
      <SvgIcon :iconName="item.meta.icon" />
       <span>{{item.meta.title||'点击'}}</span>
      </template>
      <sub-item :chil="item.children"></sub-item>
    </el-sub-menu>
    <template v-else>
      <el-menu-item :index="item.path" :key="item.path">
        <template #title>
            <SvgIcon :iconName="item.meta.icon"/>
         <span>{{item.meta.title}}</span>
        </template>
      </el-menu-item>
    </template>
   </template>
  </div>
</template>
<script setup>
import {computed } from 'vue'
const props=defineProps({
  chil:{
    type:Array,
    default:()=>[]
  }
})
//获取上级菜单数据
const parents=computed(()=>{
  return props.chil
})
</script>
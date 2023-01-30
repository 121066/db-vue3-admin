<template>
  <div class="content_main">
     <router-view></router-view>
  </div>
</template>
<script setup name='main'>
 import {useRouter,useRoute} from 'vue-router'
 
 let key=useRoute()
 console.log(key.path)
 
</script>
<style lang="scss">
 
</style>
<template>
  <div class="content_main">
   
     
        <router-view v-slot="{ Component }">
         <transition name="fade-transform" mode="out-in">
         <keep-alive :include="[]">
        	<component :is="Component" :key="key.path" class="w100" />
           </keep-alive>
             
    </transition>
      </router-view>
   
  </div>
</template>
<script setup name="mainContent">
import { useRouter, useRoute } from 'vue-router'

let key = useRoute()
// console.log(key.path)
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s ;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

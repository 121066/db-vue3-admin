<template>
    <div class="content_main">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <keep-alive :include="[]">
                    <component :is="Component" class="w100" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>
<script setup name="mainContent">
import { useRoute } from 'vue-router';

let key = useRoute()
console.log(key.path)
// :key="key.path"
</script>
<style lang="scss">
.content_main {
    height: 100%;
    width: 100%;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.28s ease-in-out;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.5s;
}

.fade-transform-enter {
    opacity: 0;
    transform: translateX(-20px);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>

<script setup>
// import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import zhCn  from 'element-plus/dist/locale/zh-cn.mjs';
const locale = ref(zhCn);
</script>

<template>
    <div>
        <el-config-provider :locale="locale">
            <router-view></router-view>
        </el-config-provider>
    </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>

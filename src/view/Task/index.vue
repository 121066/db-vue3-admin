<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script setup>
const data = reactive({
  name: '你好',
  age: 23,
});
</script>
<template>
    <div>
        任务
        <h1>{{ data.name }}</h1>
        <h1>{{ data.age }}</h1>
    </div>
</template>
<script setup>
const data = reactive({
    name: '你好',
    age: 23,
});
</script>
<template>
    <div>
        进度条
        <Progress :progress="50" :color="'red'" />
    </div>
</template>
<script setup>
import Progress from '@/components/progress/index.vue';
</script>
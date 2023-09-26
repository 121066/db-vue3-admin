<template>
    <div>
        <div>
            <ProgressItem
                v-for="item in data.list"
                :key="item.id"
                :progress="item.progress"
                :color="item.color"
            />
        </div>
    </div>
</template>
<script setup>
import ProgressItem from '@/components/progress/index.vue';
import { reactive } from 'vue';
const data = reactive({
  list: [
    { progress: 50, color: 'green', id: 1 },
    { progress: 30, color: '#00a4ff', id: 2 },
    { progress: 45, color: 'green', id: 3 },
    { progress: 41, color: 'green', id: 4 },
    { progress: 77, color: 'green', id: 5 },
    { progress: 100, color: 'green', id: 6 },
    { progress: 90, color: 'green', id: 7 },
  ],
});
</script>
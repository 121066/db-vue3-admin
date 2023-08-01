<template>
    <div>
        <div class="count">
            <span>数字</span>
            <countUp v-for="item in data.list" :key="item" :count="item" />
        </div>
    </div>
</template>
<script setup>
import countUp from '@/components/countUp/index.vue';
const data = reactive({
  list: [500, 23, 50, 440, 591, 100]
})
</script>
<style lang="scss" scoped>
.count {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>
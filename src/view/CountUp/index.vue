<template>
    <div>
        <div class="count" v-for="item in data.list" :key="item">
            <span>数字</span>
            <countUp :count="item" />
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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    span {
        font-size: 16px;
        margin: 8px 16px;
    }
}
</style>
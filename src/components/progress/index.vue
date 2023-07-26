<template>
    <div class="progress"></div>
</template>
<script setup name="progress">
const props = defineProps({
    num: {
        type: Number,
        default: 0,
    },
});
</script>
<style lang="scss" scoped>
.progress {
    width: 100%;
}
</style>
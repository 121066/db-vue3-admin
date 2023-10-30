<template>
    <div class="home">
        <div class="home_top"></div>
        <div class="home_center"></div>
        <div class="home_bot"></div>
        <div class="box" v-drag></div>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.home {
    position: relative;
}
.box {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
}
</style>

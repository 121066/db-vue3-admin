<template>
    <div class="int">
        <div class="int_top">
            <el-input placeholder="请输入" v-model="int.search"></el-input>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';

const int = reactive({
  search: ''
})
</script>
<style lang="scss" scoped>
</style>
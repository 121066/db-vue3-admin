<template>
    <div>
        <el-tag
            v-for="tag in data.tags"
            :key="tag.name"
            class="mx-1"
            closable
            type="success"
        >
            {{ tag.name }}
        </el-tag>
    </div>
</template>
<script setup>
import { reactive } from 'vue';

const data = reactive({
    tags: [{ id: 1, name: '标签', disabled: false }],
});
</script>
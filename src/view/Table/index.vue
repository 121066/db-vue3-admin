<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%; margin-bottom: 20px"
            row-key="id"
            border
            :tree-props="{ hasChildren: 'hasChildren', children: 'children' }"
        >
            <el-table-column prop="index" label="序号" width="150">
            </el-table-column>
            <el-table-column prop="date" label="Date" sortable />
            <el-table-column prop="name" label="Name" sortable />
            <el-table-column prop="address" label="Address" sortable />
        </el-table>
    </div>
</template>
<script setup>
import { indexData, tables } from '@/util/tables';
let tableData = reactive([...tables]);

onMounted(() => {
    let data = indexData(tables);
    console.log(data, '??');
});
</script>
<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%; margin-bottom: 20px"
            row-key="id"
            border
            @filter-change="filterChange"
            @cell-click="cellClick"
            :tree-props="{ hasChildren: 'hasChildren', children: 'children' }"
        >
            <el-table-column prop="index" label="序号" width="150" type="">
            </el-table-column>
            <el-table-column prop="date" label="Date" sortable />
            <el-table-column
                column-key="Name"
                :filters="[{ text: '小明', value: '1' }]"
                prop="name"
                label="Name"
                sortable
            />
            <el-table-column prop="address" label="Address" sortable />
        </el-table>
    </div>
</template>
<script setup>
import { indexData, tables } from '@/util/tables';
let tableData = reactive([...tables]);
const cellClick = (row, column,) => {
  console.log(row, '')
}
// 筛选条件过滤
const filterChange = (row) => {
  console.log(row)
}
onMounted(() => {
  let data = indexData(tables);
});
</script>
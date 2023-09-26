<template>
    <div class="main flex_c">
        <div class="m8_b">
            <el-button type="primary" @click="addDict">添加字典</el-button>
        </div>
        <div class="flex_r dict">
            <div class="dict_left">
                <el-table :data="dictList" border @row-click="rowClick">
                    <el-table-column
                        label="字典名称"
                        prop="label"
                    ></el-table-column>
                    <el-table-column
                        label="字典key"
                        prop="key"
                    ></el-table-column>
                    <el-table-column label="启用状态">
                        <template #default="scope">
                            <span>{{ scope.row.flag ? '禁用' : '启用' }}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="dict_right">
                <div class="m8_b">
                    <el-button
                        type="primary"
                        @click="addItem"
                        :disabled="disabledAdd"
                        >添加枚举值</el-button
                    >
                </div>
                <el-table :data="dictItemList" border>
                    <el-table-column label="序号" prop="desc"></el-table-column>
                    <el-table-column
                        label="枚举名称"
                        prop="label"
                    ></el-table-column>
                    <el-table-column
                        label="枚举值"
                        prop="value"
                    ></el-table-column>
                </el-table>
            </div>
        </div>
        <dictForm v-model="dictFlag" />
        <dictContent
            v-model="dictContentFlag"
            ref="dictContents"
            @submitItem="submitItem"
        />
    </div>
</template>
<script setup>
import { useDictionary } from '@/stores/dictionary';
import { computed, watch } from 'vue';
import dictContent from './components/dictContent.vue';
import dictForm from './components/dictForm.vue';
const dictFlag = ref(false) // 字典列表
const dictContentFlag = ref(false) // 字典详情
const dictContents = ref(null)
const keyType = ref('')
const store = useDictionary()
const dictList = computed(() => {
  return store.dict
})
watch(dictList, (newValue) => {
  console.log(newValue, '>><<<')
})
const addDict = () => {
  dictFlag.value = !dictFlag.value
}
const disabledAdd = computed(() => {
  return !keyType.value
})
const dictItemList = computed(() => {
  return store.dictObj[keyType.value]
})
// 点击某一行
const rowClick = (row, column, event) => {
  //   dictContents.value.addRef(row.key)
  keyType.value = row.key

}
const addItem = () => {
  dictContentFlag.value = !dictContentFlag.value
}
const submitItem = (val) => {
  store.setDict([val], keyType.value)

}
</script>
<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
}
.dict {
    width: 100%;
    height: 100%;
    .dict_left {
        flex: 2;
        border: 1px solid #eee;
        border-radius: 4px;
        box-shadow: 0px 2px 2px 2px #eee;
        margin-right: 8px;
    }
    .dict_right {
        flex: 1;
    }
}
</style>
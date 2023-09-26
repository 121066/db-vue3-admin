<template>
    <div>
        <div class="m8_b">
            <el-button type="primary" @click="addUser">添加用户</el-button>
        </div>
        <el-table :data="rules" border>
            <el-table-column label="管理员名称" prop="name"></el-table-column>
            <el-table-column label="登录密码" prop="password"></el-table-column>
            <el-table-column label="年龄" prop="age"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button link type="primary" @click="update(scope)"
                        >编辑</el-button
                    >
                    <el-button link type="primary" @click="deleteRule(scope)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <AdduserDialog
            v-model="userDialog"
            @submitUser="submitUser"
            ref="adduserDialog"
        />
    </div>
</template>
<script setup>
import { useAuthority } from '@/stores/authority.js';
import { ElMessage } from 'element-plus';
import { storeToRefs, } from 'pinia';
import { nextTick, ref } from 'vue';
import AdduserDialog from './components/AdduserDialog.vue';
const userDialog = ref(false)
const store = useAuthority()
const { rule, authName } = storeToRefs(store)
const rules = computed(() => {
  return store.getRule
})
const adduserDialog = ref(null)
// 添加用户
const addUser = () => {
  userDialog.value = true
}
// 添加数据
const submitUser = (e, type) => {
  const msg = {
    'add': '添加成功',
    'edit': '修改成功'
  }
  if (type === 'add') {
    store.setRule(e)

  } else {
    store.updateRule(e)
  }
  ElMessage.success(msg[type])
}
// 修改数据
const update = (e) => {
  userDialog.value = true
  const row = JSON.parse(JSON.stringify(e.row))
  nextTick(() => {
    adduserDialog.value.updateEdit(row)
  })
}
// 删除数据
const deleteRule = (e) => {
  store.deleteRule(e.$index)
  ElMessage.success('删除成功')
}
</script>
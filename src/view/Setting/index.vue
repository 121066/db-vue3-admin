<template>
    <div>
        <div class="m8_b">
            <el-button type="primary" @click="addUser">添加用户</el-button>
        </div>
        <el-table :data="rules" border>
            <el-table-column label="管理员名称" prop="name"></el-table-column>
            <el-table-column label="登录密码" prop="password"></el-table-column>
            <el-table-column label="年龄" prop="age"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
    </div>
    <AdduserDialog v-model="userDialog" @submitUser="submitUser" />
</template>
<script setup>
import { useAuthority } from '@/stores/authority.js';
import { ElMessage } from 'element-plus';
import { storeToRefs, } from 'pinia';
import { ref } from 'vue';
import AdduserDialog from './components/AdduserDialog.vue';
const userDialog = ref(false)
const store = useAuthority()
const { rule, authName } = storeToRefs(store)
const rules = computed(() => {
  return rule.value
})
// 添加用户
const addUser = () => {
  userDialog.value = true
}
// 添加数据
const submitUser = (e) => {
  store.setRule(e)
  ElMessage.success('添加成功')
}

</script>
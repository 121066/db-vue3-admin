<template>
    <div>
        <el-dialog
            @opened="opened"
            v-model="centerDialogVisible"
            title="新增"
            width="50%"
            align-center
            @close="close"
            @open="open"
        >
            <div>
                <el-form
                    :rules="rules"
                    :model="addForm"
                    label-width="80px"
                    ref="addFroms"
                >
                    <el-row :gutter="24">
                        <el-col :span="12">
                            <el-form-item label="用户名称" prop="name">
                                <el-input
                                    v-model="addForm.name"
                                    placeholder="请输入用户名称"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="用户密码" prop="password">
                                <el-input
                                    v-model="addForm.password"
                                    placeholder="请输入用户密码"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="用户年龄" prop="age">
                                <el-input
                                    v-model="addForm.age"
                                    placeholder="请输入用户年龄"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="用户权限" prop="rule">
                                <el-input
                                    v-model="addForm.rule"
                                    placeholder="请选择用户角色"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="close">取消</el-button>
                    <el-button type="primary" @click="addConfirm">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { computed, reactive, ref } from 'vue';
// import _ from 'lodash'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
let addForm = reactive({
  name: '',
  password: '',
  age: '',
  rule: '',
  id: new Date().getTime()
})
const emit = defineEmits(['update:modelValue', 'submitUser'])
const centerDialogVisible = computed(() => {
  return props.modelValue
})
const addFroms = ref(null)
const type = ref('add')
const rules = {
  name: [{ required: true, message: '请输入用户名称', target: 'blur' }],
  password: [{ required: true, message: '请输入用户密码', target: 'blur' }],
  age: [{ required: true, message: '请输入用户年龄', target: 'blur' }],
  rule: [{ required: true, message: '请选择用户角色', target: 'blur' }]
}
// 关闭
const close = () => {

  emit('update:modelValue', false)
  addFroms.value.resetFields()
}
// 打开
const open = () => {
  console.log('打开')
  //   
}
const opened = () => {
  console.log('打开2')
}
// 确定
const addConfirm = () => {
  addFroms.value.validate((isValid, invalidFields) => {
    if (isValid) {
      let form = JSON.parse(JSON.stringify(addForm))
      emit('submitUser', form, type.value)
      close()
    } else {
      console.log(invalidFields)
      console.log('验证不通过,不能提交,请检查')
    }
  })
}
// 赋值编辑
const updateEdit = (e) => {
  const from = reactive({ ...e })
  Object.assign(addForm, from)
  type.value = 'edit'
}
defineExpose({
  updateEdit
})
</script>
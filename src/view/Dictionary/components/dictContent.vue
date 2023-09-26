<template>
    <div>
        <el-dialog
            v-model="centerDialogVisible"
            title="新增"
            width="50%"
            align-center
            @close="close"
        >
            <div>
                <el-form :model="addForm" ref="addFroms">
                    <el-row :gutter="24">
                        <el-col :span="12">
                            <el-form-item label="枚举名称" prop="label">
                                <el-input
                                    v-model="addForm.label"
                                    placeholder="请输入枚举名称"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="枚举值" prop="value">
                                <el-input
                                    v-model="addForm.value"
                                    placeholder="请输入枚举值"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="排序顺序" prop="desc">
                                <el-input
                                    v-model.number="addForm.desc"
                                    placeholder="请输入排序顺序"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="是否禁用" prop="flag">
                                <el-radio-group
                                    v-model="addForm.flag"
                                    class="ml-4"
                                >
                                    <el-radio :label="false" size="large">
                                        启用</el-radio
                                    >
                                    <el-radio :label="true" size="large"
                                        >禁用</el-radio
                                    >
                                </el-radio-group>
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
import { reactive, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const addFroms = ref(null)
const addForm = reactive({
  value: '',
  label: '',
  desc: '',
  flag: false
})
const emit = defineEmits(['update:modelValue', 'submitItem'])
const centerDialogVisible = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  }
})
const addRef = (value) => {
  console.log(value, '我是父组件传值过来的')
}
const close = () => {
  emit('update:modelValue', false)
  addFroms.value.resetFields()

}
// 确认
const addConfirm = () => {
  let form = JSON.parse(JSON.stringify(addForm))
  emit('submitItem', form)
  close()

}
defineExpose({
  centerDialogVisible,
  addRef
})
</script>
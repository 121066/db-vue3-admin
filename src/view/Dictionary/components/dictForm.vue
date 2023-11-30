<template>
    <div>
        <el-dialog v-model="centerDialogVisible" title="新增" width="50%" align-center @close="close">
            <div>
                <el-form :model="addForm" ref="addFroms" :rules="rules">
                    <el-row :gutter="24">
                        <el-col :span="12">
                            <el-form-item label="字典名称" prop="label">
                                <el-input v-model="addForm.label" placeholder="请输字典名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="字典key" prop="key">
                                <el-input v-model="addForm.key" placeholder="请输入字典key"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="排序顺序" prop="desc">
                                <el-input v-model.number="addForm.desc" placeholder="请输入排序顺序"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="是否禁用" prop="flag">
                                <el-radio-group v-model="addForm.flag" class="ml-4">
                                    <el-radio :label="false" size="large">
                                        启用</el-radio>
                                    <el-radio :label="true" size="large">禁用</el-radio>
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
import { useDictionary } from '@/stores/dictionary';
import { reactive } from "vue";
// import { storeToRefs } from 'pinia'
const store = useDictionary()
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})
const addForm = reactive({
    key: '',
    label: '',
    desc: '',
    flag: false,
    list: []
})
const rules = {
    key: [{ required: true, message: '请输入字典key', target: 'blur' }],
    label: [{ required: true, message: '请输入字典名称', target: 'blur' }],
    desc: [{ required: false, message: '' }],
    flag: [{ required: false }]

}
const addFroms = ref(null)
const emit = defineEmits(['update:modelValue'])
const centerDialogVisible = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})
const addRef = (value) => {
    //   console.log(value, '我是父组件传值过来的')
}
const close = () => {
    emit('update:modelValue', false)
    addFroms.value.resetFields()
}
// 确认
const addConfirm = () => {
    addFroms.value.validate((valid) => {
        if (valid) {
            store.setDictContent(addForm, addForm.key)
            close()
        }
    })

}
defineExpose({
    centerDialogVisible,
    addRef
})
</script>
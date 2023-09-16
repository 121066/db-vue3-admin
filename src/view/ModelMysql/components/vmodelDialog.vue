<template>
    <div>
        <el-input v-model="int" placeholder="请输入内容"></el-input>
        <el-dialog v-model="val" title="新增" width="50%" align-center>
            <div>
                <el-form>
                    <el-row :gutter="24">
                        <el-col :span="12">
                            <el-form-item label="名称">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="名称">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="名称">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="名称">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addCancel">取消</el-button>
                    <el-button type="primary" @click="addConfirm">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
// defineProps(['vmodelDialogs'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const init = ref(false)
const emit = defineEmits(['update:modelValue'])
watch(() => props.modelValue, (newValue, oldValue) => {
  console.log(newValue, '新的值')
})
const int = computed(() => {
  return int.str
})
const val = computed(() => {
  return props.modelValue
})
// 确定
const addConfirm = () => {
  emit('update:modelValue', false)
}
// 取消
const addCancel = () => {
  emit('update:modelValue', false)
}
onMounted(() => {
  console.log(props.flag, 'vm')
})
</script>
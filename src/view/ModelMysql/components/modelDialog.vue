<template>
    <div>
        <el-dialog
            v-model="centerDialogVisible"
            title="新增"
            width="50%"
            align-center
        >
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
                    <el-button @click="centerDialogVisible = false"
                        >取消</el-button
                    >
                    <el-button
                        type="primary"
                        @click="centerDialogVisible = false"
                    >
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const centerDialogVisible = ref(false)
const addRef = () => {
  centerDialogVisible = true
}
defineExpose({
  centerDialogVisible
})
</script>
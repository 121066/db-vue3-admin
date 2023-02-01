<template>
  <div class="login">
    <div class="login_center">
      <el-form
        :model="loginFrom"
        class="login_in"
        :rules="rules"
        ref="releForm"
        label-width="65px"
      >
      
        <el-row :gutter="20" justify="center">
          <el-col :span="17">
            <el-form-item label="用户名" prop="userName">
              <el-input
                placeholder="请输入用户名"
                v-model="loginFrom.userName"
                :prefix-icon="UserFilled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="17">
            <el-form-item label="密码" prop="passWord">
              <el-input
                placeholder="请输入密码"
                v-model="loginFrom.passWord"
                :prefix-icon="Lock"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20" style="text-align: center">
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button type="info" @click="clear">清除</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script setup name="login">
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { setCookies } from '@/util/tokenCookie.js'
import { ElMessage } from 'element-plus'
const loginFrom = reactive({
  userName: '',
  passWord: '',
})
const router = useRouter()
const rules = reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 8, message: '请输入长度为2~8之间的用户名', trigger: 'blur' },
  ],
  passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const releForm = ref()
//登录
const submit = () => {
  releForm.value.validate((valid) => {
    if (!valid) {
      ElMessage.warning('请输入用户名和密码')
    } else {
      setCookies('dbyxs')
      router.push('/')
    }
  })
}
//清除
const clear = () => {
  releForm.value.resetFields()
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url(@/assets/images/logo_bg.jpeg) no-repeat;
  background-size: 100% 100%;
}
.login_center {
  width: 500px;
  height: 350px;
  border: 1px solid #eee;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_center:hover {
  box-shadow: 0px 0px 5px 5px #eee;
}
</style>

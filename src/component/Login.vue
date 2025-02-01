<script setup>
import { ref } from 'vue';
import { Lock, User } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/index.css';
import {ElMessage} from "element-plus";

const loginForm = ref({
  username: '',
  password: '',
});

const loginFormRules = ref({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 3, max: 6, message: '用户名长度必须在3-6之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度必须在6-15之间', trigger: 'blur' },
  ],
});

const formRef = ref(null)

const onLogin = () => {
  formRef.value.validate((valid) => {
    if (!valid) return ElMessage.error("用户名或密码错误")
  })
}

const onReset = () => {
  formRef.value.resetFields();
}
</script>

<template>
  <div class="login-box">
    <el-form :model="loginForm" :rules="loginFormRules" ref="formRef">
      <el-form-item prop="username">
        <el-input placeholder="请填写用户名" v-model="loginForm.username">
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            placeholder="请填写密码"
            type="password"
            show-password
            v-model="loginForm.password"
        >
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button @click="onReset">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
}
body {
  background: #ddd;
}
.login-box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 500px;
    padding: 40px 50px;
    background: #fff;
    .el-form-item {
      margin: 20px 0;
    }
    .el-input {
      height: 40px;
    }
  }
}
</style>
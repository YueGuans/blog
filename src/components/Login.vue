<template>
  <div class="bc">
    <div class="login-container">
      <h1 class="title">登录</h1>
      <el-form 
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      >
        <el-form-item prop="userName">
          <el-input placeholder="请输入用户名" v-model="ruleForm.userName" :prefix-icon="User"  type="txt"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码"  v-model="ruleForm.password" :prefix-icon="Lock"  type="password"></el-input>
        </el-form-item>
        <el-form-item prop="submit">
          <el-checkbox  size="large"  v-model="checked"  label="记住密码" />
        </el-form-item>
        <el-form-item prop="submit">
          <el-button color="#8c96f4" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button color="#8c96f4" @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
        <router-link to="/register">
          <div class="txt">
          <span>没有账号?</span>
          <span>立即注册</span>
        </div>
        </router-link>
      </el-form>      
   </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue"
import { FormInstance, FormRules, messageConfig ,ElMessage} from "element-plus"
import { User,Lock } from '@element-plus/icons-vue'
import { useRoute, useRouter } from "vue-router";
import { getUserData } from "../request/request"
// 是否记住密码
const checked = ref(true)
const ruleFormRef = ref<FormInstance>()
// 初始化表单
const ruleForm = reactive({
  userName: '',
  password: ''
})

// 定义校验规则
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名长度应在3-10', trigger: 'blur' },
  ],
  password: [
    {required: true, message: "请输入密码", trigger: "blur"},
    { pattern:/^[a-zA-Z0-9]{6,13}$/, message:'请输入6~13位字母或数字', trigger:'change'}
  ]
})

// 提交
// 获取路由实列
const router = useRouter()
const route = useRoute()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const data:any = await getUserData(JSON.stringify(ruleForm))
      if ( data.status === 200) {
        ElMessage.success(data.message)
        router.push("/home")
      } else {
        ElMessage.error(data.message)
      }
    }
  })
}

// 重置
const resetForm = (formEl: FormInstance | undefined) => {
  if(!formEl) return
  formEl.resetFields()
}

</script>



<style scoped lang="less">
  .bc {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url("@/assets/images/login_bc/luffy01.jpg") no-repeat;
    background-size: cover;

    .login-container {
      position: absolute;
      top: 30%;
      right: 20%;
      width: 330px;
      height: 450px;
      border-radius: 5%;
      background: rgba(200, 200, 200, .25);

      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25),-3px -3px 4px rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(5px);

      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        position: absolute;
        top: 15%;
        font-size: 42px;
        color: #fff;
        letter-spacing: 18px;
      }
    }
  }

  .txt {
    color: #8fd9f2;
    text-align: center;
  }

  .txt span {
    cursor: pointer;
  }
  .txt span:nth-child(2) {
    color: #8c96f4;
  }
</style>
<!-- 重置element样式 -->
<style scoped>
 .el-form {
  position: absolute;
  top: 38%;
}


.el-form .el-form-item .el-input{
  width: 250px;
  height: 40px;
}

.el-checkbox {
  --el-checkbox-checked-text-color: #8c96f4;
  --el-checkbox-checked-bg-color: #8c96f4;
}

.el-button {
  color: #fff;
  width: 120px;
  height: 40px;
  letter-spacing: 5px;
  font-weight: 600;
}
</style>

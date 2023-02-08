
<template>
  <div class="bc">
    <div class="login-container">
      <h1 class="title">注册</h1>
      <el-form >
        <el-form-item prop="用户名"   v-model="input">
          <el-input placeholder="请输入用户名" :prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item prop="密码">
          <el-input placeholder="请输入密码" :prefix-icon="Lock"></el-input>
        </el-form-item>
        <el-form-item prop="submit">
          <el-checkbox  size="large"  v-model="checked"  label="记住密码" />
        </el-form-item>
        <el-form-item prop="submit">
          <el-button color="#8c96f4">注册</el-button>
        </el-form-item>
        <router-link to="/login">
          <div class="txt">
          <span>已有账号?</span>
          <span>立即登录</span>
        </div>

        </router-link>
      </el-form>      
   </div>
  </div>
</template>

<script lang="ts">
import { User,Lock } from '@element-plus/icons-vue'
export default {
  name: 'Login',
  data() {
    return {
      checked: true,
      input: "",   
      User, 
      Lock  
    }
  }
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
      top: 200px;
      right: 300px;
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
  width: 250px;
  height: 40px;
  letter-spacing: 5px;

}
</style>

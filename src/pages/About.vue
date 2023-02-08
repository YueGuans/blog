<template>
    <div class="bg">
        <NavBar></NavBar>
        <Welcome :title="title" :str="str" :show-entry="showEntry" :toTopHeight="toTopHeight"></Welcome>
    </div>
    <div class="w">
      <div class="about-contanier">
        <div class="avatar-box">
          <img src="../assets/images/home_pic/luffy03.jpeg" alt="" class="img">
          <h3 class="name">贝才木木</h3>
          <el-button @click="open()" type="primary">退出登录</el-button>
        </div>
        <div class="content">
          <h2 class="about-blog set-about-color">关于这个博客</h2>
          <p>兴趣使然,偶然所致</p>
          <h2 class="about-author set-about-color">关于作者</h2>
          <ul class="about-author-ul">
            <li>纯情大学生</li>
            <li>究其一生研究人类活着的意义</li>
            <li>目前仍一无所获</li>
            <li>带job, 我很乐观的看待混凝土搅拌32号钢筋问题</li>
            <li>cpdd  全网无前任,有也不承认</li>
          </ul>
        </div>
      </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'

// 引入组件
import NavBar from '../components/NavBar.vue';
import Welcome from '../components/Welcome.vue';

const title ="ABOUT ME" 
const str = '关于我是谁，双枪会给出答案，哈哈哈'
const showEntry = false
const toTopHeight = -80



const open = () => {
  ElMessageBox.confirm('确定退出登录吗?',"/(ㄒoㄒ)/~~",
    {
      confirmButtonText: '确定',
      // cancelButtonText: '取消',
      // type: 'warning',
    }
  ).then(() => {
      console.log(11);
        localStorage.clear()
        location.reload()
      ElMessage({
        type: 'success',
        message: '已退出登录',
      })
    }).catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出登录',
      })
    })

}

</script>

<style scoped lang="less">

.bg {
    width: 100vw;
    height: 65vh;
    background: url("../assets/images/home_pic/sifadao.jpg") no-repeat;
    background-size: cover;
}
.about-contanier {
    margin-top: 58vh;
    height: 500px;
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%);
}

.avatar-box {
  text-align: center; 
}
.avatar-box .img{
  display: block;
  width: 150px;
  height: 150px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: 0 auto;
  transform: translate(0, -50%);
  object-fit: cover;
}
.avatar-box .name {
  color:#161209;
  font-size: 24px;
  margin-top: -65px;
  letter-spacing: 2px;
}


.set-about-color {
  color:#161209
}
.content {
  margin: 50px auto;
  width: 60%;
} 
.content p {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 20px;
}
.content p::before {
  content: '|';
  margin-right: 5px;
}

.about-blog::before {
  content: '# ';
  color: #2d96bd;
  font-size: 20px;
  font-weight: bolder;
}

.about-author::before {
  content: '# ';
  color: #2d96bd;
  font-size: 20px;
  font-weight: bolder;
} 
.about-author-ul li {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 45px;
}
.about-author-ul li::marker {
  content: '👨‍💻 ';
}
</style>

<style>
.el-button {
  margin-left: 85%;
  margin-top: -15%;
}
</style>

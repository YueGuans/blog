<template>
        <div class="introduce">
          <router-link to="/about"><img src="@/assets/images/home_pic/luffy03.jpeg" alt="头像" class="touxiang"></router-link>
          <div class="contact">
            <span class="icon iconfont icon-QQ" @click="dialogVisible = true"></span> <!-- 弹出QQ二维码 -->
            <span class="icon iconfont icon-dianhua" @click="open()"></span>
            <a href="https://github.com/YueGuans" target="_blank" ><span class="icon iconfont icon-github"></span></a>
          </div>
          <el-dialog v-model="dialogVisible" title="二维码" width="335px" draggable>
              <span ><img src="../../../assets/images/erweima.jpg" alt="" class="erweima"></span>
          </el-dialog>
          <h3>YUEGUAN'S</h3>
        </div>
        <div class="sort">
          <div class="title">
            <span class="iconfont icon-24gl-folderOpen"></span>
            文章分类
          </div>
          <div class="sort-of-article">
            <ul class="sort-of-article-ul">
              <li><a href="#">哎呦 不错呦</a></li>
              <li><a href="#">哎呦 不错呦</a></li>
              <li><a href="#">哎呦 不错呦</a></li>
              <li><a href="#">哎呦 不错呦</a></li>
              <li><a href="#">哎呦 不错呦</a></li>
              <li><a href="#">哎呦 不错呦</a></li>
            </ul>
          </div>
        </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { ElNotification } from 'element-plus'
let dialogVisible = ref(false)

// 待完善 样式未生效
const open = () => {
  ElNotification.success({
    title: 'Phone Number',
    message: "150***256",
    position: 'top-left',
  })
}
</script>

<style lang="less">
.el-dialog .erweima {
  display: block;
  width: 300px;
  height: 300px;
}

// 头像介绍 :start
.content-l {
  width: 18%;

  .introduce {
    width: 100%;
    height: 255px;
    border-radius: 12px;
    text-align: center;
    background-color: #fff;
    box-shadow: 4px 6px rgb(50 50 93 / 21%), 0 2px 3px rgb(0 0 0 / 10%);

    .touxiang {
      width: 160px;
      height: 160px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #fff;
      margin-top: 10px;
      transition: all .7s;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25),-3px -3px 4px rgba(255, 255, 255, 0.15);

    }
    .touxiang:hover {
      cursor: pointer;
      transform: rotate(360deg);
    }

    .icon {
      font-size: 28px;
      color: #FEB692;
      border-radius: 5px;
      box-shadow: 4px 6px rgb(50 50 93 / 21%), 0 2px 3px rgb(0 0 0 / 10%);
    } 
    .icon:hover {
      cursor: pointer;
    }
    .icon:nth-child(2) {
      margin: 0 25px 0 25px;
    }
    .icon:active {
      box-shadow: none;
      transform: translateY(5px);
    }

    h3 {
      color: #7f83f7;
      margin-top: 10px;
      font-size: 18px;
      font-weight: 700;
      text-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, .5);
    }
  }
}
// 头像介绍 end

// 文章分类 start
.content-l .sort {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 4px 6px rgb(50 50 93 / 21%), 0 2px 3px rgb(0 0 0 / 10%);


  .title {
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
  }

  .sort-of-article-ul li a{
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    margin-left: 25px;
    margin-top: 10px;
    border: 2px solid #7f83f7;
    border-radius: 12px;
    box-shadow: 4px 6px rgb(50 50 93 / 21%), 0 2px 3px rgb(0 0 0 / 10%);
  }
  .sort-of-article-ul li:last-child {
    padding-bottom: 20px;
  }
}
// 文章分类 end


</style>
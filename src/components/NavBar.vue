<template>
    <div class="header" ref="root">
          <div class="w">
            <div class="logo" @click="reLoad">
            <h1>
              <router-link to="/home">
                <div class="pic"></div>
                <p class="txt">YueGuan's</p>
              </router-link>
            </h1>
          </div>
          <!-- L -->
          <div class="about">
            <el-menu router >
              <el-menu-item :route="item.url" v-for="item in navData.data" :key="item.key">
                <i :class="`differ iconfont ${item.icon}`" ></i>{{ item.title }}
              </el-menu-item>
            </el-menu>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref,reactive ,onMounted, onBeforeUnmount} from 'vue';
import {getNavData} from '../request/request';
const root:any = ref(null)
// 初始化nav数据
const navData = reactive<any>({
    data: [],
})

const handleScrollStart = () => {
    let top = document.documentElement.scrollTop
    // console.log(top);
    if( top > 400 ) root.value.classList.add("color")
    if(top < 400) root.value.classList.remove("color")
  }

onMounted(async () => {
  navData.data = await getNavData() // 发送请求
  window.addEventListener('scroll', handleScrollStart)
  // console.log(root.value);
  
})

//移出事件
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScrollStart)
})

const reLoad = () => {
  location.reload()
}
</script>

<style scoped lang="less">
.header {
  position: fixed;
  height: 55px;
  width: 100%;
  z-index: 99;
  transition: all .4s;
}
.color {
  background-color: #8c96f4;
}
.logo {
  float: left;
  width: 200px;
  height: 45px;
  margin-top: 4px;
}
.logo .pic {
  float: left;
  width: 45px;
  height: 45px;
  background: url("@/assets/images/login_bc/luffy01.jpg") no-repeat;
  background-size: cover;
  border-radius: 50%;
  transition: all .5s;
}

.logo .txt {
  float: left;
  color: #FFF;
  margin-left: 8px;
  margin-top: 4px;
  font-size: 26px;
  font-weight: 300;
  letter-spacing: 2px;
}
.logo:hover .pic{
  transform: rotate(360deg);
}

/* L */
.about {
  float: right;
  height: 55px;
  /* background-color: pink; */
}

.el-menu  {
  /* float: left; */
  /* width: 500px; */
  height: 55px;
  border: none;
  background: none;
}
.el-menu .el-menu-item {
  color: #FFF;
  float: left;
  height: 55px;

  font-size: 17px;
  font-weight: 500;

}

.el-menu .el-menu-item:hover {
  color: #8c96f4;
}
.about .differ {
  font-size: 18px;
  font-weight: 100;
  padding-right: 5px;
  margin-top: 3px;
}

</style>

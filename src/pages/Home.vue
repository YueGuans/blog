<template>
  <div class="bc">
    <NavBar></NavBar>
    <Welcome :str="str" :title="title"></Welcome>
  </div>
  <!-- homepage start -->
  <section class="w container">
    <HomeDate></HomeDate>

    <div class="content">
      <div class="content-l L r-l-layout">
        <HomeContent_l></HomeContent_l>
      </div>
      <div class="content-r R r-l-layout">
        <HomeContent_r></HomeContent_r>
      </div>
    </div>
  </section>
  <BackTop></BackTop>
  <!-- homepage end -->

</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Welcome from '../components/Welcome.vue';
// import Clock from '../components/Clock.vue'
import HomeDate from "./homepage/HomeDate.vue"
import HomeContent_l from "./homepage/homecontent/HomeContent_l.vue"
import HomeContent_r from "./homepage/homecontent/HomeContent_r.vue"
import BackTop from '../components/BackTop.vue';



const title = 'FIND YOUR OWN ONE PIECE'
const str = "迄今所有人生都大写着失败，但不妨碍我继续向前"
</script>

<style scoped lang="less">
// @import "@/assets/iconfont/iconfont/iconfont.css";
.header {
  position: fixed;
  height: 55px;
  width: 100%;
  z-index: 99;
  // background-color: #8c96f4;
}

.bc {
  position: relative;
  height: 100vh;
  background: url("@/assets/images/login_bc/luffy02.jpeg") no-repeat;
  // background: url("@/assets/images/home_pic/qba.jpeg") no-repeat;
  background-size: cover;
}

.container{
  height: 1000px;
  margin-top: 103vh;
  // background-color: pink;
  border-radius: 12px;
  // box-shadow: 0px 8px 12px 10px rgba(0, 0, 0, 0.3);
}

html,body {
  width: 100vw;
  height: 100vh;
  background-color: #eaeaea;
  /* background-color:   #F9FBFC; */
}


</style>




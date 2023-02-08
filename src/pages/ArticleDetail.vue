<template>
    <div class="bg">
        <NavBar></NavBar>
        <Welcome :title="title" :str="str" :showEntry="showEntry" :toTopHeight="toTopHeight "></Welcome>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Welcome from '../components/Welcome.vue';

const title ="文章标题" 
const str = '鞠婧祎是真的YYDS'
const showEntry = false
const toTopHeight = -80
</script>

<style scoped lang="less">
.bg {
    width: 100vw;
    height: 65vh;
    background: url("../assets/images/home_pic/LandZ.jpeg") no-repeat;
    background-size: cover;
}
</style>

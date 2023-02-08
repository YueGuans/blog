<template>
     <div class="welcome"  :style=" { 'transform': 'translate(-50%,'+ txt.toTopHeight + '%)'}">
        <h1 class="title" > {{ txt.title }} </h1>
        <p class="profile" ref="root"></p>
        <div class="entry" v-if="txt.showEntry" @click="entry()"><i class="iconfont icon-shousuoxiajiantou"></i>进入空间</div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick, defineProps} from 'vue'
const root:any = ref(null)

const txt = defineProps({
  title: {
    type: String,
    default: 'ONE PIECE'
  },
   str: {
    type: String,
    default: '写点什么好嘞'
   },
   showEntry: {
    type: Boolean,
    default: true
   },
   toTopHeight: {
    type: String,
    default: 20
   }
})

const data = txt.str.split('')
function writing(index) {
    if (index < data.length) {
      root.value.innerHTML += data[index]
      setTimeout(writing.bind(this), 200, ++index)
    }
}

const entry = () => {
  nextTick(() => {document.documentElement.scrollTo(0,600); })
}

onMounted(() => {
  writing(0)
})
</script>

<style scoped lang="less">
.welcome {
  height: 200px;
  position: absolute;
  top:50%;
  left: 50%;
  // transform: translate(-50%);
  // margin-top: -10%;
  
  .title {
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .profile {
    width: 100%;
    font-size: 16px;
    color: #fff;
    font-weight: 300;
    text-align: center;
    letter-spacing: 5px;
    margin-top: 16px;
  }
  .entry {
    width: 200px;
    height: 50px;
    border-radius: 30px;
    border: 2px solid #8c96f4;
    
    color: #FFF;
    font-size: 18px;
    text-align: center;
    line-height: 50px;

    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, 100%);

    transition: all .5s;
  }
  .icon-shousuoxiajiantou
 {
    color: #FFF;
    font-size: 18px;
    font-weight: 100;
    margin-right: 18px;

  }

  .entry:hover {
    cursor: pointer;
    background-color: #8c96f4;
    box-shadow: 10px 5px 5px rgba(0, 0, 255, .2);
  }
}
</style>

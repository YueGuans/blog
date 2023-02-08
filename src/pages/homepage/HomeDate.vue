<template>
      <div class="time-container">
        <div class="time time-weather L">
          <div class="week week-clock L">
            <div class="week-top">
              <el-icon class="icon L"><DArrowLeft /></el-icon>
              <h3 class="L">{{ Y }}年{{ M }}月</h3>
              <el-icon class="icon L"><DArrowRight /></el-icon>
            </div>
            <div class="week-buttom" >
              <ul class="week-buttom-ul">
                <li  v-for="(item, idx) in weekDay.data" :key="idx" :class="item.isActive ? 'set-week-bcgcolor': ''" @click="dialogVisible=true">
                  <h3>{{weeks[idx]}}</h3>
                  <h3>{{ item.data }}</h3>
                </li>
              </ul>
              
            </div>
            <el-dialog v-model="dialogVisible" title="日历" width="30%" draggable>
              <el-calendar v-model="value" style="z-index: 10;" />
            </el-dialog>
          </div>
          <div class="clock week-clock R">
            <div class="mask"></div>
            <Clock></Clock>
          </div>
        </div>
        <div class="weather time-weather R">
          <!-- <div class="weather-r"></div>  -->
          <img :src="`@/../public/weather/${ weather.data.wea_img }.png`" alt="哦豁" class="weather-r"> <!-- vue3不支持require引入，so把图片放入pulic文件夹 -->
          <div class="weather-l">
            <span>{{weather.data.tem}}℃</span>
            <span>{{ weather.data.city }}</span>
            <div class="fenge"></div>
            <p>{{weather.data.wea}}&nbsp;/&nbsp;<i class="iconfont icon-a-151-shuidi"></i>{{weather.data.humidity}}</p>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import  Clock  from '../../components/Clock.vue';
import {ref, reactive, onMounted} from 'vue';
import getCurrentDay from "../../utils/getCurrentDay"
import {useWeatherStore} from "../../store/pinia"

const value = ref(new Date())
const dialogVisible = ref(false)

const weekDay:any = reactive({
  data: []
})
const weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
const M = ref('')
const Y:any = ref('')

// const weaImg:any = ()=>import(`@/assets/images/weather/${weather.data.wea_img}.png`);

const weather:any = useWeatherStore()
weather.getWeather()

onMounted(async() => {
  const {newDayList, month, year} = getCurrentDay()
  weekDay.data = newDayList
  M.value = month
  Y.value = year
})

</script>
<style scoped lang="less">
.set-week-bcgcolor {
  background-color: #7f83f7;
    h3 {
      color: #FFF !important;
    }
}

.container .time {
    width: 780px;
    .week {
      width: 70%;
      margin-left: 15px;
      .week-top {
        height: 30px;
        width: 258px;

        h3 {
          width: 120px;
          height: 100%;
          color: #FFF;
          background-color: #7f83f7;
          font-size: 18px;
          margin: 0 40px 0 45px;
          text-align: center;
          line-height: 30px;
          border-radius: 15px;
        }
      }

      .week-buttom .week-buttom-ul li {
        float: left;
        width: 60px;
        height: 80px;
        margin-left: 15px;
        margin-top: 10px;
        border-radius: 15px;
        // background-color: #7f83f7;
        letter-spacing: 2px;

        transition: all .5s;

        h3{
          // color: #fff;
          color: #4F7A9A;
          text-align: center;
          line-height: 30px;
          
        }
      }
    }
    .clock {
      position: relative;
      width: 25%;
      .mask{
        position: absolute;
        top: -9px;
        left: 11px;
        width: 130px;
        height: 130px;
        border: 4px solid #7f83f7;
        border-radius: 50%;
        box-shadow: -5px -5px 20px 5px #ffffff,5px 5px 20px 5px #cccccc;;
      }
    }
  }
  .container .weather {
    width: 305px;
    background: url("../../assets/images/home_pic/merry.png") no-repeat;
    background-size: cover;
  }

  .container .week-clock {
    margin-top: 20px;
    height: 110px;
    // background-color: yellow;
  }

.time-weather {
  background-color: #fff;
  border-radius: 12px;
  height: 150px;
  box-shadow: 4px 6px rgb(50 50 93 / 21%), 0 2px 3px rgb(0 0 0 / 10%);
}

.icon {
  margin-top: 2px;
  font-size: 24px;
  color: #7f83f7;
}
.icon:hover {
  cursor: pointer;
}
.week > .week-top {
  margin: 0 auto;
}

.week-buttom .week-buttom-ul li h3:nth-child(1) {
  margin-top: 8px;
}


.week-buttom .week-buttom-ul li h3:nth-child(2) {
  margin-top: 6px;
}

.week-buttom .week-buttom-ul li:hover　{
  cursor: pointer;
  // background-color: #7f83f7;
}
// homepage end 

// weather start
.weather-r {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-left: 210px;
  // background: url("@/assets/images/weather/yujiaxue.png") no-repeat;
}

.weather-l {
  color: #fff;
  width: 120px;
  margin-top: -40px;
  margin-left: 10px;
  .fenge {
   border: 1px solid #fff; 
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }
}
.weather-l span:nth-child(1) {
  font-size: 30px;
  font-weight: 500;
  margin-right: 10px;
}
.weather-l span:nth-child(2) {
  font-size: 20px;
  font-weight: 500;
}

</style>

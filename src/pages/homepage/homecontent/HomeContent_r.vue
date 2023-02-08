<template>
     <div class="header_title">
          <span class="iconfont icon-xiai"></span>
          推荐文章
        </div>
        <div class="article">
          <div class="article-item" @click="goToArticleDetail">
            <div class="box-img L">
              <img src="@/assets/images/home_pic/nami.jpeg" alt="哦豁" class="img  L">
            </div>
            <div class="title L">
              <h2>写代码是一件痛苦的事</h2>
              <span class="date"><i class="iconfont icon-yongyan"></i>2023年12月2日</span>
              <span class="time"><i class="iconfont icon-shijian"></i>22:12:36</span>
              <p class="passage ">
              几十个高官们坐飞机去旅游，其中一个省长说：
              我丢个100元纸币下去，谁捡到了谁准高兴。 
              一个市长说：不如丢10张10元下去，10个人都会高兴。
               另一个区长说：干脆丢100个一元硬币下去，100个人捡到100个人高兴
               。飞行员听后说：不如我把你们全丢下去，让全国人民也高兴高兴！
              </p>
            </div>
            <div class="arrow-r R">
              <span class="iconfont icon-double-arrow-right"></span>
            </div>
          </div> 
        </div>
        <div class="article">
          <div class="article-item">
            <div class="box-img L">
              <img src="@/assets/images/home_pic/onepiece.jpg" alt="哦豁" class="img  L">
            </div>
            <div class="title L">
              <h2>写代码是一件痛苦的事</h2>
              <span class="date"><i class="iconfont icon-yongyan"></i>2023年12月2日</span>
              <span class="time"><i class="iconfont icon-shijian"></i>22:12:36</span>
              <p class="passage ">
              几十个高官们坐飞机去旅游，其中一个省长说：
              我丢个100元纸币下去，谁捡到了谁准高兴。 
              一个市长说：不如丢10张10元下去，10个人都会高兴。
               另一个区长说：干脆丢100个一元硬币下去，100个人捡到100个人高兴
               。飞行员听后说：不如我把你们全丢下去，让全国人民也高兴高兴！
              </p>
            </div>
            <div class="arrow-r R">
              <span class="iconfont icon-double-arrow-right"></span>
            </div>
          </div> 
        </div>
        <div class="article">
          <div class="article-item">
            <div class="box-img L">
              <img src="@/assets/images/home_pic/nami.jpeg" alt="哦豁" class="img  L">
            </div>
            <div class="title L">
              <h2>写代码是一件痛苦的事</h2>
              <span class="date"><i class="iconfont icon-yongyan"></i>2023年12月2日</span>
              <span class="time"><i class="iconfont icon-shijian"></i>22:12:36</span>
              <p class="passage ">
              几十个高官们坐飞机去旅游，其中一个省长说：
              我丢个100元纸币下去，谁捡到了谁准高兴。 
              一个市长说：不如丢10张10元下去，10个人都会高兴。
               另一个区长说：干脆丢100个一元硬币下去，100个人捡到100个人高兴
               。飞行员听后说：不如我把你们全丢下去，让全国人民也高兴高兴！
              </p>
            </div>
            <div class="arrow-r R">
              <span class="iconfont icon-double-arrow-right"></span>
            </div>
          </div> 
        </div>
</template>

<script setup> 
import { useRouter } from 'vue-router';
const router = useRouter()
const goToArticleDetail = () => {
  router.push('/article-detail')
}
</script>

<style lang="less">
.r-l-layout {
  margin-top: 2.5vh;
  // box-shadow:0 0 15px rgb(0 0 0 / 10%);
  border-radius: 12px;
}
.content-r {
  width: 80%;
  // height: 500px;
  // background-color: deepskyblue;
  
  .header_title {
    width: 100%;
    height: 15%;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    line-height: 70px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 4px 6px rgb(50 50 93 / 21%), 0 2px 3px rgb(0 0 0 / 10%);

    .icon-xiai {
      font-size: 36px;
      color: #7f83f7;
    }
  }

 // 鼠标经过文章盒子的动作 start
  .article .article-item:hover {
    cursor: pointer;
  }

  .article .article-item:hover .arrow-r{
    transform: translateX(-100%);
  }
  .article .article-item:hover .title{
    margin-left: 50px;
    transform: translateX(-30px);
  }
  .article .article-item:hover .box-img{
    width: 20%;
  }
   // 鼠标经过文章盒子的动作 end
  .article .article-item {
    width: 100%;
    height: 180px;
    background-color: #fff;
    margin-top: 15px;
    border-radius: 12px;
    box-shadow: 4px 6px rgb(50 50 93 / 21%), 0 2px 3px rgb(0 0 0 / 10%);
    overflow: hidden;
    .box-img {
      // width: 200px;
      // height: 180px;
      width: 26%;
      height: 100%;
      overflow: hidden;
      transition: all .4s;

      .img {
      display: block;
      width: 100%;
      height: 100%;
      // width: 200px;
      // height: 180px;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      object-fit: cover;
      // transition: all .5s;
      // opacity: 0.5;
    }
    }

    h2 {
      margin-top: 10px;
    }

    .title {
      font-size: 14px;
      margin-left: 30px;
      transition: all .4s;
      .time {
        margin-left: 20px;
      } 

      .passage {
        font-size: 16px;
        font-weight: 500;
        width: 500px;
        height: 76px;
        margin-top: 12px;
        text-overflow: ellipsis;
        overflow:hidden;
      }
    }
    
    .arrow-r {
      width: 150px;
      height: 100%;
      background-color: #7f83f7;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      text-align: center;
      line-height: 180px;
      margin-right: -150px;
      transition: all .4s;

      .icon-double-arrow-right{
        color: #fff;
        font-size: 92px;
      }
    }
    
 }

}


</style>




<template>
    <div class="clock">
		<div class="center">
			<div class="hour" v-for='item in 12' :key='item'
			:style="'transform: rotateZ('+(30*item+180)+'deg)'">
				<div class="number">
					<span :style="'transform: rotateZ('+(-30*item+180)+'deg)'">{{item}}</span>
				</div>
			</div>
			
			<div class="hour-pointer"
			:style="'transform: rotateZ('+(30*hours+180)+'deg)'">
				<div class="pointer"></div>
			</div>
			
			<div class="minutes-pointer"
			:style="'transform: rotateZ('+(6*minutes+180)+'deg)'">
				<div class="pointer"></div>
			</div>
			
			<div class="seconds-pointer"
			:style="'transform: rotateZ('+(6*seconds+180)+'deg)'">
				<div class="pointer"></div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
    name: "Clock",
    data() {
        return {
            hours:0,
			minutes:0,
			seconds:0,
			interval:null,
        };
    },
    created() {
        this.interval = setInterval(()=>{
			let now = new Date();
			this.minutes = now.getMinutes();
			this.hours = now.getHours()+(this.minutes/60);
			this.seconds = now.getSeconds();
		},1000)
    },
    destroyed() {
		if(this.interval){
			clearInterval(this.interval);
			this.interval = null;
		}
    }
};
</script>

<style scoped lang="less">
#app{
	--shadow:-5px -5px 20px 5px #ffffff,5px 5px 20px 5px #cccccc;
	--bg:linear-gradient(90deg,#e54d42,#39b54a,#0081ff,#9c26b0);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
}
#app::after{
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	background: var(--bg);
	content: '';
	opacity: .3;
}
.number {
    color: #7f83f7;
    font-size: 14px;
    font-weight: 700;
}

.clock{
	width: 200px;
	height: 200px;
	border-radius: 50%;
	// box-shadow: var(--shadow);
	position: relative;
    
    margin-top: -40px;
    margin-left: 55px;

}
.center{
	width: 5px;
	height: 5px;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.hour,.hour-pointer,.minutes-pointer,.seconds-pointer{
	width: 5px;
	height: 5px;
	border-radius: 50%;
	position: absolute;
	left: 0;
	top: 0;
}
.number,.pointer{
	position: absolute;
	left: 50%;
	transform: translate(-50%,0);
	width: 20px;
	height: 65px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
}
.hour-pointer>.pointer{
	width: 10px;
	height: 35px;
	background-color: #333;
	border-radius: 5px;
}
.minutes-pointer>.pointer{
	width: 8px;
	height: 40px;
	background-color: #666;
	border-radius: 5px;
}
.seconds-pointer>.pointer{
	width: 5px;
	height: 46px;
	background-color: #999;
	border-radius: 5px;
}
</style>

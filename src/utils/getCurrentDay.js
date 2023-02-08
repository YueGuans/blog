// function getCurrentDays() {
//   let date = new Date();
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let d = new Date(year, month, 0);
//   let day = d.getDate();
//   let days = [];
//   for (let i = 1; i <= day; i++) {
//     i = i.toString();
//     if (i.length == 1) {
//       i = 0 + i;
//     }
//     days.push(i);
//   }
//   return days;
// }


  function  getCurrentDay() {
        let today = new Date()
        const year = today.getFullYear()
        const month =autoSupplement(today.getMonth() + 1, 2)
        const jintian = today.getDate()
    
        let getMillisecond = 1000 * 60 * 60 * 24 //一天的毫秒数
        let getXingQiJi = today.getDay()  || 7 //若那天是周末，则赋值7
        const startDay = new Date( today.getTime() - getMillisecond * (getXingQiJi - 1)) // 获取当前的
        const endDay = new Date(today.getTime() + getMillisecond * (7 - getXingQiJi))
    
        // 补零操作，以及这一周内的日期push到数组
        let dayList = [autoSupplement(startDay.getDate(),2)]
        for (let i = 1; i < 7; i++) {
            const date = new Date(startDay.getTime() + getMillisecond * i)
            dayList.push(autoSupplement(date.getDate(),2))
        }
        
        // 若是同一天则返回true，方便渲染时高亮
        let newDayList = []
        for(let j = 0; j < dayList.length; j++ ) {
            if( dayList[j] === autoSupplement(today.getDate(),2)) {
                newDayList.push({
                    data: dayList[j],
                    isActive: true
                })
            }else {
                newDayList.push({
                    data: dayList[j],
                    isActive: false
                })
            }
        }

        return {newDayList, year, month, jintian}
    }

    //补零函数
    const autoSupplement = (val,length) => {
        val = val.toString()
        for(let len = val.length; len < length; len = val.length) {
            val = "0" + val
        }
        return val
      }
    // getweeks() {
    //     const weekArr = []
    //     for (let i = 1; i <=7; i++) {
    //         let arr = ['天','一','二','三','四','五','六']
    //         weekarr.push( `星期${arr[i % 7]}`)
    //     }
    //     return weekArr
    // }
    
export default getCurrentDay;


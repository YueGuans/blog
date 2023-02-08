import { defineStore } from "pinia"
import { getWeatherDate} from "../request/request"


interface Weather {
    "city"?:string,
    "wea"?:string,
    "wea_img"?:string,
    "tem"?:string,
    "humidity"?:string,
}


export const useWeatherStore =  defineStore('weather', {
    state: () => {
        return {
            data: <Weather>{}
        }
    },
    actions: {
        async getWeather() {
            const res = await getWeatherDate()
            console.log(res);    
            this.data = res
        }
    }
})

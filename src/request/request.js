import axios from "./axios"


// getUserData请求
export const getUserData = config => {
    return axios.request({
        url: '/getUserData',
        method: 'post',
        data: config
    })
}

// getNavData请求
export const getNavData = () => {
    return axios.request({
        url: '/getNavData',
        method: 'get',
    })
}


// 101042700 荣昌天气id 
// https://v0.yiketianqi.com/free/day?appid=18926344&appsecret=UNV2vAUD&unescape=1&cityid=${cityid}
export const getWeatherDate = ()  => {
    return axios.request({
        url: "https://www.tianqiapi.com/api/",
        menthod: 'get',
        params: {
            appid: '18926344',
            appsecret: 'UNV2vAUD',
            version: 'v6',
            cityid: '101042700'
        }
    })
}


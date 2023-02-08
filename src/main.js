import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/base.css'

// el
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import ElementPlus from 'element-plus' //完整引入，直接暴力解决有些样式不生效
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 引入mockjs
import './mock/api'

import router from './router/router'
import { createPinia} from "pinia";

// 创建pinia实列
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
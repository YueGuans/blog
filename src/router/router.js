import {createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// 路由守卫
router.beforeEach((to, from, next) => {
    if(to.meta.title) {
        document.title = to.meta.title
    }

    const token = localStorage.getItem("token")
    if (to.name !== 'login' && !token) { // 判断用户是否登录
        next({ name: 'login' })
    }else if(token &&  to.name === 'login') { // token说明已经登录，不能再次返回登录页
        next({name: 'home'})
    }else{
        next()
    }
})

export default router
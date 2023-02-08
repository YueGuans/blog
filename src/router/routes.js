// 引入组件
const Home = () => import("../pages/Home.vue")
const Login = () => import("../components/Login.vue")
const Register = () => import("../components/register.vue")
const About = () => import('../pages/About.vue')
const ArticleDetail = () => import('../pages/ArticleDetail.vue')
const routes = [
    {
        name: 'home',
        path: "/",
        component: Home,    
        alias: '/home',
        meta: {title:'Hello, You Found Me'}
    }, 
    {
        name: 'login',
        path: "/login",
        component: Login,
        
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        meta: {title:'About Me'}
    },
    {
        name: 'article-detail',
        path: '/article-detail',
        component: ArticleDetail,
        meta: {
            title: "阿巴阿巴阿巴..."
        }
    }


]

export default routes
import Mock from 'mockjs'
import { getUserInfo } from './mockData'
import { getNavData } from './mockData'

Mock.mock("/api/getUserData",'post', getUserInfo)
Mock.mock("/api/getNavData",'get', getNavData)


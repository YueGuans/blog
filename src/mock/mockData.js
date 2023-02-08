import Mock from "mockjs";

// 登录时用户请求的数据
export  const getUserInfo = config => {
	const {userName, password} = JSON.parse(config.body)
	if(userName == "yueguan" && password == "yueguan") {
		const token = Mock.Random.guid()
		localStorage.setItem("token", token)
		return {
			status: 200,
			message: "登录成功了呢~嗲"
		}
	} else {
		return {
		status: -99,
		message: "你个傻叉，就晓得你要乱输"
	}
}
}

// 首页navs数据
export const getNavData = () => {
	return [
		{
			title: '首页',
			url: '/home',
			icon: 'icon-shouye',
			key: "shouye"
		},
		{
			title: '学习',
			url: '/study',
			icon: 'icon-xuexi',
			key: "xuexi"
		},
		{
			title: '归档',
			url: '/archive',
			icon: 'icon-ic_droptohistory',
			key: "ic_droptohistory"
		},
		{
			title: '友链',
			url: '/firends',
			icon: 'icon-tongxunlu',
			key: "tongxunlu"
		},
		{
			title: '留言',
			url: '/message',
			icon: 'icon-xinfengtianchong',
			key: "xinfengtianchong"
		},
		{
			title: '关于',
			url: '/about',
			icon: 'icon-moban',
			key: "moban"
		}
	]
}


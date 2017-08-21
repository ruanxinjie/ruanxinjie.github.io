import Vue from 'vue'
import Router from 'vue-router'
//import Footer from '@/components/common/footer'

import Buy from '@/components/pages/buy'
import Buycar from '@/components/pages/trolley'
import Circle from '@/components/pages/circle'
import Found from '@/components/pages/found'



//调用json
import axios from "axios"
Vue.prototype.$axios=axios;

Vue.use(Router)

const routes=[
	{path:'/',redirect:'/buy'},
	{path:'/buy',component:Buy},
	{path:'/trolley',component:Buycar},
	{path:'/circle',component:Circle},
	{path:'/found',
		component:Found,
		children:[
			{path:'/buy_classification'},
			{path:'/buy_brand'}
		]},
]

export default new Router({
  routes,
  linkActiveClass:"high"
})

import { createRouter, createWebHistory} from 'vue-router'
import PlHome from '@/components/PlHome.vue'
import PlGrades from '@/components/PlGrades.vue'
import PlLogin from '@/components/PlLogin.vue'
import PlRegisterStudent from '@/components/PlRegisterStudent.vue'
import PlRegisterTeacher from '@/components/PlRegisterTeacher.vue'
const routes = [
	{
		path: '/',
		name: 'Home',
		component: PlHome,
		children: [
			{
				path: '/score',
				component: PlGrades
			},
			{
				path: '/student/save',
				component: PlRegisterStudent
			},
			{
				path: 'teacher/save',
				component: PlRegisterTeacher
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: PlLogin,
		props: route => ({ redirect: route.query.redirect })
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from) => {
	let isAuthenticated = window.sessionStorage.getItem('isAuthenticated')
 	if (to.name !== 'Login' && !isAuthenticated) {
 		return {
     		 path: '/login',
 	    	 // 保存我们所在的位置，以便以后再来
   			 query: { redirect: to.fullPath },
 	   }
 	}
})

export default router

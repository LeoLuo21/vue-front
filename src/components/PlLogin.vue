<template>
	<el-form :model='form'>
		<el-form-item>
			<el-col :span="6" :push="9">
				<el-input v-model="form.account" :placeholder="accountTip"></el-input>
			</el-col>
		</el-form-item>
		<el-form-item>
			<el-col :span="6" :push="9">
				<el-input v-model="form.password" type="password" placeholder="input your password"></el-input>
			</el-col>
		</el-form-item>
		<el-form-item>
			<el-col :span="12" :push="9">
				<el-button type="primary" @click="login">Login</el-button>
				<el-button 
					v-if="loginType == 'student'"
					type="text" class="switch"
					@click="switchToTeacher"
				>switch to teacher</el-button>
				<el-button v-else type="text" class="switch"
					@click="switchToStudent"
				>switch to student</el-button>
				<el-button type="text" @click="switchToAdmin">Login as Admin</el-button>
			</el-col>
		</el-form-item>
	</el-form>
</template>

<script type="text/javascript" setup>
	import axios from 'axios'
	import {ref, reactive} from 'vue'
	import {useRouter} from 'vue-router'
	const router = useRouter()
	const props = defineProps({
		redirect: String
	})
	let form = reactive({
		account: '',
		password: ''
	})
	let loginType = ref('student')
	let accountTip = ref('input your studnetId')
	function login() {
		axios.post(`http://localhost:8090/login/${loginType.value}`,{
					username: form.account,
					password: form.password
				}).then(response => {
					const data = response.data;
					const token = response.data.token;
					window.sessionStorage.setItem('token',token)
					window.sessionStorage.setItem("isAuthenticated",true)
					window.sessionStorage.setItem('loginType',loginType.value)
					axios.defaults.baseURL = 'http://localhost:8090';
					axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
					if(props.redirect) {
						router.push(props.redirect)
					}else {
						router.push('/')
					}
				})
				form.account = ''
				form.password = ''
	}
	function switchToStudent() {
		accountTip.value = 'input your StudentId'
		loginType.value = 'student'
	}
	function switchToTeacher() {
		accountTip.value = 'input your TeacherId'
		loginType.value = 'teacher'
	}
	function switchToAdmin() {
		accountTip.value = 'input your AdminId'
		loginType.value = 'admin'
	}
</script>

<style scoped>
	.switch {
		color: gray;
	}
</style>
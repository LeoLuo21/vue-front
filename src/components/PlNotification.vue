<template>
	<el-container>
        <el-main>
        	<h3>school news </h3>
        	<ul>
        		<li v-for="news in newsList">
        			<el-button type="text" @click="gotoNewsPage(news.id)">{{news.title}}</el-button>
        		</li>
        	</ul>
        </el-main>
    </el-container>
</template>

<script type="text/javascript" setup>
	import {ref} from 'vue'
	import router from '@/router.js'
	function getNewsList() {
		const p = axios.get('/news')
		p.then(response => {
			return response.data.data;
		})
	}
	let newsList = ref(getNewsList())

	const gotoNewsPage = (newsId => {
		router.push(`/news/${newsId}`)
	})
</script>
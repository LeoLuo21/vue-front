<template>
  <el-row>
  	<el-col :span="6" :push="12">
  		<el-input v-model="searchText" placeholder="input searchText here" clearable>
  		</el-input>
 	 </el-col>
 	 <el-col :span="4" :push="12">
 	 	<el-button type="text">
 	 		<el-icon><search /></el-icon>
 	 	</el-button>
 	 </el-col>
  </el-row>
  <el-table :data="scores" height="250" style="width: 100%">
    <el-table-column prop="studentId" label="Id" />
    <el-table-column prop="studentName" label="Name" />
    <el-table-column prop="subject" label="Subject" />
    <el-table-column prop="score" label="Score" />   
    <el-table-column prop="testTime" label="TestTime" />
  </el-table>
</template>

<script type="text/javascript" setup>
	import axios from 'axios'
	import {useRoute} from 'vue-router'
  let scores;
  async function findThisTermGrades() {
    const p = axios.get(`/score/current`)
    const response = await p
    scores = response.data.data;
  }
  async function findFailedThisTermGrades() {
    const p = axios.get(`/score/failed/current`)
    const response = await p
    scores = response.data.data;
  }
   async function findHistoryGrades() {
    const p = axios.get(`/score`)
    const response = await p
    scores = response.data.data;
  }
  async function findiFailedHistoryGrades() {
    const p = axios.get(`/score/failed`)
    const response = await p
    scores = response.data.data;
  }
  (function () {
  	const route = useRoute()
  	const failed = route.query.failed;
 		const current = route.query.current;
	  if (failed && current) {
  		findFailedThisTermGrades()
	  }else if(failed && !current) {
  		findiFailedHistoryGrades()
	  }else if(!failed && current) {
  		findThisTermGrades()
	  }else if(!failed && !current) {
  		findHistoryGrades()
  	}
  })()
</script>
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
  <el-table :data="classrooms" height="250" style="width: 100%">
    <el-table-column prop="building" label="Building" />
    <el-table-column prop="classroomNo" label="ClassroomNo" />
    <el-table-column prop="time" label="time" />   
    <el-table-column prop="status" label="status" />
  </el-table>
</template>

<script type="text/javascript" setup>
	import {ref} from 'vue'
	let searchText = ref('')
	let classrooms = ref([])
</script>
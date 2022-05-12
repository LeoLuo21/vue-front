<template>
  <el-form
    :model="form"
    label-width="auto"
  >
    <el-form-item label="Id">
      <el-input v-model="form.id" />
    </el-form-item>
    <el-form-item label="Name">
      <el-input v-model="form.name" />
    </el-form-item> 
    <el-form-item label="Address">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item label="Phone">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="register">register teacher</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script type="text/javascript" setup>
  import axios from 'axios'
  import {reactive} from 'vue'
  let form = reactive({})
  function register() {
    const p = axios.post('/teacher/save',form)
    p.then(response => {
      console.log(response.data)
    })
    form = {}
  }
  function cancel() {
    form = {}
  }
</script>
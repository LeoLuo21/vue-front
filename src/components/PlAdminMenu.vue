<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>Grades Management</span>
          </template>
          <el-menu-item index="1-1">
            <el-button type="text" @click="saveStudent">register student</el-button>
          </el-menu-item>
          <el-menu-item index="1-2">
            <el-button type="text" @click="saveTeacher">save teacher</el-button>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script type="text/javascript" setup>
  import axios from 'axios'
  import {useRouter} from 'vue-router'
  const router = useRouter()
  function saveStudent() {
    router.push('/student/save')
  }
  function saveTeacher() {
    router.push('/teacher/save')
  }
</script>

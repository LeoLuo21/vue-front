<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>Grades Infomation</span>
          </template>
          <el-menu-item index="1-1">
            <el-button type="text" @click="gotoThisTermGrades">ThisTermGrades</el-button>
          </el-menu-item>
          <el-menu-item index="1-2">
            <el-button type="text" @click="gotoHistoryGrades">HistoryGrades</el-button>
          </el-menu-item>
          <el-menu-item index="1-3">
            <el-button type="text" @click="gotoFailedThisTermGrades">ThisTermFailedGrades</el-button>
          </el-menu-item>
          <el-menu-item index="1-4">
            <el-button type="text" @click="gotoFailedHistoryGrades">FailedHistoryGrades</el-button>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script type="text/javascript" setup>
  import {useRouter} from 'vue-router'
  const router = useRouter()
  function gotoThisTermGrades() {
    router.push('/score?current=true')
  }
  function gotoHistoryGrades() {
    router.push('/score')
  }
  function gotoFailedThisTermGrades() {
    router.push('/score?current=true&failed=true')
  }
  function gotoFailedHistoryGrades() {
    router.push('/score?failed=true')
  }
</script>

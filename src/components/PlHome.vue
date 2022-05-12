<template>
    <el-container>
        <el-aside width="200px">
            <pl-admin-menu v-if="loginType === 'admin'"></pl-admin-menu>
            <pl-student-menu v-if="loginType === 'student'"></pl-student-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script setup>
    import PlStudentMenu from '@/components/PlStudentMenu.vue'
    import PlAdminMenu from '@/components/PlAdminMenu.vue'
    const loginType = window.sessionStorage.getItem('loginType')
    console.log(loginType)
</script>
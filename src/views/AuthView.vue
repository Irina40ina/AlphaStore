<template>
    <div class="auth-form-container">
       <loginFormComp></loginFormComp> 
    </div>
</template>

<script setup>
import loginFormComp from '@/components/auth/loginFormComp.vue';
</script>

<style scoped>
.auth-form-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
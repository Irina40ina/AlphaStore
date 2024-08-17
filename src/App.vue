<template>
    <div>
        <router-view></router-view>
        <footer class="footer">FOOTER</footer>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    document.documentElement.classList = 'light-theme';    
});
</script>

<style scoped>
.footer { 
    height: 150px;
    width: 100%;
}
</style>
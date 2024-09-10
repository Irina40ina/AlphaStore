<template>
    <div class="main-filter-container">
        <h2 class="filter-title">Фильтры</h2>
        <aptAreaComp></aptAreaComp>
    </div>
</template>
<script setup>
import aptAreaComp from './aptAreaComp.vue';
</script>
<style scoped>
.main-filter-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.filter-title {
    text-align: center;
    color: var(--basic-colorful-fg);
    font-family: var(--basic-font);
}
</style>
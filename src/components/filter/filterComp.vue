<template>
    <div class="main-filter-container">
        <h2 class="filter-title">Фильтры</h2>
        <aptAreaComp v-model="filterData.aptArea"></aptAreaComp>
        <roomCountComp></roomCountComp>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import aptAreaComp from './aptAreaComp.vue';
import roomCountComp from './roomCountComp.vue';

const filterData = reactive({
    aptArea: null,
});

</script>

<style scoped>
.main-filter-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
}
.filter-title {
    text-align: center;
    color: var(--basic-colorful-fg);
    font-family: var(--basic-font);
}
</style>
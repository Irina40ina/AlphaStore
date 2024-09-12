<template>
    <div class="main-filter-container">
        <h2 class="filter-title">Фильтры</h2>
        <aptAreaComp v-model="filterData.aptArea"></aptAreaComp>
        <roomCountComp v-model = "filterData.roomCount"></roomCountComp>
        <h4 class="section-title">Этаж</h4>
        <floorComp v-model="filterData.floor"></floorComp>
        <h4 class="section-title">Этажей в доме</h4>
        <floorComp v-model="filterData.totalFloor"></floorComp>
        <h4 class="section-title">Лифт</h4>
        <radioComp :label_1="'Есть'" :label_2="'Нет'" v-model="filterData.hasElevator"></radioComp>
        <h4 class="section-title">Парковка</h4>
        <radioComp :label_1="'Есть'" :label_2="'Нет'" v-model="filterData.hasPark"></radioComp>
        <h4 class="section-title">Балкон</h4>
        <radioComp :label_1="'Есть'" :label_2="'Нет'" v-model="filterData.hasBalcony"></radioComp>
        <h4 class="section-title">С детьми</h4>
        <radioComp :label_1="'Можно'" :label_2="'Нельзя'" v-model="filterData.hasAllowChild"></radioComp>
        <h4 class="section-title">С животными</h4>
        <radioComp :label_1="'Можно'" :label_2="'Нельзя'" v-model="filterData.hasAllowAnimals"></radioComp>
        <costComp v-model="filterData.cost"></costComp>
        <selectComp v-model="filterData.country" :lable="'Выберите страну'" :items="countries"></selectComp>
        <selectComp v-model="filterData.city" :lable="'Выберите город'" :items="cities"></selectComp>
        <v-btn @click="saveChanges">Сохранить</v-btn>
    </div>
</template>

<script setup>
import { reactive, onMounted, ref, watch } from 'vue';
import aptAreaComp from './aptAreaComp.vue';
import roomCountComp from './roomCountComp.vue';
import floorComp from './floorComp.vue';
import radioComp from './radioComp.vue';
import costComp from './costComp.vue';
import selectComp from './selectComp.vue';
import { fetchLocations } from '@/api/locationApi'

// ##############################  DATA  ##############################

const filterData = reactive({
    aptArea: [],
    roomCount: [],
    floor: [],
    totalFlor: [],
    hasElevator: null,
    hasPark: null,
    hasBalcony: null,
    hasAllowChild: null,
    hasAllowAnimals: null,
    cost: [],
    country: '',
    city: '',
});
const locations = ref([]);
const countries = ref([]);
const cities = ref([]);

// Для проверки
const saveChanges = () => {
    // console.log(filterData.roomCount)
    console.log(filterData.country, filterData.city)
}
// ##############################  WATCHER  ##############################

watch(
    () => filterData.country,
    (newValue) => {
    if(newValue && newValue === 'Россия') {
        cities.value = locations.value[0].cities;
    }
    if(newValue && newValue === 'Украина') {
        cities.value = locations.value[1].cities;
    }
    if(newValue && newValue === 'Беларусь') {
        cities.value = locations.value[2].cities;
    }
})

// ##############################  MOUNTED  ##############################

onMounted(async () => {
    locations.value = await fetchLocations();
    if(locations.value) {
        locations.value.forEach((el) => {
        countries.value.push(el.country);
        cities.value.push(...el.cities);
    });  
    }

})
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
.section-title {
    color: var(--fg-color);
    font-family: var(--basic-font);
}
</style>
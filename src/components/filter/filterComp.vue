<template>
    <div class="main-filter-container">
        <h2 class="filter-title">Фильтры</h2>
        <!-- Площадь -->
        <aptAreaComp v-model="filterData.aptArea"></aptAreaComp>
        <!-- Кол-во комнат -->
        <roomCountComp v-model="filterData.roomCount"></roomCountComp>
        <!-- Этажность -->
        <h4 class="section-title">Этаж</h4>
        <floorComp v-model="filterData.floor"></floorComp>
        <!-- Этажей в доме -->
        <h4 class="section-title">Этажей в доме</h4>
        <floorComp v-model="filterData.totalFloor"></floorComp>
        <!-- Наличие лифта -->
        <h4 class="section-title">Лифт</h4>
        <radioComp :label_1="'Есть'" :label_2="'Нет'" v-model="filterData.hasElevator"></radioComp>
        <!-- Наличие парковки -->
        <h4 class="section-title">Парковка</h4>
        <radioComp :label_1="'Есть'" :label_2="'Нет'" v-model="filterData.hasPark"></radioComp>
        <!-- Наличие балкона -->
        <h4 class="section-title">Балкон</h4>
        <radioComp :label_1="'Есть'" :label_2="'Нет'" v-model="filterData.hasBalcony"></radioComp>
        <!-- Возможность проживания с детьми -->
        <h4 class="section-title">С детьми</h4>
        <radioComp :label_1="'Можно'" :label_2="'Нельзя'" v-model="filterData.hasAllowChild"></radioComp>
        <!-- Возможность проживания с животными -->
        <h4 class="section-title">С животными</h4>
        <radioComp :label_1="'Можно'" :label_2="'Нельзя'" v-model="filterData.hasAllowAnimals"></radioComp>
        <!-- Стоимость -->
        <costComp v-model="filterData.cost"></costComp>
        
        <!-- Страна -->
        <selectComp v-model="filterData.country" @update:model-value="filterData.city = ''" :lable="'Выберите страну'" :items="countries"></selectComp>
        <!-- Город -->
        <selectComp v-model="filterData.city" :lable="'Выберите город'" :items="cities" :disabled="citiesDisabled"></selectComp>
        
        <v-btn @click="saveChanges">Найти</v-btn>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import aptAreaComp from './aptAreaComp.vue';
import roomCountComp from './roomCountComp.vue';
import floorComp from './floorComp.vue';
import radioComp from './radioComp.vue';
import costComp from './costComp.vue';
import selectComp from './selectComp.vue';
import useLocationData from '@/composables/locationComposable';
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const route = useRoute();


// ##############################  DATA  ##############################
const filterData = reactive({
    aptArea: [],
    roomCount: [],
    floor: [],
    totalFloor: [],
    hasElevator: null,
    hasPark: null,
    hasBalcony: null,
    hasAllowChild: null,
    hasAllowAnimals: null,
    cost: [],
    country: '',
    city: '',
});

// const locations = ref([]);
const citiesDisabled = ref(false);


// ##############################  COMPOSABLES  ##############################
const { countries, cities } = useLocationData(filterData);


// ##############################  METHODS  ##############################
// Для проверки
const saveChanges = () => {
    router.push({ name: 'selectedTypeApt', params: { ...route.params }, query: { ...filterData } })
}

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
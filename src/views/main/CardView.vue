<template>
    <div class="card-content-container">
        <div class="w-100 h-50 d-flex justify-start align-center">
            <v-carousel :show-arrows="false" class="w-75" :cycle="true" :continuous="true" :interval="2500">
            <v-carousel-item
            v-for="(item,i) in aptData?.images"
            :key="i"
            :src="item"
            cover
            ></v-carousel-item>
            </v-carousel>
            <div class="w-50 d-flex flex-column justify-start align-start align-self-stretch ga-3 py-6 ps-6">
                <v-chip class="w-50" size="large" prepend-icon="mdi-currency-rub" variant="flat" color="var(--basic-colorful-fg)">
                    {{ aptData?.cost }}
                </v-chip>
                <v-chip class="w-50" size="large" prepend-icon="mdi-phone" variant="flat" color="var(--basic-colorful-fg)" text="Позвонить">
                </v-chip>
                <div class="w-75">
                    <span class="text-title">О квартире:</span>

                    <!-- ID (ДЛЯ ТЕСТА) -->
                    <p>        
                        <v-skeleton-loader
                        v-if="loadingData"
                        type="list-item"
                        ></v-skeleton-loader>
                        <span v-else>ID: {{ aptData?.id }}</span>
                    </p>

                    <!-- ПЛОЩАДЬ -->
                    <p>
                        <v-skeleton-loader
                        v-if="loadingData"
                        type="list-item"
                        height="25"
                        ></v-skeleton-loader>
                        <span v-else> Площадь: {{ aptData?.aptArea }} </span>
                    </p>
                    <p>Этаж: {{ aptData?.floor }} из {{ aptData?.totalFloor }}</p>
                    <p>Количество комнат: {{ aptData?.roomCount }}</p>
                    <p>Лифт: {{ computeValue(aptData?.hasElevator) }}</p>
                    <p>Парковка: {{ computeValue(aptData?.hasPark) }}</p>
                    <p>Балкон: {{ computeValue(aptData?.hasBalcony) }}</p>
                    <p>С детьми: {{ computeValueOpportunity(aptData?.hasAllowChild) }}</p>
                    <p>С животными: {{ computeValueOpportunity(aptData?.hasAllowAnimals) }}</p>
                    <p>Страна: {{ aptData?.country }}</p>
                    <p>Город: {{ aptData?.city }}</p>
                    <p>Район: {{ aptData?.district }}</p>
                </div>
            </div>  
        </div>
        <div>
            <span class="text-title">Описание:</span>
            <p>Площадь: {{ aptData?.description }} кв.м</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { fetchAptById } from '@/api/aptApi.js';
import { useRoute } from 'vue-router';

const route = useRoute();
// #######################################   DATA  ###############################
const aptData = ref(null);
const loadingData = ref(true);

// #######################################   METHODS  ###############################
function computeValue(value) {
        if(value === true) return 'Есть';
        else return 'Нет'; 
}
function computeValueOpportunity(value) {
    if(value === true) return 'Можно';
    else return 'Нельзя';
}
// #######################################   MOUNTED  ###############################
onMounted( async () => {
    try {
        loadingData.value = true;
        aptData.value = await fetchAptById(route.params.cardId)
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        loadingData.value = false;
    }
})
</script>

<style scoped>
    .card-content-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--basic-bg);
    padding: 0 2rem;
   } 
   .text-title {
    text-align: center;
    font-family: var(--basic-font);
    font-size: 1.5rem;
    color: var(--basic-fg);
   }
   p {
    /* text-align: ; */
    font-family: var(--basic-font);
    font-size: 1rem;
    color: var(--basic-fg);
   }
</style>
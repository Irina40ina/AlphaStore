<template>
    <div class="card-content-container">
        <div class="w-100 h-50 d-flex justify-start align-center">
            <v-carousel :show-arrows="false" class="w-75" :cycle="true" :continuous="true" :interval="2500">
            <v-carousel-item
            v-for="(item,i) in aptData.value?.images"
            :key="i"
            :src="item"
            cover
            ></v-carousel-item>
            </v-carousel>
            <div class="w-50 d-flex flex-column justify-start align-start align-self-stretch ga-3 py-6 ps-6">
                <v-chip class="w-50" size="large" prepend-icon="mdi-currency-rub" variant="flat" color="var(--basic-colorful-fg)">
                    {{ aptData.value?.cost }}
                </v-chip>
                <v-chip class="w-50" size="large" prepend-icon="mdi-phone" variant="flat" color="var(--basic-colorful-fg)" text="Позвонить">
                </v-chip>
                <div class="w-75">
                    <span class="text-title">О квартире:</span>
                    <p>Площадь: {{ aptData.value?.aptArea }} кв.м</p>
                    <p>Этаж: {{ aptData.value?.floor }} из {{ aptData.value?.totalFloor }}</p>
                    <p>Количество комнат: {{ aptData.value?.roomCount }}</p>
                    <p>Лифт: {{ computeValue(aptData.value?.hasElevator) }}</p>
                    <p>Парковка: {{ computeValue(aptData.value?.hasPark) }}</p>
                    <p>Балкон: {{ computeValue(aptData.value?.hasBalcony) }}</p>
                    <p>С детьми: {{ computeValueOpportunity(aptData.value?.hasAllowChild) }}</p>
                    <p>С животными: {{ computeValueOpportunity(aptData.value?.hasAllowAnimals) }}</p>
                    <p>Страна: {{ aptData.value?.country }}</p>
                    <p>Город: {{ aptData.value?.city }}</p>
                    <p>Район: {{ aptData.value?.district }}</p>
                </div>
            </div>  
        </div>
        <div>
            <span class="text-title">Описание:</span>
            <p>Площадь: {{ aptData.value?.description }} кв.м</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, reactive } from 'vue';
import apartments from '@/data/apartments';
const props = defineProps({
    selectedAptId: {
        type: String,
        required: false,
        default: null,
    },
})

const aptData = reactive({});

function computeValue(value) {
        if(value === true) return 'Есть';
        else return 'Нет'; 
}
function computeValueOpportunity(value) {
    if(value === true) return 'Можно';
    else return 'Нельзя';
}
onMounted(() => {
    aptData.value = apartments.find((el) => el.id == props.selectedAptId);
    console.log(aptData.value?.images)
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
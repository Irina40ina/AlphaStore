import { defineStore } from "pinia";
import { ref } from 'vue';

export default defineStore('mainStore', () => {
    const selectedAptMatches = {
        'kvartira': ['Квартира'],
        'kottedg': ['Коттедж'],
        'dom': ['Дом'],
        'hostel': ['Хостел'],
        'komnata': ['Комната'],
        'module': ['Модуль'],
    }
    const apartments = ref([]);

    
    return {
        selectedAptMatches,
        apartments,
    }
});
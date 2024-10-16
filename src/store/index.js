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
    const typesApt = ref([
        {key: 'kvartira', value: 'Квартира'}, 
        {key: 'kottedg', value: 'Коттедж'}, 
        {key: 'dom', value: 'Дом'}, 
        {key: 'hostel', value: 'Хостел'}, 
        {key: 'komnata', value: 'Комната'}, 
        {key: 'module', value: 'Модуль'}, 
    ]);
    
    return {
        selectedAptMatches,
        apartments,
        typesApt,
    }
});
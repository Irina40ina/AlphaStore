import { defineStore } from "pinia";

export default defineStore('mainStore', () => {
    const selectedAptMatches = {
        'kvartira': ['Квартира'],
        'kottedg': ['Коттедж'],
        'dom': ['Дом'],
        'hostel': ['Хостел'],
        'komnata': ['Комната'],
        'module': ['Модуль'],
    }
    
    return {
        selectedAptMatches,
    } 
});
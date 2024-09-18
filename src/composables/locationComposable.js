import { fetchLocations } from '@/api/locationApi';
import { ref, onMounted, computed } from 'vue';

export default function useLocationData(filterData) {
    const locations = ref([]);
    
    onMounted(async () => {
        locations.value = await fetchLocations();
        console.log(locations.value);
    });
    
    // ##############################  COMPUTED  ##############################
    const countries = computed(() => locations.value.map(el => el.country));
    const cities = computed(() => {
        const findLocation = locations.value.find(el => el.country === filterData.country);
        return findLocation ? findLocation.cities : [];
    });

    return {
        countries,
        cities,
    }
}


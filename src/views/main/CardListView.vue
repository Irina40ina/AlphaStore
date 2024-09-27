<template>
    <div class="product-list">
        <cardComp v-for="apt in apartments" :key="apt.id" :apt-data="apt"> </cardComp>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { fetchApts } from '@/api/aptApi.js';
import { useRoute } from 'vue-router';
import useMainStore from '@/store/index.js';
import cardComp from '@/components/cardlist/cardComp.vue';

const route = useRoute();
const store = useMainStore();

// ##############################  DATA  ##############################
const apartments = ref([]);

// ##############################  WATCHER  ##############################
// Изменение параметра пути (selectedTypeApt)
watch(() => route.params.selectedTypeApt, (newValue) => {
    if(newValue) getApts();
});
// Изменение параметров запроса
watch(() => route.query, (newValue) => {
    if(newValue) getApts();
}, { deep: true });

// ##############################  METHODS  ##############################
function bundleParamsApi() {
    return { aptType: store.selectedAptMatches[route.params.selectedTypeApt], ...route.query }
}
async function getApts() {
    apartments.value = await fetchApts(bundleParamsApi());
}

// ##############################  LIFECYCLE HOOKS  ##############################
onMounted(() => {
    getApts();
});
</script>

<style scoped>
    .product-list {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 250px);
    justify-items: center;
    gap: 1rem;
    padding: .5rem 0;
}
</style>
<template>
    <v-autocomplete
    class="w-50"
    placeholder="Поиск.."
    variant="solo"
    v-model="searchedData"
    clearable
    hide-details
    :prepend-inner-icon="'mdi-magnify'"
    :density="'compact'"
    item-color="var(--input-bg)"
    ></v-autocomplete>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const searchedData = ref('');
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
        required: false,
    }
});
</script>

<style scoped>
    
</style>
<template>
    <v-autocomplete
    class="w-50"
    placeholder="Поиск.."
    variant="solo"
    :rounded="'lg'"
    clearable
    hide-details
    :prepend-inner-icon="'mdi-magnify'"
    :items="props.items"
    :density="'compact'"
    item-color="var(--input-bg)"
    ></v-autocomplete>
</template>

<script setup>
import { defineProps } from 'vue';

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
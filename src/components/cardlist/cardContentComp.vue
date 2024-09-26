<template>
    <div>
        {{ props.selectedApt }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    selectedApt: {
        type: Number,
        required: false,
        default: null,
    }
})

</script>

<style scoped>
    
</style>
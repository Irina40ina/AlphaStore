<template>
    <p>        
        <v-skeleton-loader
        v-if="props.loading"
        type="list-item"
        height="25"
        ></v-skeleton-loader>
        <span v-else>
            <slot></slot>
        </span>
    </p>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    loading: {
        type: Boolean,
        required: false,
        default: false,
    }
});

</script>
<style>
    
</style>
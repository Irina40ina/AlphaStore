<template>
    <div class="d-flex flex-md-column w-100">
        <v-radio-group inline @update:model-value="(e) => emits('update:modelValue', e)">
            <v-radio 
            :label="props.label_1" 
            color="purple-darken-2" 
            density="compact" 
            :value="true"
            ></v-radio>

            <v-radio 
            :label="props.label_2" 
            color="purple-darken-2" 
            density="compact" 
            :value="false"
            ></v-radio>
        </v-radio-group>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
    label_1: {
        type: String,
        required: true,
        default: '',
    },
    label_2: {
        type: String,
        required: true,
        default: '',
    },
}) 
</script>
<style scoped>
    
</style>
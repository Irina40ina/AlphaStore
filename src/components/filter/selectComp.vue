<template>
    <div class="d-flex flex-md-column w-100">
        <v-select
            :label="props.lable"
            :items="props.items"
            @update:model-value="(e) => emits('update:modelValue', e)"
            bg-color="purple-lighten-4"
        ></v-select>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    lable: {
        type: String,
        required: true,
        defaulte: '',
    },
    items: {
        type: Array,
        required: false,
        defaulte: () => [],
    }
})
const emits = defineEmits(['update:modelValue']);

</script>
<style scoped>
    
</style>
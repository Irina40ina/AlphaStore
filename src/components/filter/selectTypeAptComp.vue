<template>
    <div class="type-apt-filter">
        <v-select
            :label="props.lable"
            :items="props.items"
            @update:model-value="(e) => emits('update:modelValue', e)"
            bg-color="purple-lighten-4"
            v-model="selectedValue"
            density="compact"
            :disabled="props.disabled"
            :item-title="'value'"
            :item-value="'key'"
        ></v-select>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, ref, onMounted, watch } from 'vue';
const selectedValue = ref('');
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
    },
    modelValue: {
        type: String,
        required: false,
        default: '',
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    }
})
const emits = defineEmits(['update:modelValue']);
watch(() => props.modelValue, (newValue) => {
    selectedValue.value = newValue;
});
onMounted(() => {
        selectedValue.value = props.modelValue;
});
</script>
<style scoped>
    .type-apt-filter {
        display: none;
    }
</style>
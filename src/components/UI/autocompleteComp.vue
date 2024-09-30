<template>
    <v-text-field
    variant="solo"
    clearable
    hide-details
    placeholder="Поиск.."
    :density="'compact'"
    @keyup.enter="confirm"
    :value="props.modelValue"
    @update:model-value="(value) => emit('update:modelValue', value)"
    >
        <template #append-inner>
            <v-btn 
            v-if="props.icon"
            density="compact" 
            :border="false" 
            color="white"
            :elevation="0" 
            :icon="props.icon"
            @click="confirm"
            >
                <template #default>
                    <v-icon color="grey-darken-1" :icon="props.icon"></v-icon>
                </template>
            </v-btn>
        </template>
    </v-text-field>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['confirm', 'update:modelValue']);
const props = defineProps({
    icon: {
        type: String,
        default: undefined,
        required: false,
    },
    modelValue: {
        type: String,
        default: '',
        required: false,
    }

});

function confirm() {
    emit('confirm');
}
</script>

<style scoped>
    
</style>
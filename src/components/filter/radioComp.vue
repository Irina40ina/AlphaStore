<template>
    <div class="d-flex flex-md-column w-100">
        <v-radio-group inline @update:model-value="(e) => emits('update:modelValue', e)" v-model="radioValue">
            <v-radio 
            :label="props.label_1" 
            :color="'purple-darken-2'" 
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
import { defineProps, defineEmits, ref, onMounted, watch } from 'vue';

// ##############################  Emits  ##############################
const emits = defineEmits(['update:modelValue']);


// ##############################  Props  ##############################
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
    modelValue: {
        type: Boolean,
        required: false,
        default: null,
    },
}) 

// ##############################  Data  ##############################
const radioValue = ref(null);

// ##############################  WATCH  ##############################
watch(() => props.modelValue, (newValue, oldValue) => {
    if(newValue && oldValue === null) {
        radioValue.value = props.modelValue;
    }
});


// ##############################  LIFECYCLE HOOKS  ##############################
onMounted(() => {
    if(props.modelValue !== null) {
        radioValue.value = props.modelValue;
    }
});
</script>
<style scoped>
    
</style>
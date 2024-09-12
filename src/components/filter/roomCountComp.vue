<template>
    <div class="d-flex flex-md-column w-100">
        <h4 class="room-count-title">Количество комнат</h4>
        <v-checkbox 
        label="Студия" 
        :value="0" 
        density="compact" 
        hide-details 
        color="purple-darken-2" 
        v-model="firstValue"
        @update:model-value="(e) => handlerUpdateValue(e, firstValue.value)"
        ></v-checkbox>

        <v-checkbox 
        label="1 комната" 
        :value="1" 
        density="compact" 
        hide-details 
        v-model="secondValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, secondValue.value)"
        ></v-checkbox>

        <v-checkbox 
        label="2 комнаты" 
        :value="2" 
        density="compact" 
        hide-details 
        v-model="thirdValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, thirdValue.value)"
        ></v-checkbox>

        <v-checkbox 
        label="3 комнаты" 
        :value="3" 
        density="compact" 
        hide-details 
        v-model="fourthValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, fourthValue.value)"
        ></v-checkbox>

        <v-checkbox 
        label="более 3-х комнат" 
        :value="4" 
        density="compact" 
        hide-details 
        v-model="fifthValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, fifthValue.value)"
        ></v-checkbox>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['update:modelValue']);

const firstValue = ref(false); 
const secondValue = ref(false); 
const thirdValue = ref(false); 
const fourthValue = ref(false); 
const fifthValue = ref(false); 
const readyValues = ref([]);

function handlerUpdateValue(value, index) {
    if(value !== false && !readyValues.value.includes(value)) {
        readyValues.value.splice(index, 0, value);
    } else if(value === false) {
        readyValues.value.splice(index, 1); 
    }  
    emits('update:modelValue', readyValues);
    }


</script>

<style scoped>
.room-count-title {
    color: var(--fg-color);
    font-family: var(--basic-font);
    margin-bottom: .8rem;
}
</style>
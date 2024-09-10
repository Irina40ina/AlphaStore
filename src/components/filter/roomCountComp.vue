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
        @update:model-value="handlerUpdateValue"
        ></v-checkbox>

        <v-checkbox 
        label="1 комната" 
        :value="1" 
        density="compact" 
        hide-details 
        v-model="secondValue"
        color="purple-darken-2"
        @update:model-value="handlerUpdateValue"
        ></v-checkbox>

        <v-checkbox 
        label="2 комнаты" 
        :value="2" 
        density="compact" 
        hide-details 
        v-model="thirdValue"
        color="purple-darken-2"
        @update:model-value="handlerUpdateValue"
        ></v-checkbox>

        <v-checkbox 
        label="3 комнаты" 
        :value="3" 
        density="compact" 
        hide-details 
        v-model="fourthValue"
        color="purple-darken-2"
        @update:model-value="handlerUpdateValue"
        ></v-checkbox>

        <v-checkbox 
        label="более 3-х комнат" 
        :value="4" 
        density="compact" 
        hide-details 
        v-model="fifthValue"
        color="purple-darken-2"
        @update:model-value="handlerUpdateValue"
        ></v-checkbox>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const firstValue = ref(false); 
const secondValue = ref(false); 
const thirdValue = ref(false); 
const fourthValue = ref(false); 
const fifthValue = ref(false); 
const readyValues = ref([]);

function handlerUpdateValue(value, initialValue) {
    if(!readyValues.value.includes(value)) {
        if(value === false) readyValues.value = readyValues.value.filter((entry) => entry !== value); 
        else {
            readyValues.value.push(value);
        }
    }
    console.log(readyValues.value);
}

</script>

<style scoped>
.room-count-title {
    color: var(--fg-color);
    font-family: var(--basic-font);
    margin-bottom: .8rem;
}
</style>
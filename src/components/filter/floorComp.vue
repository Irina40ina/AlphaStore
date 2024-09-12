<template>
    <div class="d-flex flex-md-column w-100">
        
        <div class="d-flex w-100">
            <v-text-field 
            :rules="changeFloorFromRules" 
            v-model="floorFrom" 
            @update:modelValue="(e) => selectFloor(e, 0)" 
            density="compact" 
            type="number" 
            min="1" 
            max="25" 
            step="1" 
            hide-details 
            placeholder="От"
            persistent-placeholder 
            ></v-text-field>

            <v-text-field 
            :rules="changeFloorToRules" 
            v-model="floorTo" 
            @update:modelValue="(e) => selectFloor(e, 1)" 
            density="compact" 
            type="number" 
            min="1" 
            max="25" 
            step="1" 
            hide-details 
            placeholder="До"
            ></v-text-field>
        </div>
    </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
const emits = defineEmits(['update:modelValue'])

const floorFrom = ref('');
const floorTo = ref('');
const readyValues = ref([]);
const changeFloorFromRules = [
    v => (v >= 1 && v <= 24) || 'Этаж должен находиться в диапазоне от 1 до 24',
]
const changeFloorToRules = [
    v => (v > floorFrom.value),
]

function selectFloor(e, index) {

    if(e !== '' && readyValues.value[index] !== e) {
        readyValues.value.splice(index, 1, e);
    } else if(e === '') {
        readyValues.value.splice(index, 1);
    }
    emits('update:modelValue', readyValues);

}
</script>
<style scoped>


</style>
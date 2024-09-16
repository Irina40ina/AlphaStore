<template>
    <div class="d-flex flex-md-column w-100">
        
        <div class="d-flex w-100">
            <v-text-field 
            :rules="changeFloorRules" 
            v-model="floorFrom" 
            @update:modelValue="(e) => selectFloor(e, 0)" 
            density="compact" 
            type="number" 
            :min="min" 
            :max="max" 
            step="1" 
            placeholder="От"
            persistent-placeholder 
            ></v-text-field>

            <v-text-field 
            :rules="changeFloorRules" 
            v-model="floorTo" 
            @update:modelValue="(e) => selectFloor(e, 1)" 
            density="compact" 
            type="number" 
            :min="min" 
            :max="max" 
            step="1" 
            placeholder="До"
            ></v-text-field>
        </div>
    </div>
</template>
<script setup>
import { ref, defineEmits, defineProps, onMounted, watch } from 'vue';
const emits = defineEmits(['update:modelValue'])

// ##############################  Props  ##############################
const props = defineProps({
    modelValue: {
        type: Array,
        required: false,
        default: () => [],
    }
});

// ##############################  Data  ##############################
const min = ref(1);
const max = ref(30);
const floorFrom = ref('');
const floorTo = ref('');
const readyValues = ref([]);

// ##############################  Composables  ##############################
const changeFloorRules = [
    v => (v >= min.value) || `Мин. ${min.value}`,
    v => (v <= max.value) || `Макc. ${max.value}`,
];

// ##############################  Watch  ##############################
watch(() => props.modelValue.length, (newValue, oldValue) => {
    if(newValue > 0 && !oldValue) {
        initfloor();
    }
});

 // ##############################  Metods  ##############################
function selectFloor(e, initialValue) {
    let value = +e;
    readyValues.value[initialValue] = value;
    if(!readyValues.value[0]) {
        floorFrom.value = 1;
        readyValues.value[0] = 1;
    }
    emits('update:modelValue', readyValues.value);
}

function initfloor() {
    try {
        if(props.modelValue.length) { 
            floorFrom.value = props.modelValue[0];
            floorTo.value = props.modelValue[1];
        }
    } catch (err) {
        console.error(import.meta.url, ': initfloor => ', err)
    }
}
onMounted(() => {
    initfloor();
});
</script>
<style scoped>


</style>
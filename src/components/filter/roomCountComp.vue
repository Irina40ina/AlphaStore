<template>
    <div class="d-flex flex-md-column w-100">
        <h4 class="room-count-title">Количество комнат</h4>

        <v-checkbox 
        label="1 комната" 
        :value="1" 
        density="compact" 
        hide-details 
        v-model="firstValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, 1)"
        ></v-checkbox>

        <v-checkbox 
        label="2 комнаты" 
        :value="2" 
        density="compact" 
        hide-details 
        v-model="secondValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, 2)"
        ></v-checkbox>

        <v-checkbox 
        label="3 комнаты" 
        :value="3" 
        density="compact" 
        hide-details 
        v-model="thirdValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, 3)"
        ></v-checkbox>

        <v-checkbox 
        label="более 3-х комнат" 
        :value="4" 
        density="compact" 
        hide-details 
        v-model="fourthValue"
        color="purple-darken-2"
        @update:model-value="(e) => handlerUpdateValue(e, 4)"
        ></v-checkbox>
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, onMounted, watch } from 'vue';

// ##############################  Emits  ##############################
const emits = defineEmits(['update:modelValue']);


// ##############################  Props  ##############################
const props = defineProps({
    modelValue: {
        type: Array,
        required: false,
        default: () => [],
    }
});

// ##############################  Data  ##############################
const firstValue = ref(false); 
const secondValue = ref(false); 
const thirdValue = ref(false); 
const fourthValue = ref(false); 
const readyValues = ref([]);


// ##############################  Methods  ##############################
function handlerUpdateValue(value, initialValue) {
    // Добавление
    if(value !== false && !readyValues.value.includes(value)) {
        readyValues.value.push(value);
    } 
    // Удаление
    else {
        readyValues.value = readyValues.value.filter((el) => el !== initialValue);
    }
    emits('update:modelValue', readyValues);
}

function initRoomCount() {
    try {
        if(props.modelValue.length) { 
            props.modelValue.forEach((el) => {
                if(el === 1) firstValue.value = el;
                if(el === 2) secondValue.value = el;
                if(el === 3) thirdValue.value = el;
                if(el === 4) fourthValue.value = el;
            });
        }
    } catch (err) {
        console.error(import.meta.url, ': initRoomCount => ', err)
    }

}

// ##############################  Watch  ##############################
watch(() => props.modelValue.length, (newValue, oldValue) => {
    if(newValue > 0 && !oldValue) {
        initRoomCount();
    }
});

// ##############################  LifeCycle Hooks  ##############################
onMounted(() => {
    initRoomCount();
});


</script>

<style scoped>
.room-count-title {
    color: var(--fg-color);
    font-family: var(--basic-font);
    margin-bottom: .8rem;
}
</style>
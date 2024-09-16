<template>
    <div class="d-flex flex-md-column w-100">
        <h4 class="cost-title">Стоимость (руб.)</h4>
        <v-range-slider 
        density="compact" 
        :min="min"
        :max="max"
        thumb-color="var(--thumb-color)" 
        track-color="var(--track-color)" 
        track-fill-color="var(--track-fill-color)" 
        thumb-size="15"
        :step="step"
        :thumb-label="true"
        :strict="false"
        tick-size="2"
        :model-value="props.modelValue"
        @update:model-value="(e) => emits('update:modelValue', e)"
        ></v-range-slider>
    </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const step = ref(10000);
const min = ref(0);
const max = ref(200000);

const props = defineProps({
    modelValue: {
        type: Array,
        required: false,
        default: () => [],
    }
});
const emits = defineEmits(['update:modelValue']);

</script>
<style scoped>
.cost-title {
    color: var(--fg-color);
    font-family: var(--basic-font);
    margin-bottom: .8rem;
}
</style>
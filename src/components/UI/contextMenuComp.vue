<template>
    <v-menu activator="#menu-activator" :close-on-content-click="true" height="max-content">
        <v-list>
            <v-list-item
            v-for="(item, index) in props.items"
            :key="index"
            :value="index"
            density="compact"
            min-height="33px"
            @click="emits('selectItem', index)"
            >
                <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
        required: true, 
    }
});
const emits = defineEmits(['selectItem'])
</script>
<style scoped>
    
</style>
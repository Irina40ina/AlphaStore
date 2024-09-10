<template>
    <div class="card-container elevation-3 rounded"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
        <v-carousel :show-arrows="false" class="w-100 h-75" :cycle="isFocused" :continuous="isFocused" :interval="1500">
            <v-carousel-item
            v-for="(item,i) in props.aptData?.images"
            :key="i"
            :src="item"
            cover
            ></v-carousel-item>
        </v-carousel>
        <v-chip class="mt-2 mr-auto ml-2" size="small" prepend-icon="mdi-currency-rub" variant="outlined" color="var(--basic-colorful-fg)">
            {{ props.aptData?.cost }}
        </v-chip>
        <div class="w-100 mt-1 mb-2">
            <h2 class="card-title">{{ computeAptTitle }}</h2>
        </div>
        <div class="w-100 d-flex justify-end">
            <v-btn class="text-caption" color="var(--icon-color)" append-icon="mdi-open-in-new" variant="outlined" size="small" :elevation="2">Перейти</v-btn>
        </div>
    </div>

</template>

<script setup>
import { defineProps, computed, ref } from 'vue';

// #######################################   PROPS  ###############################
const props = defineProps({
    aptData: {
        type: Object,
        default: null,
        required: false, 
    }
});

// #######################################   DATA  ###############################
const isFocused = ref(false);

// #######################################   METHODS  ###############################
const handleMouseEnter = () => {
      isFocused.value = true;
    };
const handleMouseLeave = () => {
    isFocused.value = false;
}

// #######################################   COMPUTED  ###############################
const computeAptTitle = computed(() => {
    if(props.aptData) {
        const roomCount = (props.aptData?.roomCount !== 0)? props.aptData?.roomCount + 'к., ' : ', ';
        const aptArea = props.aptData?.aptArea + 'кв.м, ';
        const floorInfo = props.aptData?.floor+'/'+props.aptData?.totalFloor + 'эт.';
        const aptType = props.aptData?.aptType;
        return aptType + ' ' + roomCount + aptArea + floorInfo;
    } 
    else {
        return '';
    }
})

</script>

<style scoped>
.card-container {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* box-shadow: var(--basic-shadow); */
    padding: .5rem .3rem;
} 
.card-title {
    text-align: center;
    color: var(--card-title-fg);
    font-size: 16px;
    font-family: var(--basic-font);
}
</style>    
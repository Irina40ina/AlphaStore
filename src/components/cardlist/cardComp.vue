<template>
    <div class="card-container elevation-3 rounded">
        <v-carousel :show-arrows="false" class="w-100 h-75" :cycle="true" :continuous="true">
            <v-carousel-item
            v-for="(item,i) in items"
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
import { reactive, defineProps, computed } from 'vue';

// #######################################   PROPS  ###############################
const props = defineProps({
    aptData: {
        type: Object,
        default: null,
        required: false, 
    }
});

// #######################################   DATA  ###############################
const items = reactive([
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fremont-f.ru%2Fupload%2Fiblock%2F597%2Fdizayn-interyera-kvartiry-v-sovremennom-stile-gostinaja-2.jpg&f=1&nofb=1&ipt=2eb8712bc4a7115cee79fa3fb412f43f2fc6b557d522feb154f44df45da92661&ipo=images',
    'https://restroymaster.ru/assets/images/articles/kvartira_v_svetlyh_tonah_variant_1.jpg',
    'https://oneandhome.ru/sites/default/files/blog2022/sovremennaya-kvartira-modnie-resheniya-i-stilnie-idei-02.JPG',
    'https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen2-1536.jpg',
    'https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/12/236007_otkrytaya-gostinaya-s-modulnym-divanom-zillis.jpg',
    'https://n1s2.hsmedia.ru/70/94/07/709407b14521c7c9b5c5fc2d3fe8e13d/728x455_1_faebe1a3df4cdfc786da2e0fae11bcf2@2560x1600_0xac120004_5402452501676025639.jpeg',
    'https://m-strana.ru/upload/iblock/64d/64d8bbdde4a219c545d21b629826f1cf.jpg',
]);

// #######################################   METHODS  ###############################


// #######################################   COMPUTED  ###############################
const computeAptTitle = computed(() => {
    if(props.aptData) {
        const roomCount = props.aptData?.roomCount + 'к., ';
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
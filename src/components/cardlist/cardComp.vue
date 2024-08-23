<template>
    <div class="card-container">
        <Carousel :value="items" :numVisible="1" :numScroll="1">
            <template #item="slotProps">
                <Image :src="slotProps.data" alt="Image" class="w-100"/>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import Image from 'primevue/image';
import { reactive } from 'vue';
const items = reactive([
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fremont-f.ru%2Fupload%2Fiblock%2F597%2Fdizayn-interyera-kvartiry-v-sovremennom-stile-gostinaja-2.jpg&f=1&nofb=1&ipt=2eb8712bc4a7115cee79fa3fb412f43f2fc6b557d522feb154f44df45da92661&ipo=images',
    'https://restroymaster.ru/assets/images/articles/kvartira_v_svetlyh_tonah_variant_1.jpg',
    'https://oneandhome.ru/sites/default/files/blog2022/sovremennaya-kvartira-modnie-resheniya-i-stilnie-idei-02.JPG',
    'https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen2-1536.jpg',
    'https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/12/236007_otkrytaya-gostinaya-s-modulnym-divanom-zillis.jpg',
    'https://n1s2.hsmedia.ru/70/94/07/709407b14521c7c9b5c5fc2d3fe8e13d/728x455_1_faebe1a3df4cdfc786da2e0fae11bcf2@2560x1600_0xac120004_5402452501676025639.jpeg',
    'https://m-strana.ru/upload/iblock/64d/64d8bbdde4a219c545d21b629826f1cf.jpg',
]);

</script>

<style scoped>
.card-container {
    width: 100%;
    height: 250px;
    
} 
</style>    
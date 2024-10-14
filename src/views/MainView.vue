<template>
    <div class="main-container">
        <!-- ШАПКА -->
        <header class="header elevation-2 d-flex flex-column justify-start align-center px-5">
            <div class="header-top d-flex justify-start align-center w-100">
                <h1 class="logo w-25">Alpha Store</h1> 
                <!-- Поиск -->
                <div class="search-block w-50 d-flex align-center">
                    <autocompleteComp v-model="searchQuery" @confirm="handlerSearchApts()" :icon="'mdi-magnify'"/>
                </div>
                <div class="action w-25 h-100 d-flex align-center justify-end ga-2">
                    <!-- Смена темы -->
                    <v-switch class="h-100 mr-2" color="var(--switch-color)" @update:model-value="(e) => console.log(e)">
                        <template #prepend>
                            <v-icon class="mr-1" color="var(--icon-color)" icon="mdi-brightness-6" size="small"></v-icon>
                        </template>
                    </v-switch>
                    <!-- Значок корзины -->
                    <v-btn color="var(--icon-color)" variant="outlined" icon="mdi-cart-outline" density="comfortable">
                    </v-btn>
                    <!-- Значок профиля -->
                    <v-btn color="var(--icon-color)" variant="outlined" icon="mdi-account" density="comfortable" @click="goToAuthForm">
                    </v-btn>
                </div>
            </div>
            
            <!-- Раздел навигации -->
            <nav class="navigation d-flex justify-start align-center w-100">
                <ul class="nav-list d-flex align-center">
                    <li class="nav-item" @click="selectApt('kvartira')">Квартира</li>
                    <li class="nav-item" @click="selectApt('kottedg')">Коттедж</li>
                    <li class="nav-item" @click="selectApt('dom')">Дом</li>
                    <li class="nav-item" @click="selectApt('hostel')">Хостел</li>
                    <li class="nav-item" @click="selectApt('komnata')">Комната</li>
                    <li class="nav-item" @click="selectApt('module')">Модуль</li>
                </ul>
            </nav>
        </header>

        <!-- БОКОВАЯ ПАНЕЛЬ -->
        <aside class="aside">
            <filterComp></filterComp>
        </aside>

        <!-- ОСНОВНОЙ КОНТЕНТ -->
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import autocompleteComp from '@/components/UI/autocompleteComp.vue';
import filterComp from '@/components/filter/filterComp.vue';
import { ref, computed } from 'vue';
import useMainStore from '@/store/index.js';
import { useRouter, useRoute } from 'vue-router';
import { searchApts } from '@/api/aptApi';

// ##############################  DATA  ##############################
const searchQuery = ref('');

// ##############################  ComposaBles  ##############################
const router = useRouter();
const route = useRoute();
const store = useMainStore();

const bundleSearchParams = computed(() => {
    return { query: searchQuery.value, aptType: store.selectedAptMatches[route.params.selectedTypeApt] };
})

// ##############################  METHODS  ##############################
const goToAuthForm = () => {
    router.push('/auth');  
};

async function selectApt(selectedTypeApt) {
    await router.push({ name: 'selectedTypeApt', params: { selectedTypeApt }, query: { ...route.query } });
}
async function handlerSearchApts() {
    store.apartments = await searchApts(bundleSearchParams.value);
    console.log(store.apartments)
}
</script>

<style scoped>
.block {
    width: 200px;
    height: 300px;
    border: 1px solid black;
}
.main-container {
    width: 100%;
    min-height: 100vh;
    height: max-content;
    /* overflow: auto; */
    position: relative;
    display: grid;
    grid-template-areas: 
        "header header"
        "aside main";
    grid-template-rows: auto 1fr;
    grid-template-columns: 20% 1fr;
    gap: 1rem;
    padding: 0.5rem;
}
.header {
    grid-area: header;
    width: 100%;
    height: 90px;
    position: sticky;
    top: 0;
    padding: .1rem 0;
    background-color: var(--basic-bg);
    z-index: 900;
    border-radius: var(--basic-radius);
}
.header-top {
    height: 70%;
}
.logo {
    font-family: var(--font-preview);
    font-weight: 600;
    color: var(--basic-colorful-fg);
    user-select: none;
    cursor: pointer;
    transition: all .7s ease;
}
.logo:hover {
    color: var(--basic-colorful-hover-fg);
    transition: all .7s ease;
}

.navigation {
    height: 30%;
}
.nav-list {
    list-style: none;
}
.nav-item {
    position: relative;
    top: 0;
    background-color: var(--nav-item-bg);
    height: 100%;
    padding: 0 .5rem;
    border-radius: var(--nav-item-round);
    box-shadow: var(--basic-shadow);
    transition: all .7s ease;
    user-select: none;
    cursor: pointer;
}
.nav-item + .nav-item {
    margin-left: 0.3rem;
}
.nav-item:hover {
    transition: all .7s ease;
    background-color: var(--nav-item-hover-bg);
}
.aside {
    grid-area: aside;
    background-color: var(--basic-bg);
    border-radius: var(--basic-radius);
    box-shadow: var(--basic-shadow);
}
.main {
    grid-area: main;
    background-color: var(--basic-bg);
    border-radius: var(--basic-radius);
    box-shadow: var(--basic-shadow);
}

/* ########################  MEDIA  ########################## */

/* #####################   940px   #####################*/
@media (max-width: 940px) {
    .search-block {
        width: 35% !important;
    }
    .header-top {
        justify-content: space-between !important;
    }
}

/* #####################   780px   #####################*/
@media (max-width: 780px) {
    .logo {
        width: max-content !important;
        font-size: 1.5rem;
    }
}
/* #####################   690px   #####################*/
@media (max-width: 690px) {
    .action {
        width: 140px !important;
        gap: 3px !important;
    }
}
/* #####################   520px   #####################*/
@media (max-width: 520px) {
    .search-block {
        width: 25% !important;
    }
    .navigation {
        display: none !important;
    }
    .header {
        height: max-content !important;
    }
    .header-top {
        height: 100% !important;
    }
}
/* #####################   460px   #####################*/
@media (max-width: 460px) {
    .logo {
        position: absolute !important;
        top: 0;
        left: 0;
    }
    .header-top {
    }
}
</style>
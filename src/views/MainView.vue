<template>
    <div class="main-container">
        <!-- ШАПКА -->
        <header class="header elevation-2 d-flex flex-column justify-start align-center px-5">
            <div class="header-top d-flex justify-start align-center w-100">
                <h1 v-show="!isActive" class="logo w-25">Alpha Store</h1> 
                <!-- Burger -->
                <v-btn 
                :class="{'burger-btn-media-active': !isActive, 'burger-btn': isActive}"
                id="menu-activator" 
                color="var(--basic-fg)" 
                variant="outlined" 
                icon="mdi-menu" 
                density="comfortable"
                >
                </v-btn>
                <!-- Контекстное меню -->
                <contextMenuComp :items="menuItems" @select-item="changeContextMenuItem"/>
                <!-- Поиск -->
                <div :class="{'search-block': !isActive, 'search-block-active': isActive}">
                    <autocompleteComp v-model="searchQuery" @confirm="handlerSearchApts()" :icon="'mdi-magnify'"/>
                </div>
                <div class="action w-25 h-100 d-flex align-center justify-end ga-2">
                    <!-- Кнопка отмены поиска -->
                    <v-btn 
                    :class="{'cancel-btn': !isActive, 'cancel-btn-active': isActive}" 
                    icon="mdi-close-circle"
                    color="var(--icon-color)" 
                    variant="plain" 
                    @click="isActive = false"
                    >
                    </v-btn>
                    <!-- Смена темы -->
                    <v-switch class="h-100 mr-2" color="var(--switch-color)" @update:model-value="(e) => console.log(e)">
                        <template #prepend>
                            <v-icon class="mr-1" color="var(--icon-color)" icon="mdi-brightness-6" size="small"></v-icon>
                        </template>
                    </v-switch>
                    <!-- Значок корзины -->
                    <v-btn 
                    class="basket-btn" 
                    color="var(--icon-color)" 
                    variant="outlined" 
                    icon="mdi-cart-outline" 
                    density="comfortable">
                    </v-btn>
                    <!-- Значок профиля -->
                    <v-btn 
                    class="profile-btn" 
                    color="var(--icon-color)" 
                    variant="outlined" 
                    icon="mdi-account" 
                    density="comfortable" 
                    @click="goToAuthForm"
                    >
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
import contextMenuComp from '@/components/UI/contextMenuComp.vue';

// ##############################  DATA  ##############################
const searchQuery = ref('');
const menuItems = ref(['Поиск', 'Авторизация', 'Корзина']);
const isActive = ref(false);

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
    console.log(selectedTypeApt, {...route.params})
}
async function handlerSearchApts() {
    store.apartments = await searchApts(bundleSearchParams.value);
    console.log(store.apartments)
}
function changeContextMenuItem(index) {
    console.log(index)
    if(index == 0) {
            isActive.value = true;
            console.log(isActive.value)
    }
    if(index == 1) {
        goToAuthForm();
    }
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
.search-block {
    width: 50%;
    display: flex;
    align-items: center;
}
.search-block-active {
    width: 80%;
    display: flex;
    align-items: center;
}
.burger-btn-media-active {
    display: none;
}
.burger-btn {
    display: none;
}
.cancel-btn {
    display: none;
}
.cancel-btn-active {
    width: 5%;
}


</style>
<template>
    <div class="main-container">
        <!-- ШАПКА -->
        <header class="header elevation-2 d-flex flex-column justify-start align-center px-5">
            <div class="header-top d-flex justify-start align-center w-100">
                <h1 class="logo w-25">Alpha Store</h1> 
                <!-- Поиск -->
                <div class="search-block w-50 d-flex align-center">
                    <autocompleteComp :items="['New York', 'Krasnodar ']" />
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
                    <li class="nav-item">Квартира</li>
                    <li class="nav-item">Коттедж</li>
                    <li class="nav-item">Дом</li>
                    <li class="nav-item">Хостел</li>
                    <li class="nav-item">Комната</li>
                    <li class="nav-item">Модуль</li>
                </ul>
            </nav>
        </header>
        

        <!-- БОКОВАЯ ПАНЕЛЬ -->
        <aside class="aside">

        </aside>

        <!-- ОСНОВНОЙ КОНТЕНТ -->
        <main class="main">
            <div class="product-list">
                <cardComp v-for="apt in apartments" :key="apt" :apt-data="apt"> </cardComp>
            </div>
        </main>
    </div>
</template>

<script setup>
import autocompleteComp from '@/components/UI/autocompleteComp.vue';
import cardComp from '@/components/cardlist/cardComp.vue';
import { fetchApts } from '@/api/aptApi.js';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const apartments = ref([]);

const goToAuthForm = () => {
      router.push('/auth');  
    };

onMounted(async() => {
    apartments.value = await fetchApts();
})
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
.product-list {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 250px);
    justify-items: center;
    gap: 0.5rem;
}
</style>
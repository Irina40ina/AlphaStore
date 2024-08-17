<template>
    <div class="main-container">
        <header class="header">
            <v-btn :prepend-icon="`mdi-access-point`" :loading="true">
                BUTTON
            </v-btn>
            <v-chip
            closable
            prepend-icon="mdi-access-point"
            variant="outlined"
            @click:close="console.log('CLOSE')"
            >
            Chip
            </v-chip>
        </header>
        <aside class="aside">

        </aside>
        <main class="main">
            <div class="product-list">
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
            </div>
        </main>
    </div>
</template>

<script setup>
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
    min-height: 90px;
    height: max-content;
    position: sticky;
    top: 0;
    border: 1px solid black;
    z-index: 900;
}
.aside {
    grid-area: aside;
    border: 1px solid black;
}
.main {
    grid-area: main;
    border: 1px solid black;
    background-color: var(--basic-bg);
}
.product-list {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
}
</style>
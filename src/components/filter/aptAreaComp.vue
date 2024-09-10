<template>
    <div class="d-flex flex-md-column w-100 px-2">
        <h4 class="apt-area-title">Общая площадь м<sup>2</sup></h4>
        <v-range-slider 
        density="compact" 
        thumb-color="var(--thumb-color)" 
        track-color="var(--track-color)" 
        track-fill-color="var(--track-fill-color)" 
        thumb-size="15"
        step="10"
        thumb-label="true"
        strict="false"
        tick-size="2"
        ></v-range-slider>
    </div>
</template>
<script setup>

</script>
<style scoped>
.apt-area-title {
    color: var(--fg-color);
    font-family: var(--basic-font);
    margin-bottom: .8rem;
}
</style>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import EventService from '../services/EventService';
import HeroCarousel from '../components/HeroCarousel.vue';
import IconButton from '../components/IconButton.vue';
import TopBanner from '../components/TopBanner.vue';

// const movie = (await EventService.getNowPlaying()).data;

const selected: Ref<string | undefined> = ref(undefined);
</script>

<template>
  <div class="page">
    <TopBanner />
  </div>
</template>

<style scoped>
.page {
  height: 120vh;
  background-image: url(../assets/beer-collage.jpeg);
  background-attachment: fixed;
}
</style>

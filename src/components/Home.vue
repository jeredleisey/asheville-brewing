<script setup lang="ts">
import EventService from '../services/EventService';
import HeroCarousel from './HeroCarousel.vue';

const movie = (await EventService.getNowPlaying()).data;
</script>

<template>
  <!-- <div class="container">here we go</div> -->
  <!-- <div class="api">{{ movie }}</div>
  <img
    class="backdrop"
    :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
    alt="Minions: The Rise of Gru"
  /> -->
  <HeroCarousel />
</template>

<style scoped>
.backdrop {
  width: 1000px;
}
</style>

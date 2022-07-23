<script setup lang="ts">
const socialIconsRootUrl =
  'https://www.ashevillebrewing.com/wp-content/uploads/2016';
</script>

<template>
  <div class="bg-white">
    <div class="flex container mx-auto items-center h-[48.56px]">
      <div
        class="flex flex-grow py-1 pr-3 text-pizza space-x-3 justify-end font-corbel"
      >
        <a href="#"> About ABC </a>
        <a href="#"> Meet Our Staff </a>
        <a href="#"> Contact </a>
        <a href="#"> Buy Our Beer </a>
        <a href="#"> Gift Cards </a>
      </div>
      <div class="flex flex-none p-1 space-x-1">
        <img class="w-8" :src="socialIconsRootUrl + '/05/twitter.svg'" />
        <img class="w-8" :src="socialIconsRootUrl + '/05/instagram.svg'" />
        <img class="w-8" :src="socialIconsRootUrl + '/05/facebook.svg'" />
        <img class="w-8" :src="socialIconsRootUrl + '/10/pinterest.svg'" />
      </div>
    </div>
  </div>
  <div class="banner-mid h-[200px] border-b-[20px] border-pizza">
    <img
      class="absolute left-1/2 top-[143px] transform -translate-x-1/2 w-[300px]"
      src="../assets/outlined-pizza.png"
    />
  </div>
  <div
    class="nav flex py-[15px] border-b-4 uppercase text-[1.2em] font-bold text-pizza border-pizza bg-white"
  >
    <div class="left-nav flex mx-auto space-x-6">
      <div class="nav-item">Locations</div>
      <div class="nav-item">Brews</div>
      <div class="nav-item">Pub Food</div>
    </div>
    <div class="right-nav flex mx-auto space-x-6">
      <div class="nav-item">Movies</div>
      <div class="nav-item">Shop</div>
      <div class="nav-item">News</div>
    </div>
  </div>
</template>

<style scoped>
.banner-mid {
  background-image: url(../assets/space_paint.jpeg);
  background-size: cover;
  background-position: center;
}
</style>

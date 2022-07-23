<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label?: string;
}

const { label = 'nothing set' } = defineProps<Props>();
</script>

<template>
  <button class="button">
    <span class="button__text">{{ label }}</span>
    <span class="button__icon">
      <ion-icon name="cloud-download-outline"></ion-icon>
    </span>
  </button>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.button {
  display: flex;
  height: 50px;
  padding: 0;
  background: #009578;
  border: none;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 10ms ease-in;
}

button:hover {
  background: #008168;
}

button:active {
  background: #006e58;
  transform: scale(0.95);
}

.button__text,
.button__icon {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  color: rgb(226, 226, 226);
}

.button__icon {
  font-size: 1.5em;
  background: rgb(0, 0, 0, 0.08);
}
</style>

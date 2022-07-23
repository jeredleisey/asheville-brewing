<script setup lang="ts">
import { ref } from 'vue';

const people = ref([
  { name: 'Jered Leisey', email: 'jered.leisey@gmail.com' },
  { name: 'Aesop Rock', email: 'aesop@gmail.com' },
  { name: 'Snoop Dogg', email: 'snoop@gmail.com' },
]);
</script>

<template>
  <div class="mt-6">
    <button
      class="flex mx-auto transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-2 text-slate-50 px-4 py-1"
    >
      Save Changes
    </button>
  </div>
  <div class="">
    <div
      class="m-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
    >
      <div class="shrink-0">
        <img class="h-12 w-12" src="../assets/vue.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <h4 class="text-xl font-light text-black">ChitChat</h4>
        <p class="text-slate-500">You have a new message!</p>
      </div>
    </div>
    <div
      class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
    >
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="../assets/erin-lindford.jpeg"
        alt="Woman's Face"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Erin Lindford</p>
          <p class="text-slate-500 font-medium">Product Engineer</p>
        </div>
        <button
          class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Message
        </button>
      </div>
    </div>
    <div class="m-8 max-w-sm mx-auto shadow-lg rounded-xl">
      <ul role="list" class="p-6 divide-y divide-slate-200">
        <li
          v-for="person in people"
          class="flex py-4 first:pt-0 last:pb-0 odd:bg-slate-50"
        >
          <img
            src="../assets/erin-lindford.jpeg"
            alt=""
            class="h-10 w-10 rounded-full"
          />
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">{{ person.name }}</p>
            <p class="text-sm text-slate-500 truncate">{{ person.email }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="m-8 p-6 max-w-sm mx-auto shadow-lg rounded-xl">
      <form>
        <label class="block mb-2">
          <span class="block text-sm font-medium text-slate-700">Username</span>
          <input
            type="text"
            value="tbone"
            disabled
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label class="block mb-2">
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            class="mt-1 block peer w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <p class="mt-2 peer-valid:hidden text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>
      </form>
    </div>
  </div>
</template>

<style></style>

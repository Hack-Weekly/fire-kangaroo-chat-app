<script setup>
import { generateUUID } from '../composables/generateUUID'
const amount = Math.floor(Math.random() * 100) + 1
</script>
<template>
  <li class="menu-title p-[1rem] select-none">Active — {{ amount }}</li>
  <li v-for="n in amount">
    <div>
      <div class="avatar">
        <div class="w-10 rounded-full">
          <img :src="`https://picsum.photos/200?random=${n + 100}`" />
        </div>
      </div>
      <p class="truncate w-[12rem]">{{ generateUUID() }}</p>
    </div>
  </li>
</template>

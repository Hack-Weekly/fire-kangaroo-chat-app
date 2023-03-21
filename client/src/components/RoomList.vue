<script setup>
import { generateUUID } from '../composables/generateUUID'
const amount = Math.floor(Math.random() * 100) + 1
</script>

<template>
  <li>
    <label for="room-join-modal" class="avatar placeholder">
      <div
        class="box-border border-dashed border border-primary rounded-full w-10"
      >
        <img src="../assets/plus.svg" />
      </div>
    </label>
  </li>
  <RouterLink
    :to="`/room/${generateUUID().toString()}`"
    v-slot="{ href, navigate, isActive }"
    v-for="n in amount"
    :data-tip="n.toString()"
  >
    <li :class="{ 'bg-primary': isActive }">
      <a :href="href" @click="navigate" class="avatar">
        <div class="w-10" :class="{ 'rounded-full': !isActive }">
          <img :src="`https://picsum.photos/200?random=${n}`" />
        </div>
      </a>
    </li>
  </RouterLink>
</template>

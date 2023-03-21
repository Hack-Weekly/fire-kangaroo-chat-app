<script setup>
import RoomMessages from '../../components/RoomMessages.vue'
import { useRoute } from 'vue-router'
const props = defineProps(['id'])

console.log(props.id)
console.log(useRoute().path)
</script>

<template>
  <div class="flex flex-col justify-between">
    <RoomMessages />
    <div class="w-full p-2 bg-base-300 flex flex-row gap-2 items-center">
      <input
        type="text"
        :placeholder="`Message ${id}`"
        class="input input-bordered w-full inline-block text-sm h-fit p-2"
      />
      <button class="btn btn-circle btn-sm btn-ghost inline-block">
        <img
          src="../../assets/chevron-right-circle.svg"
          class="aspect-square w-full m-auto"
        />
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>

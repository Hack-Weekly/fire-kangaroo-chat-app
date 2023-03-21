<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const logout = () => {
  router.push('/')
}
</script>

<template>
  <div class="w-full navbar bg-base-300 gap-2">
    <div class="flex-none lg:hidden">
      <label for="room-modal" class="btn btn-square btn-ghost">
        <img src="../assets/menu-hamburger.svg" class="aspect-square w-8" />
      </label>
    </div>
    <div class="flex-1 select-none breadcrumbs no-scrollbar">
      <ul>
        <li class="font-bold lg:ml-3">
          <RouterLink to="/room">
            <img
              src="/android-chrome-512x512.png"
              class="w-8 hidden lg:flex mr-2"
            />
            Fire Kangaroo Chat
          </RouterLink>
        </li>
        <li
          class="hidden lg:flex underline"
          v-for="path in route.path.split('/').slice(2)"
        >
          {{ path }}
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <label for="presence-modal" class="btn btn-square btn-ghost lg:hidden">
        <img src="../assets/users.svg" class="aspect-square w-8" />
      </label>
      <button
        for="presence-modal"
        class="btn btn-square btn-ghost"
        @click="logout()"
      >
        <img src="../assets/exit-left.svg" class="aspect-square w-8" />
      </button>
    </div>
  </div>
</template>

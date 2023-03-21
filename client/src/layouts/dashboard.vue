<script setup>
import Header from '../components/Header.vue'
import RoomList from '../components/RoomList.vue'
import PresenceList from '../components/PresenceList.vue'
import RoomJoinModal from '../components/RoomJoinModal.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="flex flex-col justify-between h-dscreen">
    <Header />
    <div class="flex flex-row justify-start items-stretch flex-1">
      <ul
        class="hidden lg:menu !flex-nowrap bg-base-200 w-max h-[calc(100vh-4rem)] overflow-auto no-scrollbar"
      >
        <RoomList />
      </ul>
      <!-- Start of Page Content -->
      <div class="flex-1">
        <RouterView :key="route.path" />
      </div>
      <!-- End of Page Content -->
      <ul
        class="hidden lg:menu !flex-nowrap bg-base-200 w-min h-[calc(100vh-4rem)] overflow-auto no-scrollbar"
      >
        <PresenceList />
      </ul>
    </div>

    <input type="checkbox" id="room-modal" class="modal-toggle" />
    <label class="modal justify-start" for="room-modal">
      <label
        class="modal-box !p-0 max-w-none w-max h-full max-h-screen rounded-none no-scrollbar"
        for=""
      >
        <ul class="menu bg-base-200 w-max">
          <RoomList />
        </ul>
      </label>
    </label>

    <input type="checkbox" id="presence-modal" class="modal-toggle" />
    <label class="modal justify-end" for="presence-modal">
      <label
        class="modal-box !p-0 max-w-none w-max h-full max-h-screen rounded-none no-scrollbar"
        for=""
      >
        <ul class="menu bg-base-200 w-max">
          <PresenceList />
        </ul>
      </label>
    </label>

    <input type="checkbox" id="room-join-modal" class="modal-toggle" />
    <label class="modal justify-center" for="room-join-modal">
      <label
        class="modal-box max-w-none w-max max-h-screen rounded-none no-scrollbar"
        for=""
      >
        <div class="w-max">
          <RoomJoinModal />
        </div>
      </label>
    </label>
  </div>
</template>

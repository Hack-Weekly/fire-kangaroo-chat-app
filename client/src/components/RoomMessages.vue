<script setup>
import { generateUUID } from '../composables/generateUUID'
import { ref, onMounted } from 'vue'
const amount = Math.floor(Math.random() * 100) + 1

const room = ref(null)

onMounted(() => {
  scrollToBottom()
})

const generateMessages = () => {
  console.log(amount)
  let messages = []
  for (let i = 0; i < amount; i++) {
    messages.push({
      uuid: generateUUID(),
      isNotMe: randomBoolean(0.5),
      message: generateUUID(),
    })
  }
  console.log(messages)
  return messages
}

const randomBoolean = (chance) => (Math.random() + chance) >> 0

const scrollToBottom = () => {
  room.value.scrollTop = room.value.scrollHeight
}
</script>

<template>
  <ul ref="room" class="p-2 overflow-auto h-room">
    <li v-for="(message, index) in generateMessages()">
      <div class="chat" :class="message.isNotMe ? 'chat-start' : 'chat-end'">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img :src="`https://picsum.photos/200?random=${index + 100}`" />
          </div>
        </div>
        <div class="chat-header truncate w-[12rem]">
          {{ message.uuid }}
        </div>
        <div
          class="chat-bubble"
          :class="message.isNotMe ? '' : 'chat-bubble-primary'"
        >
          {{ message.message }}
        </div>
      </div>
    </li>
  </ul>
</template>

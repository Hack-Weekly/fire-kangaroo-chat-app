<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const login = () => {
  router.push('/room')
}
</script>

<template>
  <div class="hero h-dscreen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="max-w-sm text-center">
        <h1 class="text-4xl font-bold flex flex-col items-center gap-2">
          <img src="/android-chrome-512x512.png" class="aspect-square w-24" />
          <p>Fire Kangaroo Chat</p>
        </h1>
        <p class="py-6">
          Developed for the Project 1: Real Time Chat App 💎 of Hack Weekly.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Password"
              class="input input-bordered"
            />
          </div>
          <div class="flex flex-row justify-center gap-2 mt-6">
            <button
              class="btn btn-primary flex-auto inline-block"
              @click="login()"
            >
              Login
            </button>
            <button class="btn btn-secondary flex-auto inline-block">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

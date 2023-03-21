import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createPinia } from 'pinia'

const pinia = createPinia()

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  routes,
  history: createWebHistory(),
})

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

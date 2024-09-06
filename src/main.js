import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useTheme } from './composables/useTheme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('theme', useTheme())

app.mount('#app')

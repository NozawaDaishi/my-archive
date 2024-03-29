import '@/styles/global.scss'
import App from './App.vue'
import { createApp } from 'vue'
import { pinia } from './stores'
import router from './router'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')

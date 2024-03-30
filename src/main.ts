import '@/styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App.vue'
import { createApp } from 'vue'
import pinia from './stores'
import router from './router'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')

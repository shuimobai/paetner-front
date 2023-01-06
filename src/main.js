import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '../src/assets/css/global.css'
import piniaPlugPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
const pinia =createPinia()
pinia.use(piniaPlugPersistedstate)
app.use(pinia)
app.use(router)

app.mount('#app')

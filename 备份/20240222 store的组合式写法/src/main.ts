import {createApp} from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

const pinia = createPinia()

// 创建一个应用
const app = createApp(App)

app.use(pinia)

// 挂载整个应用到app容器中
app.mount('#app')
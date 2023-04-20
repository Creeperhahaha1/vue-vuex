import { createApp } from 'vue'
import App from './App.vue'
import store1 from './store/test1.js'//引用儲存庫路徑
import store2 from './store/test2.js'

const app = createApp(App)
app.provide('s1',store1)
app.provide('s2',store2)

app.mount('#app')

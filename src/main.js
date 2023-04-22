import { createApp } from 'vue'
import App from './App.vue'
import store from './store/data.js'//引用儲存庫路徑
const app = createApp(App)
app.use(store) //使用引用的路徑
app.mount('#app')
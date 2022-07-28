import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button } from 'vant'
import store from './store'
import router from './router'
import 'amfe-flexible'
const app = createApp(App)
app.use(Button)
app.use(store)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')

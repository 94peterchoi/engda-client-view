import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store';

// import './assets/main.css'
import './assets/css/common.css';

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

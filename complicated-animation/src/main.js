import { installComponents } from "@/utils/loader/index.js"
import "./index.scss"

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
installComponents(app)
app.mount('#app')

import installComponents from "./loader-component.js"
import "./index.scss"

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
installComponents(app)
app.mount('#app')

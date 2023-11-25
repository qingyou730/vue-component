import './assets/main.css'
import './styles/index.scss'
import './index.scss'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import install, { Button, Icon } from "vue-component-dyd";

import router from './router'
import {install, Icon, Button, FontAwesomeIcon, Tooltip} from './bundle'


const app = createApp(App)

console.log('Button: ', Button, Icon);
// app.component('font-awesome-icon', FontAwesomeIcon)
// Button.install(app)
// Icon.install(app)
// Tooltip.install(app)
install(app)
app.use(createPinia())
app.use(router)
// install(app)
// app.component('font-awesome-icon', FontAwesomeIcon)

// 注册自定义组件
// app.component('Dyd-Icon', Icon)
// app.component('Dyd-Button', Button)
// app.use(install)

app.mount('#app')

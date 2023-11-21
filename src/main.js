import './assets/main.css'
import './styles/index.scss'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'


import router from './router'
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'


/* add icons to the library */
library.add(fas)

const app = createApp(App)




app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

// 注册自定义组件
app.component('Dyd-Icon', Icon)
app.component('Dyd-Button', Button)


app.mount('#app')

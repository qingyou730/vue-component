/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles/index.scss'

import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dialog from "./components/Dialog/Dialog.vue";


/* add icons to the library */
library.add(fas)

const componentsArr = [Icon, Button, Tooltip, Dialog];

componentsArr.forEach((Com)=> {
  Com.install = (app)=> {
    app.component(Com.name, Com)
  }
})


export default function install(app) {
  componentsArr.forEach(Com => {
    app.component(Com.name, Com)
  });
  app.component('font-awesome-icon', FontAwesomeIcon)
}


export {
  install, 
  Icon,
  Button,
  Tooltip,
  Dialog,
  FontAwesomeIcon
}
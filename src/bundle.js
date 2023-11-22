/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

import './styles/index.scss'

import Icon from './components/Icon/index'
import Button from './components/Button/index'

/* add icons to the library */
library.add(fas)

const componentsArr = [Icon, Button];



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
}
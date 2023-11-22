import Icon from './Icon.vue'

Icon.install = function(app) {
  app.component(app.name, Icon)
}

export default Icon
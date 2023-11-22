import Button from './Button.vue'

Button.install = function(app) {
  app.component(app.name, Button)
}

export default Button
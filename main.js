
const Vue = require('vue')
const RlvCervejarias = require('./components/cervejarias/lista.vue')

Vue.use(require('vue-resource'))

new Vue({

  el:'body',
  components: {
    RlvCervejarias

  }

})

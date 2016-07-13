
const Vue = require('vue')
const RlvCervejarias = require('./components/cervejarias/lista.vue')

jQuery = require('jquery')

require('bootstrap')

Vue.use(require('vue-resource'))

new Vue({

  el:'body',
  components: {
    RlvCervejarias

  }

})

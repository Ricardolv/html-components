
<script>
  import RlvCervejarias from './card.vue'
  import RlvModal from '../modal.vue'

  export default {
      components: {
        RlvCervejarias,
        RlvModal
      },
      data () {
          return {
            cervejarias: [],
            cervejaria: {}
          }
      },
      ready () {
        this.$http.get('/cervejarias.json').then(
              (rep) => this.cervejarias = rep.data )

      },
      methods: {
        showDetails (cervejaria) {
            this.cervejaria = cervejaria.dados
        }
      }

  }


</script>

<template>
    <rlv-modal
        :name="cervejaria.name"
        :descript="cervejaria.descript">
    </rlv-modal>
    <rlv-cervejarias
        v-for="cervejaria in cervejarias"
        @details="showDetails"
        :dados="cervejaria">
    </rlv-cervejarias>


</template>

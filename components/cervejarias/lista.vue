
<script>
  import RlvCervejarias from './card.vue'

  export default {
      components: {
        RlvCervejarias
      },
      data () {
          return {
            cervejarias: []
          }
      },
      ready () {
        this.$http.get('/cervejarias.json').then(
              (rep) => this.cervejarias = rep.data )

      },
      methods: {
        showDetails (cervejaria) {
          
        }
      }

  }


</script>

<template>

    <rlv-cervejarias
        v-for="cervejaria in cervejarias"
        v-on:details="showDetails"
        :dados="cervejaria">
    </rlv-cervejarias>


</template>

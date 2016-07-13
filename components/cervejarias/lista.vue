
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
      }

  }


</script>

<template>

    <rlv-cervejarias
        v-for="cervejaria in cervejarias"
        :dados="cervejaria">
    </rlv-cervejarias>


</template>

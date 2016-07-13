
<script>

  export default {
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

      <h3>Componente de Cervejarias!</h3>
      <div v-for="cervejaria in cervejarias">
          <h3>{{cervejaria.name}}</h3>
      </div>

</template>

<script>
    export default {
      props: ['dados'],

      methods: {
        sendDetails() {
            this.$dispatch('details', {dados: this.dados})
        }
      }
    }
</script>

<template>
        <div class="card" v-on:click="sendDetails">
            <h3>{{dados.name}}</h3>
            <p> {{dados.city}} / {{dados.state}}</p>
        </div>

</template>

<style scoped>
    .card {
       position: relative;
       background-color: #f4f4f4;
       border: #ccc 1px solid;
       border-radius: 6px;
       padding: 10px;
       margin: 10px;
    }
</style>

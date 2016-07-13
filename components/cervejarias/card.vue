<script>
    export default {
      props: ['dados']
    }
</script>

<template>
        <div class="card">
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

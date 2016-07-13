<script>
    export default {
      props: ['dados']
    }
</script>

<template>
    <p>Cervejaria Card!</p>

        <div>
            <h3>{{dados.name}}</h3>
            <p> {{dados.city}} / {{dados.state}}</p>
        </div>

</template>


<style></style>

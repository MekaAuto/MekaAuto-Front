<template>
  <div class="contenedor ">
    <div class="title-product">
      <h3>{{ title }} <br />{{ title2 }}</h3>
    </div>
    <div class="ver-todo ">
      <RouterLink :to="{ name : 'product'}" class="no-underline">Ver Todo</RouterLink>
    </div>
  </div>
</template>
 
<script setup lang="ts">

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  title: String,
  title2: String

})

</script>

<style scoped>
  .contenedor{
    display: flex;
    justify-content: space-between;
 
  }
    .title-product{
        color: black;
        font-weight: 600;
        margin: 0 0 10px;
        font-size:calc(1rem + .9vw);
    }
    .ver-todo{
      color: #0078d4; 
    }
</style>
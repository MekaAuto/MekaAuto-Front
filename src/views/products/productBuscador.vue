<script setup lang="ts">
const uri = import.meta.env.VITE_BACK_URL + "/api/post"
console.log(uri)
fetch(uri)

</script>

<template>
  <div class="container mx-auto">
    <TitleProducts 
    :title="title" 
    :title2="title2" />
    <div class="contenerdor">
      <div class="contenedor_scroll px-1">
        <Products
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :images="product.image"
          :condicion="product.condicion"
          :descuento="product.descuento"
        ></Products>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>

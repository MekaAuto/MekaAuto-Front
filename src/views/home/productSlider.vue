<script setup lang="ts">
import Products from '../container/products.vue';
import { ref } from 'vue';
import TitleProducts from '../container/titleProducts.vue';

const products: any = ref([]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  title: String,
  title2: String
})

fetch('https://fakestoreapi.com/products?offset=0&limit=10')
  .then((res) => res.json())
  .then((data) => {
    products.value = data;
    console.log(products.value);
  });
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

<style lang="scss" scoped>
.contenerdor {
  overflow: scroll;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
}
.contenerdor::-webkit-scrollbar {
  display: none;
}
.contenedor_scroll {
  display: flex;
  padding-bottom: 40px;
  position: relative;
}
</style>

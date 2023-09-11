<script setup lang="ts">
import { ref } from 'vue';
import Products from '../container/products.vue';
import TitleProducts from '../container/titleProducts.vue';

const uri = import.meta.env.VITE_BACK_URL + '/post';
const products: any = ref([]);
const most_seen = ref([]);

fetch(uri)
  .then((res) => res.json())
  .then((data) => {
    products.value = data;
    most_seen.value = products.value.most_seen.data;
  });

</script>

<template>
  <div class="container mx-auto"
    v-for="(post, index) in products"
    :key="post.id">
    <TitleProducts  :title="index.toString()" />
    <div class="contenerdor">
      <div class="contenedor_scroll px-1">
        <Products
          v-for="product in post"
          :key="product.id"
          :title="product.title"
          :images="product.img"
          :condicion="product.price"
          :descuento="product.price"
        ></Products> 
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
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
}</style>

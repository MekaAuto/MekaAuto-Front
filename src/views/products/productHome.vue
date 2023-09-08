<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';

const uri = import.meta.env.VITE_BACK_URL + '/post';

const products: any = ref([]);

const most_seen = ref([]);/* 
const advertisingSlider = ref([]);
const new_products = ref([]);
const top_sales = ref([]);
const top_sales2 = ref([]);
 */
const { title, title2 } = {
  title: 'Nombre',
  title2: 'Nombre 2'
};

fetch(uri, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
  .then((res) => res.json())
  .then((data) => {
    products.value = data;
    most_seen.value = products.value.most_seen.data;
/*     advertisingSlider.value = data.advertisingSlider;     new_products.value = products.value.new_products;
    top_sales.value = products.value.top_sales;
    top_sales2.value = products.value.top_sales2;*/
    for (const product of most_seen.value){ 
      console.log(product)
    }
    console.log(most_seen.value);
  });

</script>

<template>
  <div class="container mx-auto">
    <TitleProducts :title="title ?? 'nombre'" :title2="title2 ?? 'nombre 2'" />
    <div class="contenerdor">
      <div class="contenedor_scroll px-1">
        <Products
          v-for="product in most_seen"
          :key="product.id"
          :title="product.title"
          :images="product.img"
          :condicion="product.excerpt"
          :descuento="product.price"
        ></Products> 
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

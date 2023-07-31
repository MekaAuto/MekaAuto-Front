<template>
  <div>
    <div class="product">
      <div class="product-img">
        <img src="../../img/moto/moto9.jpeg" alt="" />
        <div class="product-label">
          <span class="sale">-{{ products[0]?.descuento || 30 }}%</span>
          <span class="nuevo">{{ products[0]?.condicion || 'nuevo' }}</span>
        </div>
      </div>
      <div class="product-body">
        <p class="product-category">{{ products[0]?.category }}</p>
        <h3 class="product-name">
          <a href="#">{{ products[0]?.title }}</a>
        </h3>
        <h4 class="product-price">
          ${{ products[0]?.condicion }}
          <del class="product-old-price">$20990.00</del>
        </h4>
        <div class="product-rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="product-btns">
          <button class="Agregar Lista">
            <i class="fa fa-heart-o"></i><span class="tooltipp">Agregar Lista</span>
          </button>
          <button class="Calificacion">
            <i class="fa fa-exchange"></i><span class="tooltipp">Calificacion</span>
          </button>
          <button class="Ver"><i class="fa fa-eye"></i><span class="tooltipp">Ver</span></button>
        </div>
      </div>
      <div class="add-to-cart">
        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>Comprar</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  id: Number,
  images: String,
  descuento: String,
  condicion: String,
  category: String,
  title: String,
  price: String
});

const products: any = ref([]);

fetch('https://fakestoreapi.com/products?offset=0&limit=1')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products.value = data;
  });
</script>

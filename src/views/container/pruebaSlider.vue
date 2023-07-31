<template>
  <div class="contenedor-slider">
    <div class="slider-izquierdo" @click="moveIz">
      <i class="fa-solid fa-angles-left"></i>
    </div>

    <div class="slider-screen">
      <img :src="imagen" />
    </div>

    <div class="slider-derecho" @click="moveDerecha">
      <i class="fa-solid fa-angles-right" decoding="async"></i>
      
    </div>
  </div>
</template>
<style scoped>
.contenedor-slider {
    display: flex;
    align-items: center;
    margin: auto;
    gap: 40px;
    max-width: 1200px;
    height: 43%;
    padding: 0px 40px;
    text-align: center;
}

.slider-izquierdo,
.slider-derecho {
  width: 5%;
}

.slider-izquierdo img,
.slider-derecho img {
  width: 100%;
}

.slider-screen {
  width: 90%;
  max-height: 400px;
}

.slider-screen img {
    width: 100%;
    object-fit: cover;
    height: 400px;
}
</style>
<script setup lang="ts">

import { ref } from 'vue';
const imagenes = ref([
    "https://i.imgur.com/8rdEA7W.jpg",
    "https://i.imgur.com/oH6teiS.jpg",
    "https://i.imgur.com/WhkQuaq.jpg",
    "https://i.imgur.com/nKJkNrl.jpg",
])
const imagen = ref(imagenes.value[Math.floor(Math.random() * imagenes.value.length)])

let count = 0;
function moveDerecha(){
    count++
    imagen.value = imagenes.value[count]
    if(count > imagenes.value.length - 1){
        imagen.value = imagenes.value[0]
        count = 0
    }
}
function moveIz(){
    if(count <= 0){
        imagen.value = imagenes.value[imagenes.value.length + 1]
        count = imagenes.value.length
    }
    count--
    imagen.value = imagenes.value[count]
    console.log(imagen.value , count)

}

</script>

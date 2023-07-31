<template>

  <div class="2xl:container mx-auto">
    <filtro/>
    <NavTipo/>
    <CategoriasPrincipales 
    :img="carro" 
    title="!busca, compra y recibe en tu lugar de preferencia!" 
    sub-title="vive una nueva experiencia en la compra de repuestos."
    color="#ef233c"
    />
    <SeccionesDestacadas/>
    <ProductSlider title="Articulos SS Vistos" title2="Recientemente"/>
    <ProductSlider title="Nuevos Productos"/>
    <ProductSlider title="Top en Ventas"/>
    <MasVendido/>
  </div>
</template>

<script setup lang="ts">
import filtro from '../filtroViews.vue'
import NavTipo from '../navTipo.vue';
import CategoriasPrincipales from '../categoriasPrincipales.vue';
import SeccionesDestacadas from '../seccionesDestacadas.vue';
import ProductSlider from '../productSlider.vue';
import MasVendido from '../masVendido.vue';
import carro from '../../../img/carro/carro3.jpeg'
</script>

<style>
</style>
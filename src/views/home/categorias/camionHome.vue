<template>
    <HeaderVue />
    <div class="2xl:container mx-auto">
      <div style="height: 133px"></div>
      <BannerPrincipal />    
      <filtro/>
      <NavTipo/>
      <CategoriasPrincipales
        :img="camion"
        title="!No querras dejar de parar!" 
        sub-title="Mejora y transforma tu esperiencia en las 2 reuedas."
        color="#333"
        />
      <SeccionesDestacadas/>
      <ProductSlider title="Articulos SS Vistos" title2="Recientemente"/>
      <ProductSlider title="Nuevos Productos"/>
      <ProductSlider title="Top en Ventas"/>
      <MasVendido/>
    </div>
    <FooterPrincipal />
  </template>
  
  <script setup lang="ts">
  import filtro from '../filtroViews.vue'
  import NavTipo from '../navTipo.vue';
  import CategoriasPrincipales from '../categoriasPrincipales.vue';
  import SeccionesDestacadas from '../seccionesDestacadas.vue';
  import ProductSlider from '../productSlider.vue';
  import MasVendido from '../masVendido.vue';
  import HeaderVue from '@/views/components/headerVue.vue';
  import BannerPrincipal from '../bannerPrincipal.vue';
  import FooterPrincipal from '@/views/components/footerPrincipal.vue';

  import camion from '@/img/camione/camione1.png'
  </script>
  
  <style>
  </style>
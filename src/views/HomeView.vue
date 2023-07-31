<template>
  <div class="">
    <HeaderVue />
    <div class="2xl:container mx-auto">
      <div style="height: 133px"></div>
      <bannerPrincipalVue />
      <CarroHome/>
    </div>
    <FooterPrincipal />
  </div>
</template>
<script setup lang="ts">
import HeaderVue from './components/headerVue.vue';
import bannerPrincipalVue from './home/bannerPrincipal.vue';
import FooterPrincipal from './components/footerPrincipal.vue';
import CarroHome from './home/categorias/carroHome.vue';
</script>

<style >

</style>

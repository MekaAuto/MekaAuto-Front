<template>
  <nav class="nav-tipo-vehiculo">
    <RouterLink class="links-tipo" :to="{name: 'home'}"><i class="fas fa-car fa-fw me-1"></i>Carros</RouterLink
    >
    <RouterLink class="links-tipo" :to="{name: 'motoHome'}" ><i class="fas fa-motorcycle fa-fw me-1"></i>Motos</RouterLink
    >
    <RouterLink class="links-tipo" :to="{name : 'camionHome'}"><i class="fas fa-truck-moving fa-fw me-1"></i>Camiones</RouterLink
    >
    <!-- <RouterLink class="links-tipo" :to="{name : 'maritimoHome'}"><i class="fas fa-ship fa-fw me-1"></i>Maritimos</RouterLink> -->
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped lang="scss">
nav a.router-link-exact-active {
  color: $primary-color;
  border-color: $primary-color;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
.nav-tipo-vehiculo {
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.links-tipo {
  border: solid transparent;
  border-width: 0 0 2px;
  border-radius: 0;
  text-transform: uppercase;
  padding: 13px 12px 16px;
  line-height: 1;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: -1px;
  background: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.links-tipo:hover {
  background-color: #f5f5f5;
  border-color: transparent;
}

.active {
  color: #0078d4;
  border-color: #0078d4;
}

@media screen and (max-width: 500px) {
  .links-tipo {
    font-size: 10px;
  }
}
</style>

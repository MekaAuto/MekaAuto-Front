<script setup lang="ts">
import NavBar from './navBar.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(['activeNav'])

const activeNav = () => {
  // @ts-ignore: Object is possibly 'null'.
  document.getElementById('cerrarNav').classList.toggle('active');
}

</script>

<style scoped lang="scss">
header {
  padding: 15px 0;
  background-color: #15161d;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 133px;
  z-index: 4;
}

.container-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
}

.container-nav {
  display: flex;
  justify-content: space-between;
}

.logo-header img {
  height: 35px;
}

.serch-bar {
  position: relative;
}

.input-header {
  width: 100%;
  min-height: calc(2.08rem + 2px);
  height: calc(2.08rem + 2px);
  padding-top: 0.27rem;
  padding-bottom: 0.27rem;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #171717;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 20px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.input-header:focus {
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  border-color: #0078d4;
  outline: 0;
  -webkit-box-shadow: inset 0 0 0 1px #0078d4;
  box-shadow: inset 0 0 0 1px #0078d4;
}

.btn-serch {
  position: absolute;
  padding: 0.5rem 1.5rem;
  border-radius: 50rem;
  right: -1px;
  font-size: 13.5px;
  top: -1px;
}

.btn-header {
  .icon-header {
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    /* text-align: center; */
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  }
}

.boton-secondary:hover {
    background-color: #f3f3f3;
  }

  .boton-secondary:active {
    background-color: #aaaaaa;
  }
</style>

<template>
  <header>
    <div class="container-header px-4 sm:container sm:p-0 ">
      <div class="container-nav ">
        <div class="">
          <a href="#" class="btn-header" @click="activeNav">
            <i class="icon-header fas fa-bars boton-primary"></i>
          </a>
        </div>

        <div href="#" class="logo-header">
          <img src="../../img/logo2.png" height="35px" alt="" loading="lazy" />
        </div>

        <div class="btn-header">
          <i class="fas fa-shopping-cart icon-header boton-primary"></i>
        </div>
      </div>

      <!-- SEARCH BAR -->
      <div class="serch-bar">
        <input type="search" class="input-header" placeholder="Buscar" />
        <button type="submit" class="btn-serch boton-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </header>

  <NavBar @activeNav="activeNav" />
</template>

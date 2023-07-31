<script setup lang="ts">
import { ref } from 'vue';

const fecha = ref(new Date().getFullYear());
</script>

<style scoped>
footer {
  background-color: #201f1e;
  width: 100%;
}
.container-footer {
  padding: 1.5rem 0;
}

.contenido-redes {
  display: flex;
  place-content: center;
  gap: 1rem;
}

.btn-redes {
  text-align: center;
  display: block;
  border-radius: 50%;
  padding: 0;
  position: relative;
  width: 2.312rem;
  height: 2.312rem;
  color: #d2d2d2;
  border: 1px solid #d2d0ce;
}
.copy {
  text-align: center;
  color: #ffffff;
  padding: 1rem;
  font-size: 14px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
}
.btn-dark:hover {
  color: #fff;
  background-color: #0c0c0b;
  border-color: #0c0c0b;
}
</style>

<template>
  <footer class="">
    <!-- Grid container -->
    <div class="container-footer">
      <!-- Section: Social media -->
      <section class="contenido-redes">
        <!-- Facebook -->
        <button 
          class="btn-redes" 
          href="#!" 
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <i class="fab fa-facebook-f"></i>
        </button>

        <!-- Twitter -->
        <button 
          class="btn-redes" 
          href="#!" 
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <i class="fab fa-twitter"></i>
        </button>

        <!-- Instagram -->
        <button 
          class="btn-redes" 
          href="#!" 
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <i class="fab fa-instagram"></i>
        </button>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="copy">
      © {{ fecha }} Copyright:
      <a class="" href="https://mekautos.com/">MekAutos.com</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

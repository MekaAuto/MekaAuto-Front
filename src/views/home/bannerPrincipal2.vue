<script setup lang="ts"></script>

<style scoped lang="scss">
.carousel {
  overflow: hidden;
  position: relative;
}
.carousel:hover {
  cursor: pointer;
  .carousel-control-next {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #8f8f8fcc;
    height: 30px;
    right: 5%;
    top: 50%;
    border-radius: 50%;
    width: 30px;
    color: white;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    transition: all 500ms ease;
    z-index: 2;
  }
  button.carousel-control-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #8f8f8fcc;
    height: 30px;
    left: 5%;
    top: 50%;
    border-radius: 50%;
    width: 30px;
    color: white;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    z-index: 2;
  }

.carousel-control-next:hover , button.carousel-control-prev:hover{
  transform: scale(1.2);
}
}

.carousel-indicators {
  position: absolute;
  display: flex;
  gap: 3px;
  width: 100%;
  justify-content: center;
  align-items: end;
  height: 380px;
}

.btn-banner {
  height: 0.55rem;
  width: 0.7rem;
  background: #8f8f8f;
  border-radius: 40%;
}

.carousel-inner {
  display: flex;
  width: fit-content;
}

.carousel-item {
  width: 100%;
  max-height: 400px;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-control-next , .carousel-control-prev{
  display: none;
  transition: all 500ms ease;
}

</style>

<template>
  <div id="carouselMaterialStyle" class="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button class="btn-banner"></button>
      <button class="btn-banner"></button>
      <button class="btn-banner"></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner">
      <!-- Single item -->
      <div class="carousel-item active">
        <img src="../../img/slider/8.png" class="carousel-img" />
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="../../img/slider/9.png" class="carousel-img" />
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="../../img/slider/8.png" class="carousel-img" />
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button class="carousel-control-prev">
      <span class="fa fa-chevron-left"></span>
    </button>
    <button class="carousel-control-next">
      <span class="fa fa-chevron-right"></span>
    </button>
  </div>
</template>

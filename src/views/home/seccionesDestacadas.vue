<template>
  <div class="md:container mx-auto">
    <div class="seciones-destacadas">
      <!-- container -->
      <div class="shop">
        <div class="shop-img">
          <img src="../../img/camione/camione2.jpg" alt="">
        </div>
        <div class="shop-body">
          <h3>Camiones<br>Seccion</h3>
          <a href="#" class="cta-btn">Comprar !!!<i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
      <!-- /shop -->
  
      <!-- shop -->
      <div class="shop">
        <div class="shop-img">
          <img src="../../img/carro/carro3.jpeg" alt="">
        </div>
        <div class="shop-body">
          <h3>Carros<br>Seccion</h3>
          <a href="#" class="cta-btn">Comprar !!! <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
      <!-- /shop -->
  
      <!-- shop -->
      <div class="shop">
        <div class="shop-img">
          <img src="../../img/moto/moto3.jpeg" alt="">
        </div>
        <div class="shop-body">
          <h3>Motos<br>Seccion</h3>
          <a href="#" class="cta-btn">Comprar !!! <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.seciones-destacadas {
  display: flex;
  width: 85%;
  justify-content: space-between;
  gap: 40px;
  margin: 43px auto;
  
}

.shop {
  width: 33.333%;
  position: relative;
  overflow: hidden;
  height: fit-content;
}

.shop:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  width: 60%;
  /*background: #0078d4; */
  background: #0078d4;
  opacity: 0.9;
  -webkit-transform: skewX(-45deg);
  -ms-transform: skewX(-45deg);
  transform: skewX(-45deg);
}

.shop:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1px;
  width: 100%;
  background: #0078d4;
  opacity: 0.9;
  -webkit-transform: skewX(-45deg) translateX(-100%);
  -ms-transform: skewX(-45deg) translateX(-100%);
  transform: skewX(-45deg) translateX(-100%);
}


.shop .shop-img {
  position: relative;
  background-color: #E4E7ED;
  z-index: -1;
}

.shop .shop-img>img {
  width: 100%;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}


.shop:hover .shop-img>img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transform: scaleX(-1);
}

.shop .shop-body {
  position: absolute;
  top: 0;
  width: 75%;
  padding: 30px;
  z-index: 1;
}

.shop .shop-body h3 {
  color: #FFF;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
}

.shop .shop-body .cta-btn {
  color: #FFF;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;

}

@media screen and (max-width: 800px) {

  .seciones-destacadas {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .shop {
    width: 100%;
  }
}
</style>
<script setup lang="ts">
</script>
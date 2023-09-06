<template>
  <HeaderVue />
  <div class="px-1 md:px-0 md:container mx-auto my-8 font-roboto">
    <!-- row -->
    <div class="flex flex-col md:flex-row gap-3 justify-between mt-0 sm:mx-[calc(1.5rem/-2)] sm:px-8 md:px-0">
      <!-- Product main img -->
      <div
        class="flex gap-3 flex-col lg:flex-row md:w-1/2 lg:w-3/5 md:left-[16.66667%] px-[calc(1.5rem/2)]"
      >
        <div class="w-full lg:w-[72%] shadow-sm  rounded-lg">
          <div id="product-main-img" class="2xl:h-full xl:h-4/5 lg:h-[55%] md:h-64 sm:h-72 h-72 shadow-md rounded-lg ">
            <figure class="product-preview h-full magnifyng_area rounded-lg" 
              ref="magnifyng_area" 
              @mousemove="zoom" 
              @mouseleave="eleave"
              @load="zoom">
              <img
                src="../../img/carro/carro5.jpeg"
                id="magnifying_img"
                ref="imgPrincipal"
                @load="getimgPrincipalSize"
                
                class="w-full h-full magnifying_img "
                alt=""
              />
            </figure>
          </div>
        </div>
        <!-- /Product main img -->

        <!-- Product thumb imgs -->
        <div class="right-[41.66666667%] px-[calc(1.5rem/2)]"
        >
          <div
            class="overflow-hidden mx-auto"
            :style="`max-height:calc(${imgSecondaryHeight}px * 3 + 2px); max-width:calc(${imgSecondaryWidth}px * 3 + 2rem)`"
          >
            <div
              id="product-imgs"
              class="gap-3 md:gap-0 flex flex-row lg:flex-col"
              :style="`width:calc(${imgPrincipalWidth}px + ${imgSecondaryWidth}px - 5%)`"
            >
              <div class="">
                <img
                  class="border-[1px] border-solid border-[#E4E7ED] rounded-lg"
                  :style="`width: calc(${imgPrincipalWidth}px / 3) `"
                  src="../../img/carro/carro5.jpeg"
                  alt=""
                  ref="imgSecundary"
                  @load="getimgPrincipalSize"
                />
              </div>

              <div class="">
                <img
                  class="border-[1px] border-solid border-[#E4E7ED] rounded-lg"
                  :style="`width: calc(${imgPrincipalWidth}px / 3) `"
                  src="../../img/carro/carro5.jpeg"
                  alt=""
                  ref="imgSecundary"
                  @load="getimgPrincipalSize"
                />
              </div>

              <div class="">
                <img
                  class="border-[1px] border-solid border-[#E4E7ED] rounded-lg"
                  :style="`width: calc(${imgPrincipalWidth}px / 3) `"
                  src="../../img/carro/carro5.jpeg"
                  alt=""
                  ref="imgSecundary"
                  @load="getimgPrincipalSize"
                />
              </div>

              <div class="">
                <img
                  class="border-[1px] border-solid border-[#E4E7ED] rounded-lg"
                  :style="`width: calc(${imgPrincipalWidth}px / 3) `"
                  src="../../img/carro/carro5.jpeg"
                  alt=""
                  ref="imgSecundary"
                  @load="getimgPrincipalSize"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- /Product thumb imgs -->
      </div>

      <!-- Product details -->
      <div class="md:w-1/2 lg:w-2/5 px-[calc(1.5rem/2)]">
        <div class="product-details">
          <h2 class="product-name">EL NOMBRE DEL PRODUCTO VA AQUÍ</h2>
          <div>
            <div class="product-rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <a class="review-link" href="#">10 Reseña(s) | Agrega tu evaluación</a>
          </div>
          <div>
            <h3 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h3>
            <span class="product-available">En Stock</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div class="product-options">
            <label>
              Tamaño
              <select class="input-select">
                <option value="0">X</option>
              </select>
            </label>
            <label>
              Color
              <select class="input-select">
                <option value="0">Rojo</option>
              </select>
            </label>
          </div>

          <div class="add-to-cart">
            <div class="qty-label">
              Cantidad
              <div class="input-number">
                <input type="number" />
                <span class="qty-up">+</span>
                <span class="qty-down">-</span>
              </div>
            </div>
            <button class="add-to-cart-btn">
              <i class="fa fa-shopping-cart"></i> Agregar al Carrito
            </button>
          </div>

          <ul class="product-btns flex flex-wrap gap-4 text-xs">
            <li>
              <a href="#"><i class="fa fa-heart-o"></i> añadir a la lista de deseos</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-exchange"></i> Añadir a comparar</a>
            </li>
          </ul>

          <ul class="product-links flex gap-4">
            <li>Categoria:</li>
            <li><a href="#">Auriculares</a></li>
            <li><a href="#">Accesorios</a></li>
          </ul>

          <ul class="product-links flex gap-4">
            <li>Compartir:</li>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-google-plus"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-envelope"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /Product details -->
    </div>
    <!-- /row -->
  </div>

  <ProductSlider title="Top en Ventas" />
  <FooterPrincipal />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FooterPrincipal from '../components/footerPrincipal.vue';
import HeaderVue from '../components/headerVue.vue';

import ProductSlider from '../home/productSlider.vue';

const imgPrincipal = ref();
const imgSecundary = ref();
const magnifyng_area = ref();

const imgPrincipalWidth = ref(0);
const imgPrincipalHeight = ref(0);
const imgSecondaryHeight = ref(0);
const imgSecondaryWidth = ref(0);

onMounted( () => {
})


function zoom(event:any){
	let clientX = event.clientX - magnifyng_area.value.offsetLeft
	let clientY = event.clientY - magnifyng_area.value.offsetTop
  
	let mWidth = magnifyng_area.value.offsetWidth
	let mHeight = magnifyng_area.value.offsetHeight

	clientX = clientX / mWidth * 100
	clientY = clientY / mHeight * 100

	//magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
	imgPrincipal.value.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`
}

function eleave(){
	imgPrincipal.value.style.transform = 'translate(-50%,-50%) scale(1)'
}

const getimgPrincipalSize = () => {
  imgPrincipalWidth.value = imgPrincipal.value.clientWidth;
  imgPrincipalHeight.value = imgPrincipal.value.clientHeight;
  imgSecondaryHeight.value = imgSecundary.value.clientHeight;
  imgSecondaryWidth.value = imgSecundary.value.clientWidth;

};
window.addEventListener('resize', getimgPrincipalSize);
</script>

<style scoped lang="scss">
#product-main-img {
  width: 100%;
  cursor: zoom-in;
}

.magnifyng_area {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.magnifyng_area .magnifying_img {
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  position: absolute;
  object-fit: cover;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.product-name {
  text-transform: uppercase;
  font-size: 18px;
  color: #2b2d42;
  font-weight: 700;
  margin: 0 0 10px;
}
.review-link {
  font-size: 12px;
}
.product-rating > i {
  color: #e4e7ed;
}
.product-rating > i.fa-star {
  color: #0078d4;
}
.product-price {
  display: inline-block;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #0078d4;
  font-weight: 700;
  line-height: 1.2;
}
.product-old-price {
  font-size: 70%;
  font-weight: 400;
  color: #8d99ae;
}
.product-details .review-link {
  font-size: 12px;
}
.product-details .product-available {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 30px;
  color: #0078d4;
}
.product-details {
  color: #2b2d42c7;
  /*   font-family: Segoe UI Local, 'Segoe UI Web (West European)'; */
  .product-rating {
    display: inline-block;
    margin-right: 15px;
    color: #0078d4;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    border: none;
  }
  a {
    color: #2b2d42c7;
    font-weight: 500;
    -webkit-transition: 0.2s color;
    transition: 0.2s color;
    text-decoration: none;
  }
  p {
    line-height: 1.33em;
    color: #7e7e7e;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 14px;
  }
}
.product-options {
  margin-top: 30px;
  margin-bottom: 30px;
  label {
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 15px;
    margin-bottom: 0px;
  }
}
.input-select {
  width: 90px;
  padding: 0px 15px;
  background: #fff;
  border: 1px solid #e4e7ed;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 15px;
}
.add-to-cart {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 30px;
}
.qty-label {
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 15px;
  margin-bottom: 0px;
}
.input-number {
  width: 90px;
  display: inline-block;
  position: relative;
}
input[type='number'] {
  height: 40px;
  width: 100%;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  padding: 0px 35px 0px 15px;  
}

webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

.qty-up {
  right: 0;
  top: 0;
  border-bottom: 0px;
}
.input-number .qty-down {
  right: 0;
  bottom: 0;
}
.add-to-cart-btn {
  position: relative;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 30px;
  background-color: #ef233c;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 40px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  cursor: pointer;
  > i {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    line-height: 38px;
    color: #0078d4;
    opacity: 0;
    visibility: hidden;
  }
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.product-btns li {
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
}

.product-links {
  margin-top: 15px;
}
.product-details .product-links li {
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
}

.input-number .qty-up,
.input-number .qty-down {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

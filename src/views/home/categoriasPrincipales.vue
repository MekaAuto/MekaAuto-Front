<template>
  <div class="anuncios" id="ex-with-icons-content">
    <!-- vehiculo -->
    <div class="anuncio-vehiculo"
    >
        <div class="anuncio-cart" :style="`background-color: ${color};`">
            <div class="anuncio-vehiculo-title" >
              <h2 class="anuncio-title">
                {{ title }}
              </h2>
              <p >{{  subTitle }}</p>
              <a class="anuncio-btn" href="#">Comprar !!!</a>
            </div>
        </div>
      <div id="hot-deal" class="section-vehiculo" >
        <img :src="img" alt="alt"/>
      </div>
    </div>
    <!-- /vehiculo -->
  </div>
  <!-- /Tabs content -->
</template>

<style scoped>
.anuncio-cart{
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
}

.anuncio-vehiculo-title{
    color: #fff;
    width: 85%;
}

.section-vehiculo>img {
width:100% ;
height: 240px;
object-fit:cover;
}

.anuncio-title{
    font-size: calc(1.325rem + .9vw);
    text-transform: uppercase;
    font-weight: 500;
}

.anuncio-btn{
    margin-top: 1rem;
    display: inline-block;
    padding: 12px 30px;
    background-color: #0078d4;
    border: none;
    border-radius: 40px;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    font-size: .875rem;
    line-height: 1.3;
}


.anuncio-btn:hover {
    color: #fff;
    background-color: #0062ae;
    border-color: #0062ae;
}
.anuncio-btn:active {
    color: #fff;
    background-color: #003e6e;
    border-color: #003e6e;
}

@media screen and (min-width: 1200px) {
    .anuncio-title{
        font-size: 2rem ;
    }
}
</style>

<script setup lang="ts">

defineProps({
    title:String,
    subTitle: String,
    img:String,
    color:String
})
</script>
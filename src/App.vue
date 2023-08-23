<script setup lang="ts">
import { RouterView } from 'vue-router';
import {LocalNotifications} from "@capacitor/local-notifications"

LocalNotifications.requestPermissions()

</script>
<template>
  <div class="min-h-screen">
    <RouterView/>
  </div>
</template>

<style>
*{
  max-width: 100vw;
}
html {
  max-width: 100%;
  
  /* font-family: 'Munito'; */
}
body {
  box-sizing: content-box;
  max-width: 100%;
  min-height: 100vh;
}

</style>
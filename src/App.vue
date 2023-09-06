<script setup lang="ts">
import { RouterView } from 'vue-router';
import {LocalNotifications} from "@capacitor/local-notifications"
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

import useDataUser from './store/dataUser';

const store = useDataUser()
LocalNotifications.requestPermissions()

if(Capacitor.getPlatform() === "ios")
  StatusBar.setStyle({ style: Style.Dark });

console.log(store.AccessToken)
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
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}

</style>
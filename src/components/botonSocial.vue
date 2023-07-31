<template>
  <button
    class="flex select-none m-auto items-center gap-3 rounded-lg border border-gray-700 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-gray-700 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-dark="true"
    @click="$emit('eventSocial')"
  >
    <img :src="imagen" alt="" class="h-6 w-6" :class="scale" />
    {{ name }}
  </button>
</template>
<script setup lang="ts">
defineProps({
  name: String,
  imagen: String,
  scale: String
});
</script>

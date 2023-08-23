<template>
  <div class="flex justify-center space-x-2">
    <div
      class="pointer-events-auto mx-auto hidden w-96 max-w-full rounded-lg bg-white bg-clip-padding text-sm shadow-lg data-[te-toast-show]:block data-[te-toast-hide]:hidden dark:bg-zinc-600"
      id="static-example"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-te-autohide="true"
      data-te-toast-init
      data-te-delay="500"
      data-te-toast-show

    >
      <div
        class="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-white bg-clip-padding px-3 py-2 dark:border-gray-500 dark:bg-zinc-600"
      >
        <p class="font-bold text-gray-500 dark:text-gray-200">titulo</p>
        <div class="flex items-center">
          <p class="text-xs text-gray-600 dark:text-gray-300">11 mins ago</p>
          <button
            type="button"
            class="ml-2 box-content h-4 w-4 rounded-none border-none text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-gray-300"
            data-te-target="#static-example"
            data-te-toast-dismiss
            aria-label="Close"
          >
            <span
              class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
            >
              <svg
                class="w-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        class="break-words rounded-b-lg bg-white px-3 py-2.5 text-gray-700 dark:bg-zinc-600 dark:text-gray-300"
      >
        Contenido
      </div>
    </div>
  </div>

  <button @click="noty">
    toast
  </button>
</template>

<script setup lang="ts">
import { Toast, initTE } from "tw-elements";
import { toast, type ToastOptions } from 'vue3-toastify';

initTE({ Toast });

const texto = 'Success'

const noty = () =>{
  toast.success(texto, {
    autoClose: 3000,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER
  } as ToastOptions);
}
</script>

<style scope>
.Toastify__toast {
  border-radius: 10px;
}
</style>
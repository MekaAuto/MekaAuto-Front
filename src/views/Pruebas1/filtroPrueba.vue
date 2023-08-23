<template>
  <div class="bg-[#333333] mx-auto py-5 font-bold font-arial">
    <div class="mx-auto flex flex-col">
      <div
        class="flex justify-center gap-4 lg:hidden"
        data-te-collapse-init
        data-te-target="#collapse"
        aria-expanded="false"
        aria-controls="collapse"
      >
        <p class="uppercase text-white md:max-w-[90%] text-xl md:text-4xl text-center">
          encuentra los repuestos para tu vehiculo
        </p>
        <button
          class="font-medium leading-normal text-white self-baseline"
        >
          <i class="fa-solid fa-chevron-down" style="color: #ffffff"></i>
        </button>
      </div>
      <div
        class="!visible hidden m-[1.25rem_auto_0] lg:my-0 lg:block lg:min-w-[1024px]"
        id="collapse"
        data-te-collapse-item
      >
        <form class="needs-validation mx-auto" novalidate>
          <div class="flex lg:w-10/12 flex-wrap justify-between lg:justify-around lg:mx-auto">
            <!--               <div class="lg:w-1/12"></div> -->
            <div class="md:w-1/6 w-full flex-[0_0_auto] mb-2">
              <select class="form-select text-base" required>
                <option value="">AÑO</option>
                <option>2001</option>
                <option>2000</option>
                <option>1999</option>
                <option>1998</option>
              </select>
            </div>
            <div class="md:w-1/6 w-full flex-[0_0_auto] mb-2">
              <select class="form-select" disabled>
                <option value="">MARCA</option>
                <option>United States</option>
              </select>
            </div>
            <div class="md:w-1/6 w-full flex-[0_0_auto] mb-2">
              <select class="form-select" disabled>
                <option value="">MODELO</option>
                <option>United States</option>
              </select>
            </div>
            <div class="md:w-1/6 w-full flex-[0_0_auto] mb-2">
              <select class="form-select" disabled>
                <option value="">MOTOR</option>
                <option>United States</option>
              </select>
            </div>
            <div class="md:w-1/6 w-full flex-[0_0_auto] mb-2">
              <button
                class="btn btn-primary btn-block"
                type="submit"
                style="padding: 10px 0 10px 0 !important"
              >
                BUSCAR
              </button>
            </div>
            <!--               <div class="lg:w-1/12"></div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /SEARCH SECTION -->
</template>

<style scoped lang="scss">
.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #171717;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.btn-primary {
  color: #fff;
  background-color: #0078d4;
  border-color: #0078d4;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>

<script setup lang="ts">
// Initialization for ES Users
import { Collapse, Ripple, initTE } from 'tw-elements';
import { onMounted } from 'vue';

onMounted(() => {
  initTE({ Collapse, Ripple });
});
</script>

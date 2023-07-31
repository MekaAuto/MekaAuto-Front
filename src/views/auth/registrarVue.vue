<template>
  <div class="md:container mx-auto md:px-6">
    <div class="card overflow-hidden border-0 shadow-lg my-6 py-6 mx-4">
      <div class="card-body p-0">
        <!-- Nested flex mx-3  within Card Body -->
        <div class="flex mx-4">
          <div class="lg:basis-5/12 hidden lg:block w-full bg-car-login bg-cover bg-[-10rem]"></div>
          <div class="lg:basis-7/12 md:mx-3">
            <div class="sm:p-12 p-[3rem 0]">
              <div class="text-center">
                <h1 class="h4 text-h4 mb-6">Create an Account!</h1>
              </div>
              <form class="user">
                <div class="form-group gap-2 flex">
                  <div class="sm:max-w-[50%] mb-4 sm:mb-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleFirstName"
                      placeholder="First Name"
                      v-model="nombre"
                    />
                  </div>
                  <div class="sm:max-w-[50%]">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="Last Name"
                      v-model="apellido"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="exampleInputEmail"
                    placeholder="Email Address"
                    v-model="email"
                  />
                </div>
                <div class="form-group gap-2 flex">
                  <div class="sm:max-w-[50%] mb-4 sm:mb-0">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <div class="sm:max-w-[50%]">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleRepeatPassword"
                      placeholder="Repeat Password"
                      v-model="rePassword"
                    />
                  </div>
                </div>
                <button class="btn btn-primary btn-user btn-block" @click.prevent="createUser">
                  Register Account
                </button>
                <hr />
                <button class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </button>
                <button class="btn btn-facebook btn-user btn-block mt-2">
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </button>
              </form>
              <hr />
              <div class="text-center">
                <RouterLink :to="{ name: 'auth' }" class="text-sm">¿Tienes cuenta?</RouterLink>
              </div>
              <div class="text-center">
                <RouterLink :to="{ name: 'recuperar' }" class="text-sm font-normal"
                  >¿Olvidaste la contraseña?</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  margin: 0;
  font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji' !important;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #858796;
  text-align: left;
  background-color: #fff;
}
a {
  color: #4e73df;
  text-decoration: none;
  background-color: transparent;
}
form.user .custom-checkbox.small label {
  line-height: 1.5rem;
}
form.user .form-control-user {
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 1.5rem 1rem;
}
form.user .btn-user {
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 0.75rem 1rem;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthStore from '@/store/auth';
import router from '@/router';

const store = useAuthStore();

const nombre = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');
const rePassword = ref('');

const createUser = async () => {
  const name = ref(nombre.value + ' ' + apellido.value);

  if (password.value !== rePassword.value) {
    alert('Las contraseñas no coinciden');
    return false;
  } else if (rePassword.value === '' || password.value === '') {
    alert('ingrese la contraseña');
    return false;
  }
  const response = await store.register(name.value, email.value, password.value);

  if (!response) {
    const errors = store.errors;
    for (const error in errors) {
      console.log(errors[error]);
      alert(errors[error]);
    }
  } else {
    router.push({ name: 'home' });
    router.push({ name: 'home' });
  }
};
</script>

<template>
  <div class="md:container md:px-6 mx-auto max-w-full lg:max-w-[1140px] font-nunito2">
    <!-- Outer Row -->
    <div class="flex justify-center">
      <div class="xl:basis-5/6 lg:basis-full md:basis-3/4 basis-full px-4">
        <div class="cardT overflow-hidden border-0 shadow-lg my-12">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="flex justify-center mx-3">
              <div
                class="lg:basis-3/6 max-w-[50%] hidden lg:block bg-car-login bg-cover bg-[-9rem] px-3"
              ></div>
              <div class="lg:basis-3/6 lg:max-w-[50%] w-full px-3">
                <div class="md:p-12 p-[1rem_0]">
                  <div class="text-center">
                    <h1 class="text-2xl text-gray-700 mb-6">Welcome Back!</h1>
                  </div>
                  <form class="user1">
                    <div class="form-group mb-4">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        v-model="email"
                      >
                    </div>
                    <div class="form-group mb-4">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                    <div class="form-group mb-4">
                      <div class="custom-control custom-checkbox text-sm font-normal">
                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <button
                      href="index.html"
                      class="btn btn-primary btn-user btn-block"
                      @click.prevent="loginUser"
                    >
                      Login
                    </button>
                    <hr />
                    <button
                      href="index.html"
                      class="btn btn-google btn-user btn-block"
                      @click.prevent="storeGoogle.logInGoogle"
                    >
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </button>

                    <button href="index.html" class="btn btn-facebook btn-user btn-block">
                      <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <RouterLink :to="{ name: 'recuperar' }" class="text-sm font-normal"
                      >¿Olvidaste la contraseña?</RouterLink
                    >
                  </div>
                  <div class="text-center">
                    <RouterLink :to="{ name: 'registrar' }" class="text-sm font-normal">
                      ¡Crear cuenta!
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import AuthService from '@/services/AuthService';
import useAuthStore from '@/store/auth';
import useAuthGoogleStore from '@/store/authGoogle';
import router from '@/router';

let email = ref('');
let password = ref('');

const store = useAuthStore();
const storeGoogle = useAuthGoogleStore();

email.value = storeGoogle.user.email;
const loginUser = async () => {
  const response = await store.login(email.value, password.value);
  if (response === false) {
    alert('Login error');
    const errors = store.errors;
    for (const error in errors) {
      console.log(errors[error]);
      alert(errors[error]);
    }
  } else {
    const success = store.success;
    router.push({ name: 'home' });
    alert(success);
  }
};

onMounted(() => {
  GoogleAuth.initialize({
    clientId: '520770098242-hqplt1fvubopdp5o6csev8es3iu08l3o.apps.googleusercontent.com',
    grantOfflineAccess: true,
    scopes: ['profile', 'email']
  });
});

// en la funcion loginGoogle es donde se reciben los datos

const singOut = () => {
  GoogleAuth.signOut;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const authUser = async () => {
  const auth = new AuthService();
  const success = await auth.login(email.value, password.value);
  if (success) {
    alert('Exito!');
  } else {
    alert('Login failed');
  }
};
</script>

<style scoped lang="scss">
a {
  color: #4e73df;
  text-decoration: none;
  background-color: transparent;
}
.cardT {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0;
}
form.user1 .custom-checkbox label {
  line-height: 1.5rem;
}
form.user1 .form-control-user {
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 1.5rem 1rem;
}
form.user1 .btn-user {
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 0.75rem 1rem;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6e707e;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d1d3e2;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}

#customCheck {
  box-sizing: border-box;
  padding: 0;
}
.custom-control-input {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.25rem;
  opacity: 0;
}
.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
  color: #858796;
}
.custom-checkbox .custom-control-label::before {
  border-radius: 0.35rem;
}
.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: '';
  background-color: #fff;
  border: #b7b9cc solid 1px;
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: '';
  background: 50%/50% 50% no-repeat;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-block {
  display: block;
  width: 100%;
}
.btn-primary {
  color: #fff;
  background-color: #4e73df;
  border-color: #4e73df;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

.btn-block + .btn-block {
  margin-top: 0.5rem;
}
.btn-facebook {
  color: #fff;
  background-color: #3b5998;
  border-color: #fff;
}
</style>

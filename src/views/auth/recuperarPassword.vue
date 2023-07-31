<template>
  <div class="md:container font-nunito2 mx-auto">
    <!-- Outer Row -->
    <div class="flex flex-wrap mx-3 justify-center">
      <div class=" mx-3 xl:w-full xl:max-w-[83%] lg:max-w-full md:max-w-[75%] w-full ">
        <div class="card overflow-hidden border-0 shadow-lg my-12">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="flex flex-wrap md:mx-3">
              <div class="lg:max-w-[50%]  hidden lg:block bg-car-login w-full bg-cover bg-[-5rem] xl:bg-[0]"></div>
              <div class="lg:max-w-[50%]">
                <div class="p-12">
                  <div class="text-center">
                    <h1 class="text-xl  md:h4 text-[#3a3b45] mb-2">Forgot Your Password?</h1>
                    <p class=" text-sm md:text-base mb-6 text-[#858796;]">
                      We get it, stuff happens. Just enter your email address below and we'll send
                      you a link to reset your <br/> password! 
                    </p>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <button href="login.html" class="btn btn-primary btn-user btn-block">
                      Reset Password
                    </button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <RouterLink :to="{ name: 'auth' }" class="text-sm">¿Tienes cuenta?</RouterLink>
                  </div>
                  <div class="text-center">
                    <RouterLink :to="{ name: 'registrar' }" class="text-sm"> ¡Crear cuenta! </RouterLink>
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

</script>

<style scoped lang="scss">
a {
    color: #4e73df;
    text-decoration: none;
    background-color: transparent;
}
body {
    margin: 0;
    font-family: Nunito,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji" !important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #858796;
    text-align: left;
    background-color: #fff;
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
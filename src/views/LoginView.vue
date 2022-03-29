<template>
  <div>
     <!--old
    <h1>Login</h1>
    <form @submit.prevent="performLogin">

      <input type="email" v-model="email" class="form-control mb-3" placeholder="E-Mail">
     
      <input type="password" v-model="password" minlength="8" class="form-control mb-3" placeholder="Password">

      <button type="submit" class="btn btn-primary">Login</button>
      <router-link to="/register">Registrieren</router-link>
    </form>
  
  -->

<form @submit.prevent="performLogin" class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Wellcome to HelloFood</h3>
            <p>Please login to continue</p>

            <div class="form-outline mb-4">
              <input type="email" v-model="email" class="form-control mb-3" placeholder="E-Mail">
            </div>

            <div class="form-outline mb-4">
              <input type="password" v-model="password" minlength="8" class="form-control mb-3" placeholder="Password">
            </div>

             <button type="submit" class="btn btn-primary">Login</button>
              
<router-link to="/register">Registrieren</router-link>
            <hr class="my-4">

            

          </div>
        </div>
      </div>
    </div>
  </div>
</form>


</div>

</template>

<script>
  export default {
    name: 'LoginView',
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      async performLogin () {
        try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          });
          this.$router.push('/dashboard')
        } catch (err) {
          console.error(err + 'hello');
        }
      }

    }
  }
</script>

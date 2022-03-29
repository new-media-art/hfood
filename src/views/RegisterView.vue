<template>
  <div>
    <form @submit.prevent="performRegistration" class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Wellcome to HelloFood</h3>
            <p>Please register to continue</p>

            <div class="form-outline mb-4">
      
      <input
        type="email"
        v-model="email"
        class="form-control mb-3"
        placeholder="E-Mail"
      />
      </div>

      <div class="mb-3">
        
        <input name="firstName" v-model="firstName" placeholder="first name">
      </div>
      <div class="mb-3">
        
        <input name="lastName" v-model="lastName" placeholder="last name">
      </div>
       <div class="mb-3">
        
        <input name="username" v-model="username" placeholder="username">
      </div>
      <div class="mb-3">
        
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      
      <button type="submit" class="btn btn-primary">Register</button>
      <router-link to="/login">Login</router-link>

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
  name: 'RegisterView',
  data: () => ({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    termsOfUseAccepted: true,
  }),
  methods: {
    async performRegistration() {
      try {
        await this.$store.dispatch("register", {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          termsOfUseAccepted: true,
        });
        this.$router.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

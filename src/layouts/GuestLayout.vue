<template>
  <div>
    <nav class="pb-0">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" exact-active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" exact-active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link" exact-active-class="active">Registrieren</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>

  


  </div>
</template>

<style scoped>
  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  nav button {
    border-radius: 10px;
    background: white;
    border: 1px solid gray;
  }

  nav button.router-link-exact-active {
    background: gray;
    color: white;
  }
</style>

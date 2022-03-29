<template>
  <div class="about">
    <h1>This is an about page</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>UserId</th>
        <th>Username</th>
        <th>Firstname</th>
        <th>Lastname</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in $store.state.users" :key="user.userId">
        <td>{{user.userId}}</td>
        <td>{{user.username}}</td>
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('loadAllUsers')
    }
  }
</script>

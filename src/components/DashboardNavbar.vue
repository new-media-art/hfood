<template>
 <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div>
        Hallo, {{ name }}
        <button type="button" class="btn btn-danger btn-sm" @click="logout">
          Logout
        </button>
      </div>
    </div>
  </nav>-->
  <!--NEW-->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <router-link to="/dashboard" class="navbar-brand">HelloFood</router-link>
            
            
            <ul class="navbar-nav">
              
              <li class="nav-item bg-vue2 ml-4 rounded">
                 
                 <router-link exact-active-class="active"  to="/edit-task"><button type="button" class="btn btn-success btn-lg">
                    <!-- class="nav-link text-dark"          -->
                    <i class="fas fa-carrot"></i>Add recipe
                   
                 </button></router-link>
                
                </li>
                <div class="name"> 
                Hallo, {{ name }}
                </div>
                <li class="nav-item">
                   <img src="https://picsum.photos/200" alt="Avatar Logo" style="width:40px;" class="rounded-pill">  
                    
                </li>
                <li class="nav-item">
                     <button type="button" class="btn btn-danger btn-sm" @click="logout">
                           <i class="fas fa-sign-out-alt mr-2"></i>      Logout
                              </button>
                        
                    
                </li>
                
            </ul>
        </div>

    </nav>


</template>

<script>
  export default {
    computed: {
      name() {
        if(this.$store.state.user) {
          return this.$store.state.user.firstName + ' ' + this.$store.state.user.lastName
        }
        return 'Unknown User'
      }
    },
    methods: {
      logout() {
        this.$store.commit('logout');
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
button { 
  margin-right: 25px;
}
img { 
  margin-right: 25px;
}
.name { 
  margin: 10px;
  color: white;
}
</style>
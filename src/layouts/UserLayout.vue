<template>
  <div class="bg-light">

    <dashboard-navbar/>

 
<jumbo-tron/>



    <div class="container-fluid">
      <div class="row">
        
        <div class="col-12">
          <!--<router-view/> change to name of component-->
          <taskListOverview />


        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from '@/components/DashboardNavbar'
  import JumboTron from '@/components/JumboTron'
  
  import TaskListOverview from '@/views/TasklistOverview'
  

  export default {
    components: {
      
      DashboardNavbar,
      JumboTron,
      TaskListOverview
        
    },
    mounted () {
      this.$store.dispatch('loadUser');
    }
  }
</script>

<style scoped>
  
</style>

<template>
  <div>
   
    <h3 class="display-5" v-if="$store.state.user">
     Hallo, {{ $store.state.user.firstName }}. Here are your recipes!
     <!-- {{ $store.state.tasks[0].taskListId}} -->
      {{ $store.state.user.taskLists[0].taskListId }}
    </h3>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="task in this.$store.state.tasks" :key="task.taskId">
        <div class="col">
          <div id="border" class="card">
            <img src="https://picsum.photos/400" class="card-img" />
            <div class="card-body">
              <h5 class="card-title"><strong>{{ task.title }}</strong></h5>
              <p class="card-text">{{ task.description }}</p>
           </div> 

           <div class="card-footer">
            <div>
            <i 
                    class="fas fa-heart"
                    style="cursor: pointer;"
                    @click="like(task.id)"

            ></i>
            
            <i 
                    class="fa fa-trash"
                    style="cursor: pointer;"
                    @click="editTask(task)"
                    ></i>
              </div>  
                </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskListOverview",
  //new
  data() {
    return {
    // task
    }
  },

  mounted() {
    // this.$store.state.tasks
    this.$store.dispatch("loadAllTasks");
  },
  
  methods: {
    editTask(task) {
      this.$store.dispatch("editTask", task);
      console.log(task)
    },
  }
}



</script>

<style>
i {
  margin-right: 15px;
  margin-left: 15px;
}

</style>

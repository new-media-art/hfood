<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <router-link to="/dashboard" class="navbar-brand">Back</router-link>
      </div>
    </nav>

    <div class="container px-4">
      <div class="row gx-5">
        <div class="col">
          <div class="p-3 border bg-light">
            <table class="table">
              <tr>
                <th>TaskID</th>
                <th>Title</th>
                <th>TaskId in backend</th>
              </tr>

              <tr v-for="(task, index) in $store.state.tasks" :key="index">
                <td>{{ index + 1 }} {{ task.index }}</td>
                <td>{{ task.title }}</td>
                <td>{{ task.taskId }}</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="col">
          <div class="row align-items-center">
            <div class="p-3 border bg-light">
              <h1>Task Hinzufügen</h1>
              <form @submit.prevent="addTask">
                <!--  <input
        type="number"
        step="1"
        v-model="taskId"
        placeholder="TaskId"
        required
      />-->
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Title</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="title"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Recipe</label
                  >
                  <textarea
                    class="form-control"
                    v-model="description"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <br>
                <div class="mb-3">
                  <input type="file" @change="onFileChanged" />
                  <button @click="onUpload" type="button" class="btn btn-dark">Upload!</button>
                </div>
                <br>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary btn-lg mb-3">
                    Add recipe!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    taskId: null,
    title: "",
    description: "",
    selectedFile: null,
  }),
  methods: {
    addTask() {
      this.$store.dispatch("addTask", {
        description: this.description,
        title: this.title,
      });
    },
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const formData = new FormData();
      formData.append("myFile", this.selectedFile, this.selectedFile.name);
      axios
        .post(
          'https://codersbay.a-scho-wurscht.at/api/task/167/attachment',
          formData
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

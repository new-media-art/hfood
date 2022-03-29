import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    users: [],
    user: null,
  },
  /*getters: {
  },*/
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    setUser(state, user) {
      state.user = user;
    },

    logout(state) {
      state.user = null;
      localStorage.removeItem("jwt");
    },

    addTask(state, task) {
      state.tasks.push(task);
    },
    editTask(state, task) {
      const index = state.tasks.findIndex(
        (_task) => _task.taskId === task.taskId
      );
      if (index >= 0) {
        state.tasks.splice(index, 1, task);
      }
    },
  },
  actions: {
    async loadAllUsers(store) {
      const userResponse = await Vue.axios.get(
        "https://codersbay.a-scho-wurscht.at/api/user/all"
      );

      store.commit("setUsers", userResponse.data);
    },

    async loadAllTasks(store) {
      //767 hellofood state.user.taskLists[0].taskListId
      //nicky jam 105 this.state.user.taskLists[0].tasklistId
      // const response = await Vue.axios.get(`https://codersbay.a-scho-wurscht.at/api/tasklist/${ store.state.user.taskLists[0].tasklistId }` );
      //const response = await Vue.axios.get(`https://codersbay.a-scho-wurscht.at/api/tasklist/${ store.state.tasks.taskListId }` );
      //const response = await Vue.axios.get(`https://codersbay.a-scho-wurscht.at/api/tasklist/${ store.state.user.data.user.taskLists[0].taskListId }` );
      //const response = await Vue.axios.get(`https://codersbay.a-scho-wurscht.at/api/tasklist/${ this.state.tasks[0].taskListId }` );
      //const response = await Vue.axios.get(`https://codersbay.a-scho-wurscht.at/api/tasklist/${ this.tasks[0].taskListId }` );

      const response = await Vue.axios.get(
        "https://codersbay.a-scho-wurscht.at/api/tasklist/767"
      );

      store.commit("setTasks", response.data.tasks);
    },
    async register(store, credentials) {
      const response = await Vue.axios.post(
        "https://codersbay.a-scho-wurscht.at/api/auth/register",
        credentials
      );

      store.commit("setUser", response.data.accessToken);
      localStorage.setItem("jwt", response.data.accessToken);
    },

    async login(store, credentials) {
      const response = await Vue.axios.post(
        "https://codersbay.a-scho-wurscht.at/api/auth/login",
        credentials
      );

      store.commit("setUser", response.data.user);
      localStorage.setItem("jwt", response.data.accessToken);
    },

    async loadUser(store) {
      const response = await Vue.axios.get(
        "https://codersbay.a-scho-wurscht.at/api/auth"
      );

      store.commit("setUser", response.data.user);
      localStorage.setItem("jwt", response.data.accessToken);
      console.log(response.data.user.taskLists[0].taskListId);
    },

    async addTask(store, credentials) {
      const response = await Vue.axios.post(
        "https://codersbay.a-scho-wurscht.at/api/task",
        credentials
      );
      // console.log(response.data);
      store.commit("addTask", response.data);
    },
    async editTask(store, credentials) {
      const response = await Vue.axios.post(
        "https://codersbay.a-scho-wurscht.at/api/task",
        credentials
      );

      store.commit("editTask", response.data);
      console.log("x" + response);
    },
  },
});

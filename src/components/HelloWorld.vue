<template>
  <div>
    <input type="text" v-model="message" v-on:keyup.enter="addToList" />
    <button @click="addToList">Add Task</button>
    <h2>Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task">{{task}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      tasks: []
    };
  },

  methods: {
    addToList() {
      console.log(this.message);
      if (this.message == "") {
        alert("message is empty");
        return;
      }
      this.tasks.push(this.message);
      alert("goog");
      this.message = "";
      console.log(this.tasks);
    }
  }
};
</script>
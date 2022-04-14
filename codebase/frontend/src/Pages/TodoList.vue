<script type="text/javascript">
import {getTodos, uploadTodo} from "../api/api";
import TaskCard from '../components/TaskCard';

export default {
  name: 'TodoList',
  data () {
    return {
      todos: [],
    };
  },
  mounted () {
    getTodos().then((data) => {
      this.todos = data;
    });
  },
  components: {
    TaskCard
  },
  methods: {
    addTodo () {
      const description = document.getElementById('description-input').value;
      uploadTodo(description, "Active");
    },
    getTodoList () {
      return this.todos;
    },
  }
}
</script>

<template>
  <div id="todo-list">
    <input type="text" id="description-input">
    <button @click="addTodo">Click me</button>
    <div v-for="todo in this.$data['todos']">
      <TaskCard :description="todo.description" :status="todo.status" />
    </div>
  </div>
</template>


<style>
  div#todo-list {
    max-width: 500px;
    margin: auto;
  }
</style>

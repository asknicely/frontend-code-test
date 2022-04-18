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
    })
  },
  components: {
    TaskCard
  },
  methods: {
    addTodo () {
      const description = document.getElementById('description-input').value;
      if (description) {
        uploadTodo(description).then((data) => {
          this.todos.push(data)
        });
      }
    },
    getTodoList () {
      return this.todos;
    },
  }
}
</script>

<template>
  <div id="todo-list">
    <h1>Todo List</h1>
    <div class="todo-input">
      <input type="text" id="description-input" placeholder="Write something...">
      <button @click="addTodo">Add todo</button>
    </div>

    <div v-for="todo in this.$data['todos']">
      <TaskCard :description="todo.description" :status="todo.status" :todoId="todo.id" />
    </div>
  </div>
</template>


<style>
  div#todo-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.todo-input {
    display: flex;
    width: 566px;
    margin-bottom: 32px;
    margin-top: 16px;
  }

  input#description-input {
    width: 100%;
    margin-right: 8px;
  }

  h1 {
    color: #efffdf;
  }
</style>

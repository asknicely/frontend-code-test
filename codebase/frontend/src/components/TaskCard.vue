<template>
  <div class="card">
    <div :style="descriptionStyle">
      {{ this.description }}
    </div>
    <div>
      <button @click="markDone">Done</button>
      <button @click="deleteThisTodo">Delete</button>
    </div>
  </div>
</template>

<script type="text/javascript">

import {deleteTodo, doneTodo} from "../api/api";

export default {
  name: 'TaskCard',
  props: ['description', 'status', 'todoId'],
  methods: {
    deleteThisTodo() {
      deleteTodo(this.todoId).then(() => {
        this.refresh();
      });
    },
    markDone() {
      doneTodo(this.todoId).then(() => {
        this.refresh();
      })
    },
    refresh() {
      window.location.reload();
    }
  },
  computed: {
    descriptionStyle() {
      return {
        'text-decoration': this.status === 'Done' ? 'line-through' : 'default',
      }
    }
  }
}
</script>

<style>
  div.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    border: 1px solid black;
    border-radius: 8px;
    margin-bottom: 16px;
    height: 50px;
    width: 500px;
    background-color: #b9b9b9;
  }
</style>

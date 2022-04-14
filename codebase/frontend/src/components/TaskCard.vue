<template>
  <div class="card">
    <div>
      {{ this.description }}
    </div>
    <div>
      {{ this.status }}
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'TaskCard',
  props: ['description', 'status'],
  // data () {
  //   return {
  //     todo: 'Welcome to Your Vue.js App'
  //   }
  // },
  // mounted () {
  //   this.todo = getTodos();
  //   console.log(this.todo)
  // },
  // methods: {
  //   addTodo() {
  //     uploadTodo("Some description", "Active");
  //   }
  // }
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
  }
</style>

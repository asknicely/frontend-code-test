import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../Pages/TodoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    }
  ]
})

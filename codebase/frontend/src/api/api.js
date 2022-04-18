import axios from 'axios'

const config = {
  headers: {
    Authorization: '',
    Accept: 'application/json'
  }
}

export const getTodos = async () => {
  return axios.get('http://localhost:8101/api/todos', config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return null
  })
}

export const uploadTodo = (description) => {
  const data = {
    'description': description,
    'status': 'Active'
  }
  return axios.post('http://localhost:8101/api/todos?page=1', data, config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return null
  })
}

export const deleteTodo = (id) => {
  return axios.delete(`http://localhost:8101/api/todos/${id}`, config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return null
  })
}

export const doneTodo = (id, description) => {
  const data = {
    'description': description,
    'status': 'Done'
  }
  return axios.put(`http://localhost:8101/api/todos/${id}`, data, config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return null
  })
}

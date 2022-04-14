import axios from 'axios';

const config = {
  headers: {
    Authorization: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDk5MTE5NzQsImV4cCI6MTY0OTkxNTU3NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibWF5YSJ9.Hikt1vfouIcqueLrqMtSKMhl1-bKFyQZqbQW-30fj4XBahc15hi9FPjuvUDWchZyLedXXoKNP_UFCj-fl-b5v6x3UKc2zfDh-9esRHgP87n75nlnegjGEdy8NVWTFwoIGg89IC45La2LN2Su_0nJbDFOzEBWuHWmz_cU3kQUFZbmcAJLNJfsw901z8KcR6aPr4igGHkcoSoDk4-Aw9p_CaMYiUIQ3NwDaDPI3xxTs56GUoWT-uLVnerxATw6W_E5JpC6Y6FB2HRzxlhc3vIaYL6a7p3LigqhjtCSbrO9ux_qkl17INcstfgejTTNn4oAVndGyKxD1RtJLAf6xR9zEA',
    Accept: 'application/json'
  }
}

export const getTodos = async () => {
  return await axios.get('http://localhost:8101/api/todos?page=1', config).then((response) => {
    return response.data;
  }).catch((error) => {
    console.log(error);
    return null;
  });
}

export const uploadTodo = (description, status) => {
  const data = {
    "description": description,
    "status": status
  }
  return axios.post('http://localhost:8101/api/todos?page=1', data, config).then((response) => {
    return response.data;
  }).catch((error) => {
    console.log(error);
    return null;
  });
}

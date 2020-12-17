import axios from 'axios'

export const login = (id, password) => {
  return axios.post('http://localhost:8080/login', {
    id, password
  })
}
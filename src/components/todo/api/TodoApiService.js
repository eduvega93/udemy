import axios from 'axios'

const apiCLient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveAllTodosForUser = (username) => apiCLient.get(`/user/${username}/todos`)

export const deleteTodoApi = (username, id) => apiCLient.delete(`/user/${username}/todos/${id}`)
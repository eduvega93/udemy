import { apiCLient } from './ApiClient'

export const retrieveAllTodosForUser = (username) => apiCLient.get(`/user/${username}/todos`)

export const deleteTodoApi = (username, id) => apiCLient.delete(`/user/${username}/todos/${id}`)

export const retrieveTodoApi = (username, id) => apiCLient.get(`/user/${username}/todos/${id}`)

export const updateTodo = (username, id, todo) => apiCLient.put(`/user/${username}/todos/${id}`, todo)

export const createTodo = (username, todo) => apiCLient.post(`/user/${username}/todos`, todo)


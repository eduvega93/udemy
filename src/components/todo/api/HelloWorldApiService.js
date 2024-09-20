import axios from 'axios'

const apiCLient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

//export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean')

export const retrieveHelloWorldBeanPathVar = (name) => apiCLient.get(`/hello-world/path-variable/${name}`)
import { apiCLient } from './ApiClient'

//export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean')

    export const retrieveHelloWorldBeanPathVar = (name) => 
        apiCLient.get(`/hello-world/path-variable/${name}`)

    export const executeBasicAuthenticationService = (token) => 
        apiCLient.get(`/basicauth`)
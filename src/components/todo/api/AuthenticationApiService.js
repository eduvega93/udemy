import { apiCLient } from './ApiClient'


export const executeBasicAuthenticationService = (token) => 
    apiCLient.get(`/basicauth`,
        {
            headers: {
                Authorization: token
        }
    }
    )

export const executeJwtAuthenticationService = (username, password) => 
    apiCLient.post(`/authenticate`,
        {username,password}
    )
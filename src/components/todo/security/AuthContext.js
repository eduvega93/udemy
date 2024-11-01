import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiCLient } from "../api/ApiClient";

//CREATE A CONTEXT
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//PUT SOME STATE IN THE CONTEXT
//SHARE THE CREATED CONTEXT WITH OTHER COMPONENTS

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)


    async function login(username, password){
        const baToken = 'Basic ' + window.btoa(username+':' + password)

        try{
            const response = await executeBasicAuthenticationService(baToken)
        
            if(response.status==200){
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                
                apiCLient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=baToken
                        return config
                    }
                )

                return true
            }
            else{
                logout()
                return false
            }
        }
        catch(error){
                logout()
                return false
        }

       
    }

        function logout(){
            setAuthenticated(false)
            setUsername(null)
            setToken(null)
        }

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}

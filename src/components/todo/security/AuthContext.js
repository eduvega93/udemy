import { createContext, useContext, useState } from "react";

//CREATE A CONTEXT
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//PUT SOME STATE IN THE CONTEXT
//SHARE THE CREATED CONTEXT WITH OTHER COMPONENTS

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

        function login(username, password){
        if(username==='in28Minutes' && password==='123456'){
            setAuthenticated(true)
            setUsername(username)
            return true
        }
        
        else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

        function logout(){
            setAuthenticated(false)
        }

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}

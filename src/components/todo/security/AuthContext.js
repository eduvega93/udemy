import { createContext, useContext, useState } from "react";

//CREATE A CONTEXT
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//PUT SOME STATE IN THE CONTEXT
//SHARE THE CREATED CONTEXT WITH OTHER COMPONENTS

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)

        function login(username, password){
        if(username==='in28Minutes' && password==='123456'){
            setAuthenticated(true)
            return true
        }
        
        else{
            setAuthenticated(false)
            return false
        }
    }

        function logout(){
            setAuthenticated(false)
        }

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

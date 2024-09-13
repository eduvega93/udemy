import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'


export default function LoginComponent(){

    const [username, setUser] = useState('in28Minutes')

    const [password, setPassword] = useState('123456')

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUserNameChange(event){
        setUser(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }
        
        else{
            setShowErrorMessage(true)
        }
        
    }


    return(
        <div className="Login">
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" 
                                       value={username}
                                       onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password"
                                           value={password}
                                           onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login"
                                          onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}
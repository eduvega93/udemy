import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter,Link,Route,Routes, useNavigate, useParams } from 'react-router-dom'

export function TodoApp(){
    return(
        <div className="TodoApp">
            <HeaderComponent></HeaderComponent>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                    <Route path='/todos' element={<ListTodosComponent/>}></Route>
                    <Route path='/logout' element={<LogOutComponent/>}></Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent></FooterComponent>
        </div>
    )
}

function LoginComponent(){

    const [username, setUser] = useState('in28Minutes')

    const [password, setPassword] = useState('123456')

    const [showSuccesMessage, setShowSuccesMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUserNameChange(event){
        setUser(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username==='in28Minutes' && password==='123456'){
            console.log('Succeded')
            setShowSuccesMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }
        
        else{
            console.log('Failed')
            setShowSuccesMessage(false)
            setShowErrorMessage(true)
        }
        
    }


    return(
        <div className="Login">
            {showSuccesMessage && <div className='succesMessage'>Authenticated Succesfully</div>}
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


function WelcomeComponent(){
    const params = useParams()
    return(
        <div className="Welcome">
            <h1>Welcome {params.username}</h1>
            <div>
                <Link to="/todos"> Your Todos</Link>
            </div> 
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our IT team at 72322299
            </div>
        </div>
    )
}

function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate},
    ]

    return(
        <div className="ListTodosComponent">
            <h1>Things you want to do</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <div className="header">
            <div>
                Header <hr/>
            </div>
        </div>
    )
}

function FooterComponent(){
    return(
        <div className="footer">
            <div>
            <hr/> Footer 
            </div>
        </div>
    )
}

function LogOutComponent(){
    return(
        <div className="LogOutComponent">
            <h1>You are Logged Out!</h1>
            <div>
                Thank you for using our app! Come back Later
            </div>
        </div>
    )
}
import './TodoApp.css'
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import LogOutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

function AuthenticatedRoute({children}){
    const authContext = useAuth();
    if(authContext.isAuthenticated){
        return children
    }
    return <Navigate to="/"></Navigate>
    
}

export function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                        <Routes>
                            <Route path='/' element={<LoginComponent/>}></Route>
                            <Route path='/login' element={<LoginComponent/>}></Route>


                            <Route path='/welcome/:username' element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent/>
                                </AuthenticatedRoute>
                                }></Route>

                            <Route path='/todos' element={
                                <AuthenticatedRoute>
                                    <ListTodosComponent/>
                                </AuthenticatedRoute>
                                }></Route>

                            <Route path='/todo/:id' element={
                                <AuthenticatedRoute>
                                    <TodoComponent/>
                                </AuthenticatedRoute>
                                }></Route>

                            <Route path='/logout' element={
                                <AuthenticatedRoute>
                                    <LogOutComponent/>
                                </AuthenticatedRoute>
                                }></Route>


                            <Route path='*' element={<ErrorComponent/>}></Route>
                        </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
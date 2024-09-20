import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUser } from "./api/TodoApiService";
import {useAuth} from "./security/AuthContext"


export default function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const authContext = useAuth()
    const username = authContext.username

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    //seleccionar las lineas y luego ctrl k + ctrl c para comentar varias lineas a la vez
    //seleccionar las lineas y luego ctrl k + ctrl u para descomentar varias lineas a la vez
    //const todos = [
    //     { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    //     { id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate },
    //     { id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate },
    // ]

    useEffect(
        () => refreshTodos(),[]
    )

    function refreshTodos(){
        retrieveAllTodosForUser(username)
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id){
        console.log('clicked' + id)
        deleteTodoApi(username,id)
        .then(
            () => {
                setMessage(`Delete of todo with id: ${id} has deleted`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))
        
    }



    return (
        <div className="container">
            <h1>Things you want to do</h1>
            {message&& <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" 
                                                    onClick={() => deleteTodo(todo.id)}
                                                    >Delete</button></td>
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
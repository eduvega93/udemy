import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean, retrieveHelloWorldBeanPathVar } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent(){

    const params = useParams()

    const [message, setMessage] = useState(null)

    //const authContext =  useAuth()

function callAPI(){
    console.log('called')
    //axios
    //retrieveHelloWorldBean()
    //.then((respnse) => successfulRsp(respnse))
    //.catch((error) => unsuccessfulRsp(error))
    //.finally(() => console.log('cleanup'))

    retrieveHelloWorldBeanPathVar('PeneGrande')
    .then((response) => successfulRsp(response))
    .catch((error) => unsuccessfulRsp(error))
    .finally(() => console.log('cleanup'))
}

function successfulRsp(response){
    console.log(response)
    setMessage(response.data.message)
}

function unsuccessfulRsp(error){
    console.log(error)
}


    return(
        <div className="Welcome">
            <h1>Welcome {params.username}</h1>
            <div>
                <Link to="/todos"> Your Todos</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callAPI}>Call REST API</button>
            </div>
            <div className='text-info'>
                {message}
            </div>
        </div>
    )
}
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function WelcomeComponent(){

function callAPI(){
    console.log('called')
    //axios
    axios.get('http://localhost:8080/hello-world')
    .then((respnse) => successfulRsp(respnse))
    .catch((error) => unsuccessfulRsp(error))
    .finally(() => console.log('cleanup'))
}

function successfulRsp(response){
    console.log(response)
}

function unsuccessfulRsp(error){
    console.log(error)
}

    const params = useParams()
    return(
        <div className="Welcome">
            <h1>Welcome {params.username}</h1>
            <div>
                <Link to="/todos"> Your Todos</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callAPI}>Call REST API</button>
            </div>
        </div>
    )
}
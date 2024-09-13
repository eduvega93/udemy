import { Link, useParams } from 'react-router-dom'

export default function WelcomeComponent(){
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
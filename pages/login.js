import Layout from '../components/Layout'
import Login from '../components/Login'

export default function SignIn(){
    return(
        <Layout>
            <div className="container mt-5 p-2">
               <Login /> 
            </div>
            
        </Layout>
    )
}
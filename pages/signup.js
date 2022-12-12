import Layout from "../components/Layout";
import Signup from "../components/Signup";

export default function RegisterUser(){
    return(
        <Layout>
            <div className="container mt-5 p-2">
                <Signup />
            </div>
            
        </Layout>
    )
}
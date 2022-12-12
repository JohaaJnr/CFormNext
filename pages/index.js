import Table from "../components/index/Table";
import Token from "../components/index/Token";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import User from "../model/User";
import Messege from "../model/Messeges";
const jwt = require('jsonwebtoken')

export default function Home({ userDetail, messeges}){

 

  return(
   <Layout>
    <Navbar u={userDetail[0].username} />
      <div className="container mt-5 p-2">
        <Token k={userDetail[0]} />
        <Table m={messeges}/>
      </div>
   </Layout>
  )
}


export async function getServerSideProps({ req, res }) {

  var userCookie = req.cookies.user
  const session = jwt.verify(userCookie, 'shhhh')

    const user = await User.find({ email: session.user.email })
    const messege = await Messege.find({ user: session.user.email })

    

  return {
    props: { userDetail: JSON.parse(JSON.stringify(user)), messeges: JSON.parse(JSON.stringify(messege))  }, // will be passed to the page component as props
  }
}

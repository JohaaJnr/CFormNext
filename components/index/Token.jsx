import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Token = (props) => {

  const [token, setToken] = useState(props.k.key)
  

  function tokenCreate(e){
    e.preventDefault()
    axios.post('/api/token', { id: props.k._id }).then(result=>{
      setToken(result.data.token)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div>
          <div class="card">
            
              <div class="card-body">
                  <h5 class="card-title">API Key</h5>
                  {
                    token == null ? <button class="btn btn-primary" onClick={tokenCreate}>Create Token</button> : <p class="card-text">Token : <span>{ token }</span></p>
                  }
                  
              </div>
          </div>
    </div>
  )
}

export default Token


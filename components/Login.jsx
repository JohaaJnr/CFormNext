import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'
import Cookies from 'js-cookie'

const Login = () => {
	
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState(0)

	function logUser(e){
		e.preventDefault()
		setLoading(true)
		const user = {
			email: document.querySelector('#exampleInputEmail1').value,
			password: document.querySelector('#exampleInputPassword1').value
		}
		axios.post('/api/login', user).then(response=>{
			setLoading(false)
			if(response.data.success){
				Cookies.set('user', response.data.user, { expires: 0.04167 })
				setStatus(response.data.success)
				Router.push('/')
				
			}else{
				setStatus(response.data.error)
			}
		}).catch(err=>{
			setLoading(false)
			
		})
	}

  return (
    <div class="global-container">
	<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Log in to CForms</h3>
		{
			status ? <div className="alert alert-danger alert-dismissible fade show" role="alert">{status}</div> : <div></div>
		}
		<div class="card-text">
			<form onSubmit={logUser} >
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<a href="#" style={{ float: "right" , fontSize: "12px" }}>Forgot password?</a>
					<input type="password" class="form-control form-control-sm" id="exampleInputPassword1" />
				</div>
				{
					loading === false ? <button className="btn btn-primary" id='submitBtn' type="submit">Login</button> : <button className="btn btn-primary" type="button" disabled> <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Loading...</button>
				}
				
				<div class="sign-up">
					Don't have an account? <Link href="/signup">Create One</Link>
				</div>
			</form>
		</div>
	</div>
</div>
</div>
  )
}

export default Login
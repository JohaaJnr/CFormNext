import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'

const Signup = () => {

	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState(0)
	async function createUser(e) {
		e.preventDefault()
		setLoading(true)
		const user = {
			username: document.querySelector('#validationCustom02').value,
			email: document.querySelector('#validationCustom01').value,
			password: document.querySelector('#validationCustom03').value
		}

		await axios.post('/api/register', user).then(response => {

			setLoading(false)
			if (response.data.success) {
				Router.push('/login')

			} else {
				setStatus(response.data.msg)
			}

		}).catch(error => {
			setStatus(error)
		})

	}

	return (
		<div className="global-container">
			<div className="card login-form">
				<div className="card-body">
					<h3 className="card-title text-center">Register to CForms</h3>
					{
						status ? <div className="alert alert-danger alert-dismissible fade show" role="alert">{status}</div> : <div></div>
					}
					<div className="card-text mt-2">

						<form className="row g-3" onSubmit={createUser}>
							<div className="col-md-6">
								<label for="validationCustom01" className="form-label">Email Address</label>
								<input type="email" className="form-control" id="validationCustom01" placeholder='Email Address' required />


							</div>
							<div className="col-md-6">
								<label for="validationCustom02" className="form-label">Username</label>
								<input type="text" className="form-control" id="validationCustom02" placeholder='Enter Username' required />

							</div>

							<div className="col-md-6">
								<label for="validationCustom03" className="form-label">Password</label>
								<input type="password" className="form-control" id="validationCustom03" placeholder='Must be 8 characters long' required />

							</div>

							<div className="col-12">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
									<label className="form-check-label" for="invalidCheck">
										Agree to terms and conditions
									</label>

								</div>
							</div>
							<div className="col-12">
								{
									loading === false ? <button className="btn btn-primary" id='submitBtn' type="submit">Register</button> : <button className="btn btn-primary" type="button" disabled> <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Loading...</button>
								}

							</div>
						</form>
						<div className="sign-up">
							Have an account? <Link href="/login">Login</Link>
						</div>


					</div>
				</div>
			</div>

		</div>
	)
}

export default Signup
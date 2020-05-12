import React, { useState } from 'react'
import './authPages.scss'
import { Redirect } from 'react-router-dom'
import Radium from 'radium'
import AuthInput from '../../components/AuthInput/AuthInput'
import AuthButton from '../../components/AuthButton/AuthButton'
import useHttp from '../../hooks/http.hook'

const LoginPage = () => {
	const { /*loading,*/ request, error, clearError } = useHttp()
	const [incorrectPassword, setIncorrectPassword] = useState(false)
	const invalidFields = []

	if (Array.isArray(error)) {
		error.forEach(err => invalidFields.push(err.param))
	}

	const [user, setUser] = useState({
		email: '',
		password: ''
	})
	const [redirect, setRedirect] = useState(false)

	const changeHandler = (event, field) => {
		const text = event.target.value
		setUser({ ...user, [field]: text })
	}

	const loginHandler = async () => {
		const data = await request('/api/auth/login', 'POST', { ...user })
		if (data.errors) {
			setIncorrectPassword(true)
			return
		}
	}

	return (
		<div className='loginPage'>
			{redirect ? <Redirect to='/register'/> : null}
			<div className='auths'>
				<div className='head'>
					<h1>Novelie</h1>
					<p className='head_p'>Create your own visual novel.</p>
				</div>

				<div className='inputs'>
					<AuthInput
						placeholder='Email'
						field='email'
						onChange={changeHandler}
						isInvalid={invalidFields.includes('email')}
					/>
					<AuthInput
						placeholder='Password'
						field='password'
						onChange={changeHandler}
						isInvalid={invalidFields.includes('password')}
					/>

					{error ? <p style={{color: 'red', marginTop: '1rem'}}>{error[0].msg}</p> :
						(incorrectPassword ?
							<p style={{color: 'red', marginTop: '1rem'}}>Incorrect password</p> : null )}

					<div className='buttons'>
						<AuthButton
							text='Login'
							onClick={loginHandler}
						/>
						<div className='textButtons'>
							<p style={{
								fontFamily: 'Sitka Text',
								color: 'rgb(137,137,137)',
								transition: '0.3s',
								cursor: 'pointer',
								':hover': {
									color: 'black'
								}
							}} key='1'
								onClick={() => {}}
							>Forgot password?</p>
							<p style={{
								fontFamily: 'Sitka Text',
								color: 'rgb(137,137,137)',
								transition: '0.3s',
								cursor: 'pointer',
								':hover': {
									color: 'black'
								}
							}} key='2'
							   onClick={() => setRedirect(true)}
							>Create account</p>
						</div>
					</div>
				</div>
			</div>
			<p style={{color: 'rgb(180,180,180)', fontFamily: 'Sitka Text'}}>Version only for desktops</p>
		</div>
	)
}

export default Radium(LoginPage)
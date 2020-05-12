import React, { useState } from 'react'
import './authPages.scss'
import { Redirect } from 'react-router-dom'
import Radium from 'radium'
import AuthInput from '../../components/AuthInput/AuthInput'
import AuthButton from '../../components/AuthButton/AuthButton'
import useHttp from '../../hooks/http.hook'

const RegisterPage = () => {
	const { /*loading,*/ request, error, clearError } = useHttp()
	const invalidFields = []
	const [success, setSuccess] = useState(false)

	if (Array.isArray(error)) {
		error.forEach(err => invalidFields.push(err.param))
	}

	const [user, setUser] = useState({
		email: '',
		password: '',
		confirm: '',
		nickname: ''
	})
	const [redirect, setRedirect] = useState(false)

	const changeHandler = (event, field) => {
		clearError()
		const text = event.target.value
		setUser({ ...user, [field]: text })
	}

	const registerHandler = async () => {
		console.log(user)

		const data = await request('/api/auth/register', 'POST', { ...user })
		console.log(data)
		if (data.errors) return
		setSuccess(true)
		setTimeout(() => {
			setRedirect(true)
		}, 3000)
	}
	console.log(success)
	return (
		<div className='loginPage'>
			{redirect ? <Redirect to='/login'/> : null}
			<div className='auths'>
				<div className='head'>
					<h1>Novelie</h1>
					<p className='head_p' style={{
						fontSize: '1rem',
						color: error ? 'red' : (success ? 'green' : 'black')
					}}
					>{error ? `${error[0].msg }` : (success ?
						'User created successfully' : 'Create your own Novelie account.')}</p>
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
					<AuthInput
						placeholder='Confirm password'
						field='confirm'
						type='password'
						onChange={changeHandler}
						isInvalid={invalidFields.includes('confirm')}
					/>
					<AuthInput
						placeholder='Nickname'
						field='nickname'
						onChange={changeHandler}
						isInvalid={invalidFields.includes('nickname')}
					/>

					<div className='buttons'>
						<AuthButton
							text='Sign up'
							onClick={registerHandler}
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
							}} key='2'
							   onClick={() => setRedirect(true)}
							>Back to Login</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Radium(RegisterPage)
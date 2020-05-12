import React, { useState } from 'react'
import './authPages.scss'
import { Redirect } from 'react-router-dom'
import Radium from 'radium'
import AuthInput from '../../components/AuthInput/AuthInput'
import AuthButton from '../../components/AuthButton/AuthButton'

const LoginPage = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	})
	const [redirect, setRedirect] = useState(false)

	const changeHandler = (event, field) => {
		const text = event.target.value
		setUser({ ...user, [field]: text })
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
					/>
					<AuthInput
						placeholder='Password'
						field='password'
						onChange={changeHandler}
					/>

					<div className='buttons'>
						<AuthButton
							text='Login'
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
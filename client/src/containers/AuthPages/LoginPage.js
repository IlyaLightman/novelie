import React, { useState } from 'react'
import './authPages.scss'
import Radium from 'radium'
import AuthInput from '../../components/AuthInput/AuthInput'
import AuthButton from '../../components/AuthButton/AuthButton'

const LoginPage = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	})

	const changeHandler = (event, field) => {
		const text = event.target.value
		setUser({ ...user, [field]: text })
	}

	console.log(user)

	return (
		<div className='loginPage'>
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
							}} keu='2'
							   onClick={() => {}}
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
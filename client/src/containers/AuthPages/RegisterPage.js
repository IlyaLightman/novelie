import React, { useState } from 'react'
import './authPages.scss'
import Radium from 'radium'
import AuthInput from '../../components/AuthInput/AuthInput'
import AuthButton from '../../components/AuthButton/AuthButton'

const RegisterPage = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		confirm: '',
		nickname: ''
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
					<p className='head_p' style={{fontSize: '1rem'}}>Create your own Novelie account.</p>
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
					<AuthInput
						placeholder='Confirm password'
						field='confirm'
						type='password'
						onChange={changeHandler}
					/>
					<AuthInput
						placeholder='Nickname'
						field='nickname'
						onChange={changeHandler}
					/>

					<div className='buttons'>
						<AuthButton
							text='Sign up'
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
							}} keu='2'
							   onClick={() => {}}
							>Back to Login</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Radium(RegisterPage)
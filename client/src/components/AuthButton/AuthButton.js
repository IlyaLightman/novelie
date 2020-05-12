import React from 'react'
import './AuthButton.scss'

const AuthButton = props => {

	return (
		<div className='Button'>
			<p>{props.text}</p>
		</div>
	)
}

export default AuthButton
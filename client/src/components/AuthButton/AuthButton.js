import React from 'react'
import './AuthButton.scss'

const AuthButton = props => {

	return (
		<div className='Button'
			onClick={props.onClick}
		>
			<p>{props.text}</p>
		</div>
	)
}

export default AuthButton
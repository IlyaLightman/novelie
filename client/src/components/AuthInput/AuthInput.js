import React from 'react'
import './AuthInput.scss'

const AuthInput = props => {
	const field = props.field

	return (
		<div className='Input'>
			<input style={{
				color: props.isInvalid ? 'red' : 'black',
				border: props.isInvalid ? '1px solid red' : null
			}}
				placeholder={props.placeholder}
				onChange={(event) => props.onChange(event, field)}
				type={props.type ? props.type : field}
			/>
		</div>
	)
}

export default AuthInput
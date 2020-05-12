import React from 'react'
import './App.css'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import LoginPage from './containers/AuthPages/LoginPage'
import RegisterPage from './containers/AuthPages/RegisterPage'

function App() {
	return (
		//<div className='App'>
		<Switch>
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
			<Redirect to='/login' />
		</Switch>
	)
}

export default App

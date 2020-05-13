import React from 'react'
import './App.css'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import LoginPage from './containers/AuthPages/LoginPage'
import RegisterPage from './containers/AuthPages/RegisterPage'
import useAuth from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'

function App() {
	const { token, login, logout, userId, ready } = useAuth()
	const isAuthenticated = !!token
	// ready нужно для демонстрации загрузки

	return (
		//<div className='App'>
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthenticated
		}}>
			<Switch>
				<Route path='/login' component={LoginPage} />
				<Route path='/register' component={RegisterPage} />
				<Redirect to='/login' />
			</Switch>
		</AuthContext.Provider>
	)
}

export default App

import { useState, useCallback } from 'react'

const useHttp = () => {
	const [ loading, setLoading ] = useState(false)
	const [ error, setError ] = useState(null)

	const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
		setLoading(true)
		try {
			if (body) {
				body = JSON.stringify(body)
				headers['Content-Type'] = 'application/json'
			}

			const response = await fetch(url, {
				method, body, headers
			})
			const data = await response.json()

			if (!response.ok) {
				console.log('very error very very bad', data)
				setError(data.errors|| 'Something wrong')
				// throw new Error(data.message || 'Something wrong')
			}

			setLoading(false)

			return data
		} catch (err) {
			setLoading(false)
			setError(err.message)
			// throw err
		}
	}, [])

	const clearError = useCallback(() => setError(null), [])

	return { loading, request, error, clearError }
}

export default useHttp
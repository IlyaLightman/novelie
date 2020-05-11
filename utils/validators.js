const { body } = require('express-validator')
const User = require('../models/user')

exports.registerValidators = [
	body('email')
		.withMessage('Enter the correct Email')
		.isEmail()
		.custom(async (value, { req }) => {
			try {
				const user = await User.findOne({ email: value })
				if (user) {
					return Promise.reject('User with this Email already exists')
				}
			} catch (err) {
				console.log(err)
			}
		})
		.normalizeEmail(),
	body('password')
		.withMessage('The password has to have minimum six symbols')
		.isLength({ min: 6, max: 56 })
		.isAlphanumeric()
		.trim(),
	body('confirm')
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error(`Passwords don't match`)
			}
			return true
		})
		.trim(),
	body('username')
		.withMessage('This username is incorrect')
		.isLength({ min: 2, max: 16 })
]
const { Router } = require('express')
const { hash, compare } = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const { registerValidators } = require('../utils/validators')

const router = Router()

// /api/auth/register
router.post('/register', registerValidators,
	async (req, res) => {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Incorrect registration data'
				})
			}

			const { email, password, username } = req.body

			const candidateByEmail = User.findOne({ email })
			const candidateByUsername = User.findOne({ username })
			if (candidateByEmail || candidateByUsername) {
				return res.status(400).json({ message: 'User with this email or username already exists' })
			}

			const hashedPassword = await hash(password, 12)
			const user = new User({ email, password: hashedPassword, username })

			await user.save()

			res.status(201).json({ message: 'The user was created successfully' })
		} catch (err) {
			res.status(201).json({ message: 'Something wrong' })
		}
	}
)
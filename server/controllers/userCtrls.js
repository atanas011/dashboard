import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

export const login = async (req, res) => {

    const { email, password } = req.body

    if (!email) return res.status(400).json({ message: 'Please provide email' })
    if (!password) return res.status(400).json({ message: 'Please provide password' })

    try {
        const user = await User.findOne({ email }).select('+password')
        // console.log(user) // node console
        if (!user) return res.status(404).json({ message: 'User not found' })

        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(401).json({ message: 'Invalid password' })

        const obj = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            category: user.category
        }

        const token = jwt.sign(obj, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP_TIME })

        res.status(200).json({ token })

    } catch (err) {
        console.log(err)
    }
}

export const getWriters = async (req, res) => {

    try {
        const writers = await User.find({ role: 'Writer' }).sort({ createdAt: -1 })

        res.status(200).json({ writers })

    } catch (err) {
        res.sendStatus(500)
    }
}

export const addWriter = async (req, res) => {

    // console.log(req.body)
    const { name, category, email, password } = req.body

    if (!name) return res.status(400).json({ message: 'Please provide name' })
    if (!category) return res.status(400).json({ message: 'Please provide category' })
    if (!email) return res.status(400).json({ message: 'Please provide email' })
    if (!password) return res.status(400).json({ message: 'Please provide password' })

    try {
        let user = await User.findOne({ email: email.trim() })

        if (user) return res.status(409).json({ message: 'Writer already exists' })

        user = await User.create({
            name: name.trim(),
            category: category.trim(),
            email: email.trim(),
            password: await bcrypt.hash(password.trim(), 10),
            role: 'Writer'
        })

        res.status(201).json({ message: 'Writer created', user })

    } catch (err) {
        res.sendStatus(500)
    }
}

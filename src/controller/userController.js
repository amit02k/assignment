const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    console.log('user data from frontend-->',req.body)
    const user = await userModel.create(req.body)
    return res.status(201).json({ msg: 'User created successfully', data: user })
}

const getUsers = async (req, res) => {
    const user = await userModel.find()
    return res.status(201).json({ msg: 'Users data', data: user })
}

const login = async (req, res) => {
    const { _id, name } = req.body
    const user = await userModel.findOne({ _id, name })
    const token = jwt.sign({ id: user._id }, 'interview', { expiresIn: '1h' })
    return res.status(201).json({ msg: 'Token created successfully', Token: token })
}

module.exports = {
    createUser,
    getUsers,
    login
}
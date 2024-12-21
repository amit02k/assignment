const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')
const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) return res.status(401).json({ message: 'Please provide provided' })
    console.log('token ----------->', token)
    const decoded = jwt.verify(token, 'interview')
    console.log('decode--------->',decoded)
    const user = await  userModel.findById(decoded.id)
    if(!user){
        return res.status(404).json({msg:'user not found'})
    }
    req.user = user
    next()
}

module.exports = {
    authenticate
}
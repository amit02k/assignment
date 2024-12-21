const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/users',userController.createUser)
router.get('/users',userController.getUsers)
router.post('/login',userController.login)

module.exports = router
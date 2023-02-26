const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl } = require('../controller/loginController')

//TODO: Login !
router.post('/', loginCtrl)


//TODO: Registrar un usuario
router.post('/register', registerCtrl)


module.exports = router

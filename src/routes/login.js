const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl } = require('../controller/loginController')

//TODO: Login !

/**
 * @swagger
 * /Api/v1/login:
 *   post:
 *     summary: Login en el Api
 *     description: Solo se requiere nombre y contraseña, el otro dato es opcional
 *     tags:
 *       - Login
 *     requestBody:
 *       required: [name, password]
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       '200':
 *         description: Ingreso Exitoso
 *       '400':
 *         description: Error en la autenticación
 */

router.post('/', loginCtrl)


//TODO: Registrar un usuario
/**
 * @swagger
 * /Api/v1/login/register:
 *   post:
 *     summary: Registro en la Api
 *     description: Solo se requiere nombre y contraseña, el otro dato es opcional ya que por defecto se establece user
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       '200':
 *         description: Registro Exitoso
 *       '400':
 *         description: Nombre del usuario ya existente en la BD
 */
router.post('/register', registerCtrl)


module.exports = router

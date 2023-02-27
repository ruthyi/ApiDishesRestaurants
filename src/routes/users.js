const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem } = require('../controller/userController')
 /**
 * @swagger
 * /Api/v1/users/:
 *   get:
 *     summary: Listado de usuarios Registrados
 *     description: Este endpoint unicamente lo podra utilizar un usuario con rol admin
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: Acción  exitosa
 *       '400':
 *         description: Error en la petición
 *     security:
 *       - bearerAuth: []
 */
router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

/**
 * @swagger
 * /Api/v1/users/{id}:
 *   get:
 *     summary: Muestra un usuario de acuerdo al Id
 *     description: Este endpoint unicamente lo podra utilizar un usuario con rol admin
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del recurso
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Error en la petición
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id',checkAuth, checkRoleAuth(['admin']), getItem)

//TODO: Donde recibimos data
/**
 * @swagger
 * /Api/v1/users:
 *   post:
 *     summary: Crear un usuari en la B.D.
 *     description: Creacion de un nuevo usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Error en la petición
 *     security:
 *       - bearerAuth: []
 */
router.post('/',checkAuth, checkRoleAuth(['admin']), createItem)
/**
 * @swagger
 * /Api/v1/users/{_id}:
 *   put:
 *     summary: Modificar aspectos del usuario
 *     description: Actualización de alguno de los datos en la BD
 *     tags:
 *       - Users
 *     parameters:
 *       - name: _id
 *         in: path
 *         required: true
 *         description: ID del objeto a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Error en la petición
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id',checkAuth, checkRoleAuth(['admin']), updateItem)

//TODO: Registrar un usuario
/**
 * @swagger
 * /Api/v1/users:
 *   delete:
 *     summary: Eliminar un usuario de la BD
 *     description: Con el Id se eliminara un usuario de la BD
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/delete'
 *     responses:
 *       '200':
 *         description: Registro Exitoso
 *       '400':
 *         description: Nombre del usuario ya existente en la BD
 *     security:
 *       - bearerAuth: []
 */
router.delete('/',checkAuth, checkRoleAuth(['admin']), deleteItem)


module.exports = router

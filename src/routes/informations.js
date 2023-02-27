 const express = require("express");
 const router= express.Router();
 const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const {getAllInformation,
  getOneInformationById,
  getOneInformationByName,
 createInformation,
   updateInformation,
   deleteInformation} = require ("../controller/apiController")





 // todo: localhost/Api/v1/informations/
 /**
 * @swagger
 * /Api/v1/informations/:
 *   get:
 *     summary: Resumen opcional para la operación
 *     description: Descripción opcional para la operación
 *     tags:
 *       - Restaurant
 *     parameters:
 *       - name: parametro1
 *         in: query
 *         description: Descripción opcional del parámetro
 *         required: false
 *         schema:
 *           type: string
 *       - name: parametro2
 *         in: query
 *         description: Descripción opcional del segundo parámetro
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Error en la petición
 *     security:
 *       - bearerAuth: []
 */

 router.get("/",checkAuth,getAllInformation );
// // todo: localhost/Api/v1/informations/:id

/**
 * @swagger
 * /Api/v1/informations/{id}:
 *   get:
 *     summary: Resumen opcional para la operación
 *     description: Descripción opcional para la operación
 *     tags:
 *       - Restaurant
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

router.get("/:id",checkAuth,getOneInformationById)
// // todo: localhost/Api/v1/informations/:name


/**
 * @swagger
 * /Api/v1/informations/{nombre}:
 *   get:
 *     summary: Resumen opcional para la operación
 *     description: Descripción opcional para la operación
 *     tags:
 *       - Restaurant
 *     parameters:
 *       - name: nombre
 *         in: path
 *         description: Nombre del recurso
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

router.get("/name/:nombre",checkAuth,getOneInformationByName)
// // todo: localhost/Api/v1/informations/

/**
 * @swagger
 * /Api/v1/informations:
 *   post:
 *     summary: Resumen opcional para la operación
 *     description: Descripción opcional para la operación
 *     tags:
 *       - Restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NombreDelEsquema'
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Error en la petición
 *     security:
 *       - bearerAuth: []
 */


 router.post("/",checkAuth,createInformation)
// // todo: localhost/Api/v1/informations/:name

/**
 * @swagger
 * /Api/v1/informations/{id}:
 *   put:
 *     summary: Resumen opcional para la operación
 *     description: Descripción opcional para la operación
 *     tags:
 *       - Restaurant
 *     parameters:
 *       - name: id
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
 *             $ref: '#/components/schemas/NombreDelEsquema'
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Error en la petición
 *     security:
 *       - bearerAuth: []
 */

router.put("/:id",checkAuth, checkRoleAuth(['admin']), updateInformation)
// // todo: localhost/Api/v1/informations/

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

router.delete("/",checkAuth, checkRoleAuth(['admin']),deleteInformation)



 module.exports =router;

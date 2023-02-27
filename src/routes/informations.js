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
 /**
 * @swagger
 * /Api/v1/informations/:
 *   get:
 *     summary: Listado de usuarios Registrados
 *     description: Este endpoint  lo podra utilizar cualquier usuario
 *     tags:
 *       - Restaurant
 *     responses:
 *       '200':
 *         description: Acción  exitosa
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
 *     summary: Muestra un restaurante de acuerdo al Id
 *     description: Este endpoint lo podra utilizar cualquier usuario
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
 *     summary: Muestra un restaurante de acuerdo al nombre
 *     description: Este endpoint lo podra utilizar cualquier usuario
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

//TODO: Donde recibimos data
/**
 * @swagger
 * /Api/v1/informations:
 *   post:
 *     summary: Crear un usuari en la B.D.
 *     description: Creacion de un nuevo usuario
 *     tags:
 *       - Restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/restaurant'
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
 * /Api/v1/informations/{_id}:
 *   put:
 *     summary: Modificar aspectos del usuario
 *     description: Actualización de alguno de los datos en la BD, esto solo lo prodra hacer el admin
 *     tags:
 *       - Restaurant
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
 *             $ref: '#/components/schemas/restaurant'
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
 * /Api/v1/informations:
 *   delete:
 *     summary: Eliminar un usuario de la BD
 *     description: Con el Id se eliminara un usuario de la BD, esto solo lo podra hacer el admin
 *     tags:
 *       - Restaurant
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

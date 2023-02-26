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
 router.get("/",checkAuth,getAllInformation );
// // todo: localhost/Api/v1/informations/:id
router.get("/:id",checkAuth,getOneInformationById)
// // todo: localhost/Api/v1/informations/:name
router.get("/name/:nombre",checkAuth,getOneInformationByName)
// // todo: localhost/Api/v1/informations/
 router.post("/",checkAuth,createInformation)
// // todo: localhost/Api/v1/informations/:name
router.put("/:id",checkAuth, checkRoleAuth(['admin']), updateInformation)
// // todo: localhost/Api/v1/informations/
router.delete("/",checkAuth, checkRoleAuth(['admin']),deleteInformation)



 module.exports =router;

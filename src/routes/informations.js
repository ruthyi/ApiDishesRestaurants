 const express = require("express");
 const router= express.Router();
const {getAllInformation,
  getOneInformation,
 createInformation,
   updateInformation,
   deleteInformation} = require ("../controller/apiController")

 // todo: localhost/Api/v1/informations/


 router.get("/",getAllInformation );
// // todo: localhost/Api/v1/informations/:name
router.get("/:nombre",getOneInformation)
// // todo: localhost/Api/v1/informations/
 router.post("/",createInformation)
// // todo: localhost/Api/v1/informations/:name
router.put("/:id", updateInformation)
// // todo: localhost/Api/v1/informations/
router.delete("/",deleteInformation)



 module.exports =router;

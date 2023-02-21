const express = require("express");
const router= express.Router();
const {getAllInformation,
  getOneInformation,
  createInformation,
  updateInformation,
  deleteInformation} = require ("../../controller/apiController")

// todo: localhost/Api/v1/informations/


router.get("/", (req, res) => {
  console.log("entro")
  res.send({lista: [1,2,3]})
});
// todo: localhost/Api/v1/informations/:name
router.get("/:name",getOneInformation)
// todo: localhost/Api/v1/informations/
router.post("/",createInformation)
// todo: localhost/Api/v1/informations/:name
router.put("/:name", updateInformation)
// todo: localhost/Api/v1/informations/
router.delete("/",deleteInformation)



module.exports =router;

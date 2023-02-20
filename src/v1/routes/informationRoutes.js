const express = require("express");
const router= express.Router();
const apiController = require ("../../controller")


router
    .get("/", apiController.getAllInformation)
    .get("/:name",apiController.getOneInformation )
    .post("/",apiController.createInformation)
    .put("/:name",apiController.updateInformation)
    .delete("/",apiController.deleteInformation)
module.exports =router;

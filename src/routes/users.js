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
 // checkAuth, checkRoleAuth(['admin']),
router.get('/',  getItems)

router.get('/:id', getItem)

//TODO: Donde recibimos data
router.post('/', createItem)

router.put('/:id', updateItem)

router.delete('/', deleteItem)


module.exports = router

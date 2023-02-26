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

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

router.get('/:id',checkAuth, checkRoleAuth(['admin']), getItem)

//TODO: Donde recibimos data
router.post('/',checkAuth, checkRoleAuth(['admin']), createItem)

router.put('/:id',checkAuth, checkRoleAuth(['admin']), updateItem)

router.delete('/',checkAuth, checkRoleAuth(['admin']), deleteItem)


module.exports = router

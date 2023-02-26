const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/users')

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

router.get('/:id', getItem)

//TODO: Donde recibimos data
router.post('/', createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router

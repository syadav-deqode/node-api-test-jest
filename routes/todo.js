'use strict'

const express = require('express')
const router = express.Router()

const asyncHandler = fn => (req, res, next) => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(next)
}

const todoController = require('../controllers/todoController')

router.post('/', todoController.addTodo)
router.get('/', todoController.getTodos)
router.get('/:id', todoController.getTodoById)

module.exports = router

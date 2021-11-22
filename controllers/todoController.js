'use strict'

const todoService = require('../services/todoService')

module.exports.getTodos = async (req, res, next) => {
  const { todos } = await todoService.getTodos(req.body)
  res.body = todos
  next()
}

module.exports.addTodo = async (req, res, next) => {
  const { todo } = await todoService.addTodo(req.body)
  res.body = todo
  next()
}

module.exports.getTodoById = async (req, res, next) => {
  const id = req.params.id
  const { todo } = await todoService.getTodoById(id)
  res.body = todo
  next()
}

module.exports.updateTodo = async (req, res, next) => {
  const id = req.params.id
  const todo = await todoService.updateTodo(id, req.body)
  res.body = todo
  next()
}

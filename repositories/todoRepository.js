'use strict'

const Todo = require('../models/Todo')

module.exports.getTodoByName = async (todo) => {
  const existing = await Todo.findOne({ where: { todo } })
  return existing
}

module.exports.getTodoById = async (id) => {
  const todo = await Todo.findOne({ where: { id } })
  return { todo }
}

module.exports.addNewTodo = async (payload, { t } = {}) => {
  return await Todo.create(payload, { transaction: t })
}

module.exports.getAllTodos = async () => {
  const todos = await Todo.findAll({})
  return { todos }
}

module.exports.updateTodo = async (id, payload) => {
  return await Todo.update(payload, { where: { id } })
}

module.exports.removeTodo = async (id) => {
  return await Todo.destroy({ where: { id } })
}

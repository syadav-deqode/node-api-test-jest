'use strict'

const sequelize = require('../helpers/db')
const todoRepository = require('../repositories/todoRepository')

module.exports.addTodo = async (body) => {
  let returnObj = { error: null, success: null, message: null, }

  const { todo } = body
  // Check for duplicate records
  const record = await todoRepository.getTodoByName(todo)

  if (!record) {
    // Add new
    const payload = { todo }
    await sequelize.transaction(async (t) => {
      await todoRepository.addNewTodo(payload, { t })
    })

    returnObj = { ...returnObj, success: true, message: "New todo added", }
  } else {
    // Return error to notify the record is exists
    returnObj = { ...returnObj, error: true, message: "Todo already in use" }
  }

  return { todo: returnObj }
}

module.exports.getTodos = async () => {
  const { todos } = await todoRepository.getAllTodos()
  return { todos }
}

module.exports.getTodoById = async (id) => {
  const { todo } = await todoRepository.getTodoById(id)
  return { todo }
}

const { Sequelize } = require('sequelize');
const sequelize = require('../helpers/db');

const Todo = sequelize.define('Todo', {
  id: {
    autoIncrement: true,
    type: Sequelize.BIGINT,
    primaryKey: true
  },
  todo: {
    type: Sequelize.STRING(1024),
    field: 'todo'
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    field: 'is_completed'
  },
}, {
  timestamps: false,
  tableName: 'todos',
  indexes: [{ unique: true, fields: ['todo'] }]
})

Todo.sync()

module.exports = Todo;
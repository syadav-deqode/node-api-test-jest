const app = require('../server')
const request = require('supertest')

describe('Get All Toods', () => {
  // Add new todo
  it('Add new todo', async () => {
    const todo = { todo: "Working from jest test", isCompleted: true }
    const res = await request(app)
      .post('/todos').send(todo);
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('result')
    expect(res.body).toHaveProperty('error')
    expect(res.body).toHaveProperty('status')
  })

  // Get all the tods
  it('All the todos', async () => {
    const res = await request(app)
      .get('/todos');
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('result')
    expect(res.body).toHaveProperty('error')
    expect(res.body).toHaveProperty('status')
  })

  // Get the todo from id
  it('Get Todo by id 3', async () => {
    const res = await request(app)
      .get('/todos/3');
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('result')
    expect(res.body).toHaveProperty('error')
    expect(res.body).toHaveProperty('status')
  })

  // Update the todo
  it('Update the todo 3', async () => {
    const todo = { todo: "Update from test", isCompleted: false }
    const res = await request(app)
      .put('/todos/3').send(todo);
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('result')
    expect(res.body).toHaveProperty('error')
    expect(res.body).toHaveProperty('status')
  })

  // Remove the todo
  it('Remove the todo 7', async () => {
    const res = await request(app)
      .delete('/todos/7');
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('result')
    expect(res.body).toHaveProperty('error')
    expect(res.body).toHaveProperty('status')
  })

})
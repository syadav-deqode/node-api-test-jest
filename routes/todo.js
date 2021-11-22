'use strict'
const express = require('express')
const router = express.Router()

const asyncHandler = fn => (req, res, next) => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(next)
}


router.get('/', (req, res) => {
  res.json({ msg: "All the todos" })
})

module.exports = router

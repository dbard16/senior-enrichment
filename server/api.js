'use strict'
const api = require('express').Router()
const conn = require('../db')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campus', (req, res, next) => {
  conn.Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

api.get('/campus/:id', (req, res, next) => {
  conn.Campus.findById(req.params.id)
    .then(campus => res.json(campus))
    .catch(next)
})

api.get('/student', (req, res, next) => {
  conn.Student.findAll()
    .then(students => res.json(students))
    .catch(next)
})

api.get('/student/:id', (req, res, next) => {
  conn.Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(next)
})

api.post('/campus', (req, res, next) => {
  console.log('req body', req.body)
  conn.Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

api.post('/studentForm', (req, res, next) => {
  console.log('reqbody', req.body);
  conn.Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

api.put('/campus/:id', (req, res, next) => {
  conn.Campus.findById(req.params.id)
    .then(campus => campus.update(req.body))
    .catch(next)

})

api.put('/student/:id', (req, res, next) => {
  conn.Student.findById(req.params.id)
    .then(student => student.update(req.body))
    .catch(next)
})

api.delete('/campus/:id', (req, res, next) => {
  conn.Campus.destroy({where: {id: req.params.id}})
    .then(() => res.status(204).end())
    .catch(next)
})

api.delete('/student/:id', (req, res, next) => {
  conn.Student.destroy({where: {id: req.params.id}})
  .then(() => res.status(204).end())
  .catch(next)
})

module.exports = api

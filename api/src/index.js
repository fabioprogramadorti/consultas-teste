require('dotenv').config()
const cors = require('cors')
import "core-js/stable"
import "regenerator-runtime/runtime"
import express from 'express'
import consultasRouter from './routes/consultas.routes'
import medicosRouter from './routes/medicos.routes'
const app = express()

import { json, urlencoded } from 'body-parser'

// Middlewares
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*")
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  app.use(cors())
  next()
})

app.use(urlencoded({ extended: true }))
app.use(json())

// Routes
app.use('/consultas', consultasRouter)
app.use('/medicos', medicosRouter)



// Database
import mongoose from 'mongoose'

let mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB, 
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
)
mongoose.Promise = global.Promise
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Error connection with mongoDB '))


const PORT = 5000

app.listen(PORT, () => {
  console.log(`ES6 application listening on port ${PORT}!`)
})
require('dotenv').config()
import "core-js/stable";
import "regenerator-runtime/runtime";

import express from 'express'
import consultasRouter from './routes/consultas.routes'
import medicosRouter from './routes/medicos.routes'
const app = express()

import { json, urlencoded } from 'body-parser'

// Middlewares
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
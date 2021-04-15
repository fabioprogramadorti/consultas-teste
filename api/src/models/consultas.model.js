import  { Schema, model } from 'mongoose'
import MedicoSchema from './medicos.model'


let ConsultaSchema = new Schema({
  paciente: {type: String, required:true, max: 100},
  data: {type: Date, required:true},
  medico: { type: String }
}, { timestamps: true })

const ConsultasModel = new model('consulta', ConsultaSchema)

export default ConsultasModel
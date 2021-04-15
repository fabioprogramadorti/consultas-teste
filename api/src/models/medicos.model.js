import { Schema, model } from 'mongoose'

export const MedicoSchema = new Schema({
  nome: {type: String, required:true}
}, { timestamps:true })

const MedicosModel = new model('medico', MedicoSchema)

export default MedicosModel
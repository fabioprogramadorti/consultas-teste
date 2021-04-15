import ConsultasModel from '../models/consultas.model'
import MedicosModel from '../models/medicos.model'

export async function list(req, res) {
  try{
    const todasConsultas = await ConsultasModel.find({})
    res.json(todasConsultas) 
  } catch(err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}

export async function create(req, res) {
  try {
    const medico = await MedicosModel.findOne({nome:req.body.medico})
    if(medico){
      const novaConsulta = await ConsultasModel.create(req.body)
      res.json(novaConsulta)
    } else{
      throw new Error("Doctor not found")
    }
  } catch(err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}

export async function getById(req, res) {
  const id = req.params.id
  try {
    const consulta = await ConsultasModel.findById(id)
    res.json(consulta)
  } catch (err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}

export async function updateById(req, res) {
  const id = req.params.id
  try {
    const consultaModificada = await ConsultasModel.findOneAndUpdate({_id:id}, req.body)
    res.json(consultaModificada)
  } catch (err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}
export async function deleteById(req, res) {
  const id = req.params.id
  try {
    const consultaExcluida = await ConsultasModel.findOneAndDelete({ _id: id })
    res.json({
      status: 'success',
      msg: `consulta excluida`,
      dados: consultaExcluida
    })
  } catch (err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}
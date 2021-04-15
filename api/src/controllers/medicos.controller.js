import MedicosModel from '../models/medicos.model'

export async function list(req, res) {
  try{
    const todasMedicos = await MedicosModel.find({})
    res.json(todasMedicos) 
  } catch(err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}

export async function create(req, res) {
  try {
    const novoMedico = await MedicosModel.create(req.body)
    res.json(novoMedico)
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
    const medico = await MedicosModel.findById(id)
    res.json(medico)
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
    const medicoModificado = await MedicosModel.findOneAndUpdate({_id:id}, req.body)
    res.json(medicoModificado)
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
    const medicoExcluido = await MedicosModel.findOneAndDelete({ _id: id })
    res.json({
      status: 'success',
      msg: `medico excluida`,
      dados: medicoExcluido
    })
  } catch (err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}
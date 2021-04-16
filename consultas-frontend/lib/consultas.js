import 'isomorphic-fetch'
import axios from 'axios'


const API_URL = process.env.API_URL

export async function getAllConsultas() {
  const res = await axios.get('http://localhost:5000/consultas')
  const consultas = res.data
  return consultas
}

export async function getConsulta(id) {
  const res = await axios.get(`http://localhost:5000/consultas/${id}`)
  const consulta = res.data
  return consulta
}

export async function createConsulta(consulta) {
  const res = await axios.post('http://localhost:5000/consultas', consulta)
  const novaConsulta = res.data
  return novaConsulta
}

export async function updateConsulta(id, consulta) {
  const res = await axios.put(`http://localhost:5000/consultas/${id}`, consulta)
  const consultaModificada = res.data
  return consultaModificada
}

export async function deleteConsulta(id) {
  const res = await axios.delete(`http://localhost:5000/consultas/${id}`)
}

export async function getAllMedicos(id) {
  const res = await axios.get('http://localhost:5000/medicos')
  const medicos = res.data
  const nomesMedicos = medicos.map(medico => {return medico.nome})
  return nomesMedicos
}
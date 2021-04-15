import 'isomorphic-fetch'
import axios from 'axios'


const API_URL = process.env.API_URL

export async function getAllConsultas() {
  const res = await axios.get('http://localhost:5000/consultas')
  const consultas = res.data
  console.log(consultas)
  return consultas
}

export async function getAllMedicos() {
  const res = await axios.get('http://localhost:5000/medicos')
  const medicos = res.data
  const nomesMedicos = medicos.map(medico => {return medico.nome})
  console.log(nomesMedicos)
  return nomesMedicos
}
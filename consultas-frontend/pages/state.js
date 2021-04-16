import moment from 'moment'
import React, { Component } from "react"
import { 
  getAllConsultas, 
  createConsulta, 
  updateConsulta, 
  deleteConsulta, 
  getAllMedicos } from '../lib/consultas'

const ConsultasContext = React.createContext()

const ConsultasProvider = ConsultasContext.Provider
const ConsultasConsumer = ConsultasContext.Consumer

class MyContext extends Component {

  state = {
    consultas: [],
    medicos: []
  }

  async listConsultas() {
    const medicos = await getAllMedicos()
    let consultas = await getAllConsultas()

    consultas.forEach(consulta => {
      consulta.data = moment(consulta.data).format('YYYY-MM-DD')
    })
    console.log(consultas)
    this.setState({consultas, medicos})
  }

  updateConsulta = (id, data) => {
    updateConsulta(id, data)
    this.listConsultas()
  }

  delConsulta = (id) => {
    deleteConsulta(id)
    this.listConsultas()
  }

  addConsulta = (consulta) => {
    createConsulta(consulta)
    this.listConsultas()
  }


  componentDidMount(){
    this.listConsultas()
  }

  render() {
    
    return (
      <ConsultasProvider
        value={{
          ...this.state,
          updateConsulta: this.updateConsulta,
          delConsulta: this.delConsulta,
          addConsulta: this.addConsulta
        }}
      >
        {this.props.children}
      </ConsultasProvider>
    )
  }
}


export { ConsultasContext, MyContext, ConsultasConsumer }
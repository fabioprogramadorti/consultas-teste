import React, { Component } from "react"

import { getAllConsultas, getAllMedicos } from '../lib/consultas'
const ConsultasContext = React.createContext();

const ConsultasProvider = ConsultasContext.Provider;
const ConsultasConsumer = ConsultasContext.Consumer;


class MyContext extends Component {

  state = {
    consultas: [],
    medicos: []
  }
  
  async listConsultas() {
    const consultas = await getAllConsultas()
    const medicos = await getAllMedicos()
    this.setState({consultas, medicos})
  }

  handleChange = (id) => {
    this.setState({
      consultas: this.state.consultas.map((consulta) => {
        if (consulta.id === id) {
          consulta.completed = !consulta.completed;
        }
        return consulta;
      }),
    });
  };

  delConsulta = (id) => {
    this.setState({
      consultas: [
        ...this.state.consultas.filter((consulta) => {
          return consulta.id !== id;
        }),
      ],
    });
  };

  addConsultaItem = (title) => {
    const newConsulta = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      consultas: [...this.state.consultas, newConsulta],
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addConsultaItem(this.state.title);
    this.setState({
      title: "",
    });
  };
  
  componentDidMount(){
    this.listConsultas()
  }

  render() {
    
    return (
      <ConsultasProvider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          delConsulta: this.delConsulta,
          addConsultaItem: this.addConsultaItem,
        }}
      >
        {this.props.children}
      </ConsultasProvider>
    );
  }
}


export { ConsultasContext, MyContext, ConsultasConsumer };
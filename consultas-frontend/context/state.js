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

  componentDidMount() {
    this.state.consultas = getAllConsultas()
    this.state.medicos = getAllMedicos()
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
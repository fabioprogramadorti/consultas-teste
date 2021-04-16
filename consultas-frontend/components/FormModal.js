import { Modal } from 'react-bootstrap'
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Col } from 'react-bootstrap'
import { ConsultasContext } from '../pages/state'

const initialState = {
  show: false,
  consulta: {
    paciente: '',
    data: '',
    medico: ''
  }
}
export default class EditForm extends Component {
  static contextType = ConsultasContext
  
  state = {
    ...initialState
  }

  store = this.context

  componentDidMount() {
    this.setState({
      consulta:
        this.props.id ? this.store.consultas.filter(consulta => consulta._id == this.props.id).pop() : {}
    })
  }

  handleClose = () => {
    this.setState({show:false})
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  save = (e) => {
    e.preventDefault()
    let consulta = this.state.consulta
    if(this.state.consulta._id) {
      let id = this.state.consulta._id
      this.store.updateConsulta(id, consulta)
    } else {
      this.store.addConsulta(consulta)
    }
    this.handleClose()
    this.setState(initialState)

  }

  render() {
    return (
      <>
        <Button variant={this.props.variant} size="sm" className="mr-2" onClick={this.handleShow}>
          <FontAwesomeIcon icon={this.props.icon} size="sm" />
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >

          <Modal.Header closeButton>
            <Modal.Title>Formulário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    defaultValue={this.state.consulta.paciente}
                    placeholder="Nome do Paciente"
                    onChange={e => this.setState({ consulta: { ...this.state.consulta, paciente: e.target.value } })}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMedico">
                  <Form.Label>Médico</Form.Label>
                  <Form.Control 
                    required 
                    as="select" 
                    defaultValue={this.state.medico}
                    onChange={e => this.setState({ consulta: { ...this.state.consulta, medico: e.target.value } }) }
                  >
                    {this.state.medico ? console.log(this.store.medicos) : ''}
                    <option></option>
                    {
                      this.store.medicos.map(medico => (
                        <option key={medico}>{medico}</option>
                      ))
                    }
                  </Form.Control>
                </Form.Group>

              </Form.Row>

              <Form.Group controlId="formGridDate">
                <Form.Label>Data</Form.Label>
                <Form.Control 
                  type="date" 
                  required 
                  defaultValue={this.state.consulta.data} 
                  onChange={e => this.setState({ consulta: { ...this.state.consulta, data: e.target.value } })}
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="success" onClick={(e) => this.save(e)}>
              <FontAwesomeIcon icon={faSave}  />
            </Button>

            <Button variant="danger" onClick={this.handleClose}>
              <FontAwesomeIcon icon={faTimes}  />
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )

  }
}

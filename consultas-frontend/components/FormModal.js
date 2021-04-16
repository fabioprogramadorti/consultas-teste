import { Modal } from 'react-bootstrap'
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Col } from 'react-bootstrap'
import { ConsultasContext } from '../pages/state'

export default class EditForm extends Component {
  static contextType = ConsultasContext
  
  state = {
    show: false,
    consulta: {},
    medicos: []
  }

  value = this.context

  componentDidMount() {
    this.state.consulta = this.props.id ? this.value.consultas.filter(consulta => consulta._id == this.props.id).pop() : {}
    this.state.medicos = this.context.medicos
  }

  handleClose = () => {
    this.setState({show:false})
  }

  handleShow = () => {
    this.setState({show:true})
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
                    value={this.state.consulta ? this.state.consulta.paciente : ''}
                    placeholder="Nome do Paciente"
                    onChange={e => this.setState({consulta:{...this.state.consulta, paciente: e.target.value}})}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMedico">
                  <Form.Label>Médico</Form.Label>
                  <Form.Control 
                    required 
                    as="select" 
                    defaultValue={this.state.consulta.medico} 
                    onChange={e => this.setState({consulta: {...this.state.consulta, medico:e.target.value}})}
                  >
                    <option></option>
                    {
                      this.state.medicos.map(medicoEscolhido => (
                        <option key={medicoEscolhido}>{medicoEscolhido}</option>
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
                  value={this.state.consulta.data} 
                  onChange={e => this.setState({consulta:{ ...this.state.consulta, data: e.target.value }})}
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="success" onClick={this.handleClose}>
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

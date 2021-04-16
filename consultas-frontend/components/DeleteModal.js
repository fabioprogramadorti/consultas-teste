import { Modal } from 'react-bootstrap'
import { Component, useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { ConsultasContext } from '../pages/state'


export default class DeleteForm extends Component {
  static contextType = ConsultasContext
  state = {
    show: false
  }

  store = this.context
 
  handleClose = () => this.setState({ show: false})

  handleShow = () => this.setState({ show: true })

  deleteConsulta = () => {
    this.store.delConsulta(this.props.id)
    this.handleClose()
  }

  render() {
    return (
      <>
        <Button variant="danger" size="sm" className="mr-2" onClick={this.handleShow}>
          <FontAwesomeIcon icon={faTrash} size="sm" />
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Atenção!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tem certeza que deseja excluir a consulta?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={this.deleteConsulta}>
              Excluir
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )

  }
}

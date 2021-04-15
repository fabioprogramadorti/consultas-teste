import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Col } from 'react-bootstrap'

export default function EditForm(props) {

  const [show, setShow] = useState(false);
  const [agendamento, setAgendamento] = useState(props.agendamento)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [medico, setMedico] = useState('')

  return (
    <>
      <Button variant={props.variant} size="sm" className="mr-2" onClick={handleShow}>
        <FontAwesomeIcon icon={props.icon} size="sm" />
      </Button>

      <Modal show={show} onHide={handleClose}
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
                  value={agendamento ? agendamento.paciente : ''}
                  placeholder="Nome do Paciente"
                  onChange={e => setAgendamento({...agendamento, paciente: e.target.value})}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMedico">
                <Form.Label>Médico</Form.Label>
                <Form.Control 
                  required 
                  as="select" 
                  defaultValue={agendamento ? agendamento.medico : ''} 
                  onChange={e => setAgendamento({...agendamento, medico:e.target.value})}
                >
                  <option></option>
                  {props.medicos ?
                    props.medicos.map(medicoEscolhido => (
                      <option key={medicoEscolhido}>{medicoEscolhido}</option>
                    ))
                    : ''
                  }
                </Form.Control>
              </Form.Group>

            </Form.Row>

            <Form.Group controlId="formGridDate">
              <Form.Label>Data</Form.Label>
              <Form.Control 
                type="date" 
                required 
                value={agendamento ? agendamento.data : ''} 
                onChange={e => setAgendamento({ ...agendamento, data: e.target.value })}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="success" onClick={handleClose}>
            <FontAwesomeIcon icon={faSave}  />
          </Button>

          <Button variant="danger" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes}  />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

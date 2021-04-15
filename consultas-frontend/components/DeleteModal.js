import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

export default function EditForm(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="danger" size="sm" className="mr-2" onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} size="sm" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atenção!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir a consulta?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

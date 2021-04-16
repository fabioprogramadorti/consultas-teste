import Head from 'next/head'
import { Container } from 'react-bootstrap'
import FormModal from '../components/FormModal'
import DeleteModal from '../components/DeleteModal'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { ConsultasContext } from './state'
import { Component } from 'react'

class Home extends Component {
  static contextType = ConsultasContext

  render() {
    const store = this.context;
    return (
      <Container>

        <Head>
          <title>Agendamento de Consultas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='container'>
          <h1 className='text-center'>
            Agendamento de Consultas
          </h1>

          <FormModal variant="success" icon={faPlus} />

            <table className="table table-striped my-2">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Paciente</th>
                  <th scope="col">Médico</th>
                  <th scope="col">Data</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                {store.consultas.map(agendamento => (
                  <tr className="text-center" key={agendamento._id}>
                    <th scope="row">{agendamento.id}</th>
                    <td>{agendamento.paciente}</td>
                    <td>{agendamento.medico}</td>
                    <td>{agendamento.data}</td>
                    <td>
                      <FormModal
                        variant="primary"
                        icon={faEdit}
                        id={agendamento._id}
                      />
                      <DeleteModal />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

        
        
          

         
        </div>
      </Container>
    )
  }

}


export default Home
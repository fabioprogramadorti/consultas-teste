import Head from 'next/head'
import { Container } from 'react-bootstrap'
import EditForm from '../components/FormModal'
import DeleteForm from '../components/DeleteModal'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { ConsultasContext } from './state'
import { Component } from 'react'
import moment from 'moment'

class Home extends Component {
  static contextType = ConsultasContext

  render() {
    const store = this.context
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

          <EditForm variant="success" icon={faPlus} medicos={store.medicos}/>

            <table className="table table-striped my-2">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col">Paciente</th>
                  <th scope="col">Médico</th>
                  <th scope="col">Data</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                {store.consultas.map(agendamento => (
                  <tr className="text-center" key={agendamento._id}>
                    <td>{agendamento.paciente}</td>
                    <td>{agendamento.medico}</td>
                    <td>{moment(agendamento.data).format('DD/MM/YYYY')}</td>
                    <td>
                      <EditForm
                        variant="primary"
                        icon={faEdit}
                        id={agendamento._id}
                      />
                      <DeleteForm id={agendamento._id} />
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
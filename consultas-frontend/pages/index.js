import Head from 'next/head'
import { Container } from 'react-bootstrap'
import FormModal from '../components/FormModal'
import DeleteModal from '../components/DeleteModal'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from '../context/state'


export default function Home() {
  const state = useAppContext().state

  const agendamentos = state.agendamentos
  const medicos = agendamentos.map(agendamento => agendamento.medico)

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

        <FormModal variant="success" icon={faPlus} medicos={medicos} />

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
            {agendamentos.map(agendamento => (
              <tr className="text-center" key={agendamento.id}>
                <th scope="row">{agendamento.id}</th>
                <td>{agendamento.paciente}</td>
                <td>{agendamento.medico}</td>
                <td>{agendamento.data}</td>
                <td>
                  <FormModal 
                    variant="primary" 
                    icon={faEdit} 
                    agendamento={agendamento} 
                    medicos={medicos}
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

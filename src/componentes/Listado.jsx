import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Listado = (props) => {



    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((colaborador, key) => (
                        <tr key={key}>
                            <td>{colaborador.id}</td>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                                <Button variant="outline-danger" onClick={() => props.deleteColaborator(colaborador.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Listado;
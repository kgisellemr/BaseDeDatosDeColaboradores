import { useState } from 'react'
import './App.css'
import Listado from './componentes/Listado'
import Formulario from './componentes/Formulario'
import { BaseColaboradores } from '../basecolaboradores'
import Buscador from './componentes/Buscador'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppAlert from './componentes/Alert'


function App() {
  const [colaboradoresData, setColaboradoresData] = useState(BaseColaboradores);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const addColaborator = (nombre, correo, edad, cargo, telefono) => {
    const newData = [
      ...colaboradoresData,
      {
        id: colaboradoresData.length + 1,
        nombre: nombre,
        correo: correo,
        edad: edad,
        cargo: cargo,
        telefono: telefono
      }
    ];
    setColaboradoresData(newData);
    handleAlertMessage(true, "Colaborador Agregado", "success")
  }

  const deleteColaborator = (colaboradorId) => {
    const newData = colaboradoresData.filter((colaborador) => colaboradorId !== colaborador.id)
    setColaboradoresData(newData);
  };

  const searchColaborator = (text) => {
    const newData = colaboradoresData.filter((colaborador) => {
      if (colaborador.cargo.includes(text) || colaborador.nombre.includes(text) || colaborador.correo.includes(text)) {
        return colaborador;
      }
    });
    setColaboradoresData(newData);
  };

  const handleAlertMessage = (value, message, type) => {
    setShowAlert(value);
    setAlertMessage(message);
    setAlertType(type);
  };

  return (
    <>
      <div className="title">
        <h2><b>Lista de Colaboradores</b></h2>
      </div>
      <div className="buscador">
        <Buscador searchColaborator={searchColaborator} />
      </div>
      <div className="main-container">
        <div className="list">
          <Listado data={colaboradoresData} deleteColaborator={deleteColaborator} />
        </div>
        <div>
          <Formulario handleAlertMessage={handleAlertMessage} addColaborator={addColaborator} />
          {showAlert && <AppAlert message={alertMessage} type={alertType} />}
        </div>
      </div>
    </>
  )
}

export default App

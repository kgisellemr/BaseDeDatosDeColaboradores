import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = (props) => {
    const [nameState, setNameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [ageState, setAgeState] = useState("");
    const [positionState, setPositionState] = useState("");
    const [phoneState, setPhoneState] = useState("");

    
    const changeName = (e) => {
        setNameState(e.target.value);
    };

    const changeEmail = (e) => {
        setEmailState(e.target.value);
    };

    const changeAge = (e) => {
        setAgeState(e.target.value);
    };

    const changePosition = (e) => {
        setPositionState(e.target.value);
    };

    const changePhone = (e) => {
        setPhoneState(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameState.length === 0 || emailState.length === 0 || ageState.length === 0 || positionState.length === 0 || phoneState.length === 0) {
            props.handleAlertMessage(true, "Completa todos los campos", "danger");
            return;
         }
         if (validateEmail(emailState) === false) {
            props.handleAlertMessage(true, "Formato de email inválido", "danger");
            return;
        }

        props.addColaborator(nameState, emailState, ageState, positionState, phoneState);
    };

    const validateEmail = (email) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let result = false;

        if (email.match(validRegex)) {
            result = true;
        }

        return result;
    };


 

    return (
        <>
            <h4><b>Agregar Colaborador</b></h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Nombre del Colaborador" name="nombre" value={nameState}  onChange={changeName}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email del Colaborador" name="email" value={emailState}  onChange={changeEmail}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Control type="number" placeholder="Edad del Colaborador" name="age" value={ageState}  onChange={changeAge}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCargo">
                    <Form.Control type="text" placeholder="Cargo del Colaborador" name="position" value={positionState}  onChange={changePosition}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphone">
                    <Form.Control type="phone" placeholder="Telefono del Colaborador" name="phones" value={phoneState}  onChange={changePhone}/>
                </Form.Group>
                <Button variant="primary" type="submit" className='form-button' onClick={handleSubmit}>
                    Agregar Colaborador
                </Button>
            </Form>
        </>

    )
}

export default Formulario;
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Buscador = (props) => {
    const [text, setText]= useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleKeyDown = event => {
        if (event.key === "Enter" ) {
            props.searchColaborator(text);
        }
      };

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Busca un Colaborador"
                    aria-label="Busca un Colaborador"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    value={text}
                    onKeyDown={handleKeyDown}
                />
            </InputGroup>
        </>

    )
}

export default Buscador;
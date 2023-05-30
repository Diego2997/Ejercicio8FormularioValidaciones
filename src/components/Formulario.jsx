import  {Form,Button,Container,InputGroup}  from "react-bootstrap";
import TituloFormulario from "./TituloFormulario";
import { useState } from "react";

const Formulario = () => {
    const [validated,setValidated] = useState(false)

    const handleSubmit = (e) =>{
        const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    }
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form validated={validated} noValidate onSubmit={handleSubmit} className="mx-auto my-form">
        <TituloFormulario/>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Ej: Pepe"
              required
              minLength={2}
              maxLength={16}
            />
            <Form.Control.Feedback type="invalid">
              Por favor escribe tu nombre.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
        <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Ej: Argento"
              required
              minLength={2}
              maxLength={16}
            />
            <Form.Control.Feedback type="invalid">
              Por favor escribe un apellido
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
        <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Ej: 12345678"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor escribe tu numero de DNI
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
        <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Ej: pepe@gmail.com"
              required
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
            />
            <Form.Control.Feedback type="invalid">
              Por favor escribe tu email
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button className="btn-grad" type="submit">
          Enviar
        </Button>
      </Form>
      </Container>
    );
};

export default Formulario;
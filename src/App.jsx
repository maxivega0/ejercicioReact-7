// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import EmpleadoList from "./components/EmpleadoList";
import "./App.css";
function App() {

  return (
    <>
      <Container>
        <h1 className="text-center">Lista de empleados</h1>
        <EmpleadoList></EmpleadoList>
      </Container>

      <footer className="text-center bg-dark text-light py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;

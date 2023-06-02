/* eslint-disable react/prop-types */
// import React from 'react';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import EmpleadoAvatar from "./EmpleadoAvatar";
import { ListGroup } from "react-bootstrap";

const EmpleadoRow = ({ empleados }) => {
  return (
    <>
      {empleados.map((empleado) => {
        return (
          <ListGroup.Item
            className="d-flex justify-content-center"
            key={empleado.id}
          >
            <Card style={{ width: "50rem" }} className="d-flex flex-row">
              <Card.Body>
                <EmpleadoAvatar empleado={empleado.pic} />
              </Card.Body>
              <Card.Body>
                <Card.Title>{empleado.fullName}</Card.Title>
                <Card.Text>
                  {empleado.tittle}{" "}
                  <Badge bg="info" text="dark">
                    {empleado.department}
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        );
      })}
    </>
  );
};

export default EmpleadoRow;

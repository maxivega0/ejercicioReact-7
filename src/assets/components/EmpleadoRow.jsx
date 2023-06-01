// import React from 'react';
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import EmpleadoAvatar from "./EmpleadoAvatar";
import { ListGroup } from "react-bootstrap";

const EmpleadoRow = () => {
  return (
      <ListGroup.Item className="text-center">
        <Card style={{ width: "18rem" }} className="d-flex flex-row">
          <Card.Body>
            <EmpleadoAvatar></EmpleadoAvatar>
          </Card.Body>
          <Card.Body>
            <Card.Title>Layas Dueñas</Card.Title>
            <Card.Text>
              CEO{" "}
              <Badge bg="info" text="dark">
                Bussiness
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </ListGroup.Item>
  );
};

export default EmpleadoRow;
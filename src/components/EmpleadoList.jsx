// import React from 'react';
import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  return (
    <div>
      <ListGroup>
        <EmpleadoRow></EmpleadoRow>
      </ListGroup>
    </div>
  );
};

export default EmpleadoList;

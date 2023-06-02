/* eslint-disable react/prop-types */
// import React from 'react';
import "./avatar.css";
import Image from "react-bootstrap/Image";
const EmpleadoAvatar = ({imagen}) => {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/912/912265.png"
      alt={imagen}
    //   No tuve tiempo de buscar 10 imagenes distintas, por eso solo cambie la tabulacion
    />
    
  );
};

export default EmpleadoAvatar;

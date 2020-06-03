import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  const handleEditClick = () => {
    props.onEditClick(props.id);
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nombreArtista}</td>
      <td>{props.nombreAlbum}</td>
      <td>{props.cover}</td>
      <td>
        <Button variant="success" onClick={handleEditClick}>
          <FontAwesomeIcon color="white" icon={faEdit} />
        </Button>
      </td>
      <td>
        <Button variant="danger">
          <FontAwesomeIcon color="white" icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

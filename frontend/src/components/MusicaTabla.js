import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
  const handleEditClick = () => {
    props.onEditClick(props.id);
  };

  const handleDeleteClick = () => {
    props.onDeleteClick(props.id);
  };

  return (
    <tr className="text-center align-content-center align-items-center justify-content-center">
      <td>{props.id}</td>
      <td>{props.nombreArtista}</td>
      <td>{props.nombreAlbum}</td>
      <td>
        <Button variant="success" onClick={handleEditClick}>
          <FontAwesomeIcon color="white" icon={faEdit} />
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={handleDeleteClick}>
          <FontAwesomeIcon color="white" icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

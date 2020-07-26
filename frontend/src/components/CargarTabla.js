import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import MusicaTabla from './MusicaTabla';
import NavBarMisPublicaciones from './NavBarMisPublicaciones';
import ProductEditorModal from './ProductEditorModal';
import Swal from 'sweetalert2';

const ListadoTabla = (props) => {
  const [publicaciones, setPublicaciones] = useState([]);

  const [showProductEditorModal, setShowProductEditorModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleHideProductEditorModal = () => {
    setSelectedProduct(null);
    setShowProductEditorModal(false);
  };

  const onShowProductEditorModal = () => {
    setSelectedProduct(null);
    setShowProductEditorModal(true);
  };

  const handleProductSaved = (message) => {
    setShowProductEditorModal(false);
    cargarListadoProductos();

    Swal.fire({
      text: message,
      icon: 'success',
      scrollbarPadding: false,
    });
  };

  const cargarListadoProductos = () => {
    let endpoint = 'musica/listamusicaroutes';
    fetch(`http://localhost:8888/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        setPublicaciones(data);
      });
  };

  useEffect(cargarListadoProductos, []);

  const handleEditClick = (idProducto) => {
    setSelectedProduct(idProducto);
    setShowProductEditorModal(true);
  };

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: 'Confirma que desea eliminar la publicación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      scrollbarPadding: false,
    }).then((result) => {
      if (result.value) {
        fetch(`http://localhost:8888/musica/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 'ok') {
              Swal.fire({
                text: data.message,
                icon: 'success',
                scrollbarPadding: false,
              });

              cargarListadoProductos();
            } else {
              Swal.fire({
                text: data.message,
                icon: 'error',
                scrollbarPadding: false,
              });
            }
          });
      }
    });
  };

  return (
    <>
      <NavBarMisPublicaciones
        handleShowProductEditorModal={onShowProductEditorModal}
      />

      <Row className="m-4">
        <Col>
          <Table striped bordered hover>
            <thead className="mt-4">
              <tr className="text-center align-content-center align-items-center justify-content-center">
                <th># ID</th>
                <th>Nombre Artista</th>
                <th>Nombre Album</th>
                <th>Editar</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {publicaciones.map((publicacion) => {
                return (
                  <MusicaTabla
                    key={publicacion.id}
                    id={publicacion.id}
                    nombreArtista={publicacion.nombreArtista}
                    nombreAlbum={publicacion.nombreAlbum}
                    type={props.type}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteClick}
                  />
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <ProductEditorModal
        key={selectedProduct}
        show={showProductEditorModal}
        handleHide={handleHideProductEditorModal}
        onProductSaved={handleProductSaved}
        idProducto={selectedProduct}
      />
    </>
  );
};

export default ListadoTabla;

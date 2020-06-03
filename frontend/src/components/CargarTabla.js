import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import MusicaTabla from "./MusicaTabla";
import NavBarMisPublicaciones from "./NavBarMisPublicaciones";
import ProductEditorModal from "./ProductEditorModal";
import Swal from "sweetalert2";

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
      icon: "success",
    });
  };

  const cargarListadoProductos = () => {
    let endpoint = "productosmusica";
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

  return (
    <>
      <NavBarMisPublicaciones
        handleShowProductEditorModal={onShowProductEditorModal}
      />

      <Row className="m-4">
        <Col>
          <Table striped bordered hover>
            <thead className="mt-4">
              <tr>
                <th># ID</th>
                <th>Nombre Artista</th>
                <th>Nombre Album</th>
                <th>Cover</th>
                <th>Editar</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {publicaciones.map((publicacion) => {
                return (
                  <MusicaTabla
                    id={publicacion.id}
                    cover={publicacion.cover}
                    nombreArtista={publicacion.nombreArtista}
                    nombreAlbum={publicacion.nombreAlbum}
                    type={props.type}
                    onEditClick={handleEditClick}
                  />
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <ProductEditorModal
        show={showProductEditorModal}
        handleHide={handleHideProductEditorModal}
        onProductSaved={handleProductSaved}
        idProducto={selectedProduct}
      />
    </>
  );
};

export default ListadoTabla;

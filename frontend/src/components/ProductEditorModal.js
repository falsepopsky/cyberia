import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const ProductEditorModal = (props) => {
  const [nombreAlbum, setNombreAlbum] = useState("");
  const [catalog, setCatalog] = useState("");
  const [fechaLanzamiento, setFechaLanzamiento] = useState("");
  const [tracklist, setTracklist] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cover, setCover] = useState("");
  const [precio, setPrecio] = useState("");
  const [previewCover, setPreviewCover] = useState("");

  // Traigo lista de Artistas

  const [artistCategory, setArtistCategory] = useState("");
  const [artistas, setArtistas] = useState([{ id: "", nombre: "Todas" }]);

  useEffect(() => {
    fetch("http://localhost:8888/artistas")
      .then((response) => response.json())
      .then((dataArtistas) => {
        setArtistas(dataArtistas);
      });
  }, []);

  const artistasOptions = () => {
    let artists = artistas.map((artista) => {
      return <option value={artista.id}>{artista.nombre}</option>;
    });

    return artists;
  };

  const handleArtistChange = (event) => {
    setArtistCategory(event.target.value);
  };

  // Traigo lista de Series

  const [seriesCategory, setSeriesCategory] = useState("");
  const [series, setSeries] = useState([{ id: "", nombre: "Todas" }]);

  useEffect(() => {
    fetch("http://localhost:8888/series")
      .then((response) => response.json())
      .then((dataSeries) => {
        setSeries(dataSeries);
      });
  }, []);

  const seriesOptions = () => {
    let seres = series.map((serie) => {
      return <option value={serie.id}>{serie.nombre}</option>;
    });

    return seres;
  };

  const handleSeriesChange = (event) => {
    setSeriesCategory(event.target.value);
  };

  // Traigo lista de formatos de Audio

  const [audioCategory, setAudioCategory] = useState("");
  const [audios, setAudios] = useState([{ id: "", nombre: "Todas" }]);

  useEffect(() => {
    fetch("http://localhost:8888/formatosaudio")
      .then((response) => response.json())
      .then((dataAudios) => {
        setAudios(dataAudios);
      });
  }, []);

  const audiosOptions = () => {
    let audio = audios.map((audio) => {
      return <option value={audio.id}>{audio.nombre}</option>;
    });

    return audio;
  };

  const handleAudiosChange = (event) => {
    setAudioCategory(event.target.value);
  };

  // Traigo lista de generos musicales

  const [generoCategory, setGeneroCategory] = useState("");
  const [generos, setGeneros] = useState([{ id: "", nombre: "Todas" }]);

  useEffect(() => {
    fetch("http://localhost:8888/generosmusicales")
      .then((response) => response.json())
      .then((dataGeneros) => {
        setGeneros(dataGeneros);
      });
  }, []);

  const generosOptions = () => {
    let genre = generos.map((genero) => {
      return <option value={genero.id}>{genero.nombre}</option>;
    });

    return genre;
  };

  // onChange

  const handleGenerosChange = (event) => {
    setGeneroCategory(event.target.value);
  };

  const handleNombreAlbumChange = (event) => {
    setNombreAlbum(event.target.value);
  };

  const handleCatalogChange = (event) => {
    setCatalog(event.target.value);
  };

  const handleFechaLanzamientoChange = (event) => {
    setFechaLanzamiento(event.target.value);
  };

  const handleTracklistChange = (event) => {
    setTracklist(event.target.value);
  };

  const handleDescripChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleCoverChange = (event) => {
    setCover(event.target.files[0]);
    setPreviewCover(URL.createObjectURL(event.target.files[0]));
  };

  const handleSave = () => {
    const formData = new FormData();

    formData.append("artistCategory", artistCategory);
    formData.append("nombreAlbum", nombreAlbum);
    formData.append("catalog", catalog);
    formData.append("fechaLanzamiento", fechaLanzamiento);
    formData.append("seriesCategory", seriesCategory);
    formData.append("cover", cover);
    formData.append("tracklist", tracklist);
    formData.append("descripcion", descripcion);
    formData.append("precio", precio);
    formData.append("audioCategory", audioCategory);
    formData.append("generoCategory", generoCategory);

    let url = "http://localhost:8888/musica";

    let method = "POST";

    if (props.idProducto) {
      url += "/" + props.idProducto;
      method = "PUT";
    }

    fetch(url, {
      method: method,
      body: formData,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          props.onProductSaved(data.message);
        } else {
          Swal.fire({
            text: data.message,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (props.idProducto) {
      fetch("http://localhost:8888/musica/" + props.idProducto)
        .then((response) => response.json())
        .then((data) => {
          setArtistCategory(data.artistCategory);
          setNombreAlbum(data.nombreAlbum);
          setCatalog(data.catalog);
          setFechaLanzamiento(data.fechaLanzamiento);
          setSeriesCategory(data.series);
          setPrecio(data.precio);
          setDescripcion(data.descripcion);
          setTracklist(data.tracklist);
          setCover("");
          setPreviewCover(data.cover);
          setAudioCategory(data.audio);
          setGeneroCategory(data.genero);
        });
    } else {
      setArtistCategory("");
      setNombreAlbum("");
      setCatalog("");
      setFechaLanzamiento("");
      setSeriesCategory("");
      setCover("");
      setPreviewCover("");
      setTracklist("");
      setDescripcion("");
      setPrecio("");
      setAudioCategory("");
      setGeneroCategory("");
    }
  }, [props.idProducto]);

  return (
    <Modal show={props.show} onHide={props.handleHide} size="lg">
      <Modal.Header CloseButton>
        <Modal.Title>Publicacion</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Nombre Artista</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleArtistChange}
                  value={artistCategory}
                >
                  {artistasOptions()}
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Nombre Album</Form.Label>
                <Form.Control
                  type="text"
                  value={nombreAlbum}
                  onChange={handleNombreAlbumChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Catalogo</Form.Label>
                <Form.Control
                  type="text"
                  value={catalog}
                  onChange={handleCatalogChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Fecha Lanzamiento</Form.Label>
                <Form.Control
                  type="date"
                  value={fechaLanzamiento}
                  onChange={handleFechaLanzamientoChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Series</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleSeriesChange}
                  value={seriesCategory}
                >
                  {seriesOptions()}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="d-flex justify-content-center">
                {previewCover && (
                  <img style={{ height: "25vh" }} src={previewCover} />
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Cover</Form.Label>
                <Form.Control type="file" onChange={handleCoverChange} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Tracklist </Form.Label>
                <Form.Control
                  type="text"
                  value={tracklist}
                  onChange={handleTracklistChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Descripcion </Form.Label>
                <Form.Control
                  type="text"
                  value={descripcion}
                  onChange={handleDescripChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  value={precio}
                  onChange={handlePrecioChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Audio</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleAudiosChange}
                  value={audioCategory}
                >
                  {audiosOptions()}
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Genero</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleGenerosChange}
                  value={generoCategory}
                >
                  {generosOptions()}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductEditorModal;

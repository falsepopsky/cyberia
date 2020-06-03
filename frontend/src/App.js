import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import StorePage from "./components/StorePage";
import EventoPage from "./components/EventoPage";
import EventoDetalle from "./components/EventoDetalle";
import MusicaDetalle from "./components/MusicaDetalle";
import CargarTabla from "./components/CargarTabla";
import Swal from "sweetalert2";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [usuario, setUsuario] = useState(null);

  const onLoginSuccess = (loggedUser) => {
    setUsuario(loggedUser);
  };

  const onLogout = () => {
    let url = "http://localhost:8888/auth";

    fetch(url, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          Swal.fire({
            text: data.message,
            icon: "success",
          });
          setUsuario(null);
        } else {
          Swal.fire({
            title: "Error!",
            text: data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <Router>
      <NavigationBar
        user={usuario}
        handleLoginSuccess={onLoginSuccess}
        handleLogout={onLogout}
      />
      <Container fluid>
        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route exact path="/store" children={<StorePage />} />
          <Route exact path="/musicdetalle/:id" children={<MusicaDetalle />} />

          <Route exact path="/events" children={<EventoPage />} />
          <Route exact path="/eventsdetalle/:id" children={<EventoDetalle />} />

          <Route
            exact
            path="/tabla"
            children={<CargarTabla type="mispublicaciones" />}
          />

          <Redirect to={{ pathname: "/" }} />
        </Switch>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;

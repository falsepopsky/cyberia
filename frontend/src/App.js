import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/homepage';
import Footer from './components/Footer';
import StorePage from './pages/storepage';
import AdminPanel from './pages/adminpanel';
import About from './pages/about';
import EventoPage from './pages/eventopage';
import EventoDetalle from './components/EventoDetalle';
import MusicaDetalle from './components/MusicaDetalle';
import CargarTabla from './components/CargarTabla';
import Swal from 'sweetalert2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [admin, setAdmin] = useState(false);

  const onLoginSuccess = (loggedUser) => {
    setUsuario(loggedUser);
    if (loggedUser.nombre === 'admin') {
      setAdmin(true);
    }
  };

  const onLogout = () => {
    let url = 'http://localhost:8888/auth';

    fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          Swal.fire({
            text: data.message,
            icon: 'success',
          });
          setUsuario(null);
          setAdmin(false);
        } else {
          Swal.fire({
            title: 'Error!',
            text: data.message,
            icon: 'error',
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
        admin={admin}
      />
      <Container fluid>
        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route exact path="/store" children={<StorePage />} />
          <Route exact path="/musicdetalle/:id" children={<MusicaDetalle />} />

          <Route exact path="/events" children={<EventoPage />} />
          <Route exact path="/eventsdetalle/:id" children={<EventoDetalle />} />

          <Route exact path="/about" children={<About />} />

          {admin && (
            <>
              <Route exact path="/adminpanel" children={<AdminPanel />} />
              <Route
                exact
                path="/tabla"
                children={<CargarTabla type="mispublicaciones" />}
              />
            </>
          )}
          <Redirect to={{ pathname: '/' }} />
        </Switch>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;

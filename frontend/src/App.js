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
import EventoDetalle from './pages/eventdetail';
import MusicaDetalle from './pages/musicdetail';
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

  const onLoginSuccess = (usuarioLogueado) => {
    setUsuario(usuarioLogueado);
    if (usuarioLogueado.admin === 0) {
      setAdmin(true);
    }
  };

  const onLogout = async () => {
    let url = 'http://localhost:8888/api/auth';

    let response = await fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    });
    let data = await response.json();

    if (data.status === 'ok') {
      Swal.fire({
        text: data.message,
        icon: 'success',
        scrollbarPadding: false,
      });
      setUsuario(null);
      setAdmin(false);
    } else {
      Swal.fire({
        title: 'Error!',
        text: data.message,
        icon: 'error',
        scrollbarPadding: false,
      });
    }
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
          <Route exact path="/musicdetail/:id" children={<MusicaDetalle />} />

          <Route exact path="/events" children={<EventoPage />} />
          <Route exact path="/eventsdetail/:id" children={<EventoDetalle />} />

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

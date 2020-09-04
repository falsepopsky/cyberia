require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const config = require('../config/config');

// Iniciacion

const app = express();

// middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

// static files

app.use('*/images', express.static('public/images'));

// config

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type'],
  })
);

app.use(
  session({
    store: new FileStore(),
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    name: config.name,
  })
);

// routes

app.use(require('./routes/session.routes'));
app.use(require('./routes/contacto.routes'));
app.use(require('./routes/categorias.routes'));
app.use(require('./routes/publicaciones.musica.routes'));
app.use(require('./routes/publicaciones.evento.routes'));
app.use(require('./routes/calendario.eventos.routes'));

app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Escuchando en puerto: ${config.port}...`);
});

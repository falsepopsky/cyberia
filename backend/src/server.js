process.env.BASE_URL = 'http://localhost:8888/';
process.env.IMAGES_URL = process.env.BASE_URL + 'images/';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

/////////////// routes variables

// session

const sessionRoutes = require('./routes/session_routes');

// Iniciacion

const app = express();

// middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const auth = require('./auth');

// static files

app.use('*/images', express.static('public/images'));

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
    secret: 'yR9CeeU3G2',
    resave: false,
    saveUninitialized: true,
    name: 'cyberia',
  })
);

// routes

app.use('/auth', sessionRoutes);
app.use(require('./routes/categorias.routes'));
app.use(require('./routes/publicaciones.musica.routes'));
app.use(require('./routes/publicaciones.evento.routes'));
app.use(require('./routes/calendario.eventos.routes'));

app.listen(8888, () => {
  console.log('Escuchando...');
});

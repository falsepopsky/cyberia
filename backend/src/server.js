process.env.BASE_URL = "http://localhost:8888/";
process.env.IMAGES_URL = process.env.BASE_URL + "images/";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

/////////////// routes variables

// session

const sessionRoutes = require("./routes/session_routes");

// categorias

const artistasRoutes = require("./routes/categoria_artistas_routes");
const audiosRoutes = require("./routes/categoria_audios_routes");
const seriesRoutes = require("./routes/categoria_series_routes");
const generosRoutes = require("./routes/categoria_generos_routes");

// publicaciones de rutas especiales

const calendarioRoutes = require("./routes/calendario_eventos_routes");

// publicaciones normales

const eventosRoutes = require("./routes/publicaciones_eventos_routes");
const productosMusica = require("./routes/productos_musica_routes");
const publicacionsMusica = require("./routes/publicaciones_musica_routes");

const app = express();

// middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

const session = require("express-session");
const FileStore = require("session-file-store")(session);
const auth = require("./auth");

app.use(express.static("public"));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type"],
  })
);

app.use(
  session({
    store: new FileStore(),
    secret: "yR9CeeU3G2",
    resave: false,
    saveUninitialized: true,
    name: "cyberia",
  })
);

// routes

app.use("/auth", sessionRoutes);
app.use("/eventos", eventosRoutes);
app.use("/productosmusica", productosMusica);
app.use("/artistas", artistasRoutes);
app.use("/series", seriesRoutes);
app.use("/formatosaudio", audiosRoutes);
app.use("/generosmusicales", generosRoutes);
app.use("/listamusicaroutes", publicacionsMusica);
app.use("/calendario", calendarioRoutes);

app.listen(8888, () => {
  console.log("Escuchando...");
});

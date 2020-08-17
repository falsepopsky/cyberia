SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `cyberia_bd`
--
CREATE DATABASE IF NOT EXISTS `cyberia_bd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cyberia_bd`;


--
-- Estructura de tabla para la tabla `artistas`
--

CREATE TABLE IF NO EXISTS artistas (
  artistas_id INT(15) AUTO_INCREMENT,
  artistas_nombre VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY (artistas_id),
)

----------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkout`
--

CREATE TABLE IF NO EXISTS checkout (
  check_usr_id int(10) AUTO_INCREMENT,
  check_pm_id int(15) NOT NULL,
  check_total int(11) NOT NULL,
  PRIMARY KEY (check_usr_id),
)

----------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE IF NO EXISTS eventos (
  evento_id INT(15) NOT NULL,
  evento_nombre TINYTEXT NOT NULL,
  evento_banner VARCHAR(50) NOT NULL,
  evento_fecha DATE NOT NULL,
  evento_apertura TIME NOT NULL,
  evento_cierre TIME NOT NULL,
  evento_precio_puerta decimal(10,0) NOT NULL,
  evento_precio_advance decimal(10,0) NOT NULL,
  evento_lineup TEXT NOT NULL,
  evento_descripcion TEXT NOT NULL,
  evento_genero VARCHAR(50) NOT NULL,
  PRIMARY KEY (evento_id),
)

------------------- Estructura de tabla para la tabla 'formatos_audio' ------------

CREATE TABLE IF NO EXISTS formatos_audio (
  fa_id tinyint(5) NOT NULL,
  fa_nombre char(20) NOT NULL,
  PRIMARY KEY (fa_id),
)

------------------- Estructura de tabla para la tabla 'generos_musicales' ------------

CREATE TABLE IF NO EXISTS generos_musicales (
  gnr_id TINYINT(5) NOT NULL,
  gnr_nombre VARCHAR(30) NOT NULL,
  PRIMARY KEY (gnr_id)
)

------------------- Estructura de tabla para la tabla 'lista_deseados' ------------

CREATE TABLE IF NO EXISTS lista_deseados (
  ld_usr_id INT(10) NOT NULL,
  ld_pm_id INT(15) NOT NULL,
  PRIMARY KEY (ld_usr_id, ld_pm_id)
)

--
-- Estructura de tabla para la tabla `producto_musica`
--

CREATE TABLE `producto_musica` (
  `pm_id` int(15) NOT NULL,
  `pm_nombre_artista` int(15) NOT NULL,
  `pm_nombre_album` varchar(30) NOT NULL,
  `pm_catalogo` varchar(10) NOT NULL,
  `pm_fecha_lanzamiento` date NOT NULL,
  `pm_series` tinyint(5) NOT NULL,
  `pm_cover` varchar(70) NOT NULL,
  `pm_tracklist` text NOT NULL,
  `pm_descripcion` text NOT NULL,
  `pm_precio` decimal(10,0) NOT NULL,
  `pm_audio` tinyint(5) NOT NULL,
  `pm_genero` tinyint(5) NOT NULL
)

----------------------------------------------------------

--
-- Estructura de tabla para la tabla `series`
--

CREATE TABLE `series` (
  `series_id` tinyint(5) NOT NULL,
  `series_nombre` varchar(20) NOT NULL
)

----------------------------------------------------------


--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usr_id` int(10) NOT NULL,
  `usr_nombre` varchar(14) NOT NULL,
  `usr_email` varchar(30) NOT NULL,
  `usr_password` varchar(100) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 1
) 

----------------------------------------------------------


--
-- Indices de la tabla `artistas`
--
ALTER TABLE `artistas`
  ADD PRIMARY KEY (`artistas_id`) USING BTREE,
  ADD UNIQUE KEY `artistas_nombre` (`artistas_nombre`);

--
-- Indices de la tabla `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`check_usr_id`,`check_pm_id`),
  ADD KEY `check_pm_id` (`check_pm_id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`evento_id`) USING BTREE;

--
-- Indices de la tabla `formatos_audio`
--
ALTER TABLE `formatos_audio`
  ADD PRIMARY KEY (`fa_id`) USING BTREE,
  ADD UNIQUE KEY `fa_nombre` (`fa_nombre`) USING BTREE;

--
-- Indices de la tabla `generos_musicales`
--
ALTER TABLE `generos_musicales`
  ADD PRIMARY KEY (`gnr_id`) USING BTREE,
  ADD UNIQUE KEY `gnr_nombre` (`gnr_nombre`) USING BTREE;

--
-- Indices de la tabla `lista_deseados`
--
ALTER TABLE `lista_deseados`
  ADD PRIMARY KEY (`ld_usr_id`,`ld_pm_id`) USING BTREE,
  ADD KEY `ld_pm_id` (`ld_pm_id`);

--
-- Indices de la tabla `producto_musica`
--
ALTER TABLE `producto_musica`
  ADD PRIMARY KEY (`pm_id`),
  ADD KEY `pm_series` (`pm_series`) USING BTREE,
  ADD KEY `pm_nombre_artista` (`pm_nombre_artista`) USING BTREE,
  ADD KEY `pm_audio` (`pm_audio`),
  ADD KEY `pm_genero` (`pm_genero`);

--
-- Indices de la tabla `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`series_id`) USING BTREE,
  ADD UNIQUE KEY `series_nombre` (`series_nombre`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usr_id`),
  ADD UNIQUE KEY `usr_email` (`usr_email`);


--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `artistas`
--
ALTER TABLE `artistas`
  MODIFY `artistas_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `evento_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `formatos_audio`
--
ALTER TABLE `formatos_audio`
  MODIFY `fa_id` tinyint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `generos_musicales`
--
ALTER TABLE `generos_musicales`
  MODIFY `gnr_id` tinyint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `producto_musica`
--
ALTER TABLE `producto_musica`
  MODIFY `pm_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `series`
--
ALTER TABLE `series`
  MODIFY `series_id` tinyint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usr_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `checkout`
--
ALTER TABLE `checkout`
  ADD CONSTRAINT `checkout_ibfk_1` FOREIGN KEY (`check_usr_id`) REFERENCES `usuarios` (`usr_id`);

--
-- Filtros para la tabla `lista_deseados`
--
ALTER TABLE `lista_deseados`
  ADD CONSTRAINT `lista_deseados_ibfk_1` FOREIGN KEY (`ld_usr_id`) REFERENCES `usuarios` (`usr_id`),
  ADD CONSTRAINT `lista_deseados_ibfk_2` FOREIGN KEY (`ld_pm_id`) REFERENCES `producto_musica` (`pm_id`);

--
-- Filtros para la tabla `producto_musica`
--
ALTER TABLE `producto_musica`
  ADD CONSTRAINT `producto_musica_ibfk_2` FOREIGN KEY (`pm_nombre_artista`) REFERENCES `artistas` (`artistas_id`),
  ADD CONSTRAINT `producto_musica_ibfk_3` FOREIGN KEY (`pm_series`) REFERENCES `series` (`series_id`),
  ADD CONSTRAINT `producto_musica_ibfk_4` FOREIGN KEY (`pm_audio`) REFERENCES `formatos_audio` (`fa_id`),
  ADD CONSTRAINT `producto_musica_ibfk_5` FOREIGN KEY (`pm_genero`) REFERENCES `generos_musicales` (`gnr_id`);
COMMIT;


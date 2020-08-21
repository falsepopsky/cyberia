-- cyberia database
-- Original data and Current schema created by Rodrigo Toledo
-- Copyright (C) 2020

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "-03:00";


DROP DATABASE IF EXISTS cyberia_bd;
CREATE DATABASE IF NOT EXISTS cyberia_bd;
USE cyberia_bd;


CREATE TABLE usuarios (
  usr_id INT(10) NOT NULL AUTO_INCREMENT,
  usr_nombre VARCHAR(14) NOT NULL,
  usr_email VARCHAR(30) NOT NULL,
  usr_password VARCHAR(100) NOT NULL,
  usr_admin TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (usr_id),
  UNIQUE  KEY (usr_email)
);


INSERT INTO usuarios (usr_id, usr_nombre, usr_email, usr_password, usr_admin) VALUES
(1, 'testing', 'testing@gmail.com', 'testing', 1);


-- Estructura de tabla contacto


CREATE TABLE contacto (
  con_id INT(10) NOT NULL AUTO_INCREMENT,
  con_nombre VARCHAR(30) NOT NULL,
  con_email VARCHAR(30) NOT NULL,
  con_comentario TEXT NOT NULL,
  PRIMARY KEY (con_id)
);


-- Estructura de tabla artistas

CREATE TABLE artistas (
  artistas_id INT(15) NOT NULL AUTO_INCREMENT,
  artistas_nombre VARCHAR(50) NOT NULL,
  PRIMARY KEY (artistas_id),
  UNIQUE  KEY (artistas_nombre)
);

INSERT INTO artistas (artistas_id, artistas_nombre) VALUES
(1, 'Various Artists'),
(2, 'Sequential'),
(3, 'Move D'),
(4, 'Prompt'),
(5, 'adlib'),
(6, 'GAS'),
(7, 'minus'),
(8, 'kaliber'),
(9, 'Craig Richards'),
(10, 'Repair');


-- Estructura de tabla series


CREATE TABLE series (
  series_id TINYINT(5) NOT NULL AUTO_INCREMENT,
  series_nombre VARCHAR(20) NOT NULL,
  PRIMARY KEY (series_id),
  UNIQUE  KEY (series_nombre)
);


INSERT INTO series (series_id, series_nombre) VALUES
(1, 'Layer'), 
(2, 'Compilation'), 
(3, 'EP');


-- Estructura de tabla formatos_audio


CREATE TABLE formatos_audio (
  fa_id tinyint(5) NOT NULL AUTO_INCREMENT,
  fa_nombre char(20) NOT NULL,
  PRIMARY KEY (fa_id),
  UNIQUE  KEY (fa_nombre)
);


INSERT INTO formatos_audio (fa_id, fa_nombre) VALUES
(1, '320 Kbps'),
(2, 'FLAC / WAV');

-- Estructura de tabla generos_musicales


CREATE TABLE generos_musicales (
  gnr_id TINYINT(5) NOT NULL AUTO_INCREMENT,
  gnr_nombre VARCHAR(30) NOT NULL,
  PRIMARY KEY (gnr_id),
  UNIQUE  KEY (gnr_nombre)
);


INSERT INTO generos_musicales (gnr_id, gnr_nombre) VALUES
(1, 'House'),
(2, 'Deep House'),
(3, 'Tech House'),
(4, 'Techno'),
(5, 'Jazz'),
(6, 'Dub'),
(7, 'Ambient'),
(8, 'Trance'),
(9, 'Balearic/Downtempo'),
(10, 'Disco/Nu-Disco'),
(11, 'Progressive House'),
(12, 'Indie'),
(13, 'Rock'),
(14, 'Experimental/Electronic'),
(15, 'Funk'),
(16, 'Minimal');


-- Estructura de tabla Eventos


CREATE TABLE eventos (
  evento_id INT(15) NOT NULL AUTO_INCREMENT,
  evento_usr_id INT(10) NOT NULL,
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
  evento_fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP(),
  FOREIGN KEY (evento_usr_id) REFERENCES usuarios (usr_id),
  PRIMARY KEY (evento_id)
);

INSERT INTO eventos (evento_id, evento_usr_id, evento_nombre, evento_banner, evento_fecha, evento_apertura, evento_cierre, evento_precio_puerta, evento_precio_advance, evento_lineup, evento_descripcion, evento_genero, evento_fecha_publicacion) VALUES
(1, 1, 'Layer 03 Launch Party !', 'http://localhost:8888/images/prompt_13th.png', '2020-06-13', '00:00:00', '07:00:00', '200', '100', 'Prompt', 'Celebrating new LAYER 03 by Prompt on CYBERIA RECORDS, ALL NIGHT LONG !', 'House, Tech House, Techno', '2020-05-22 19:47:20'),
(2, 1, 'Layer 03 Release Party Pt. 2 Prompt N friends', 'http://localhost:8888/images/prompt_14th.png', '2020-06-14', '23:00:00', '07:00:00', '300', '150', 'Prompt\r\Gmj\r\Hans Bouffmhrye\r\Nebraska\r\Giovanni Damico', 'Prompt and his friends celebrating the new LAYER 03 !', 'House, Techno, Dub, Tech House', '2020-05-22 19:48:00'),
(3, 1, 'Slapfunk - Cyberia', 'http://localhost:8888/images/15.png', '2020-08-20', '23:00:00', '06:00:00', '300', '250', 'Sam Bangura b2b Greg\r\Brockmann\r\Ingi Visions\r\Sanja', 'We welcome renowned Amsterdam-based brand, Slapfunk, to Manchester for a marathon show at Brickworks with party starters, Ingi Visions, providing a 6 hour set. Joining them is dutch selector, Sanja and Libero residents.', 'House, Deep House, Dub', '2020-05-22 19:49:00'),
(4, 1, 'Lockdown Sessions', 'http://localhost:8888/images/1408769.png', '2020-08-21', '00:00:00', '07:00:00', '150', '90', 'Cleric\r\EAS\r\Kander b2b Kontain\r\Stef Mendesidis\r\Volvox', ' Turn off the lights, block out the windows and turn up some storming techno as Cleric invites Volvox and Stef Mendesidis along for a Lockdown Session.', 'Techno, Dub', '2020-05-22 19:50:00'),
(5, 1, 'Rave Luck Club', 'http://localhost:8888/images/eventonuevo.jpg', '2020-08-22', '00:00:00', '07:00:00', '200', '120', 'Tsurugi\r\nSleepy G\r\nDJ Dubu\r\Steven Tang\r\and many others !.', 'To commemorate Asian and Pacific Islander American Heritage Month (APAHM), two staples of the DC underground team up to celebrate with a stunning 15 hour streamed showcase of DJs and producers of Asian heritage.', 'House, Dub', '2020-05-22 19:51:00');


-- Estructura de tabla publicaciones_musica


CREATE TABLE publicaciones_musica (
  pm_id INT(15) NOT NULL AUTO_INCREMENT,
  pm_usr_id INT(10) NOT NULL,
  pm_nombre_artista INT(15) NOT NULL,
  pm_nombre_album VARCHAR(30) NOT NULL,
  pm_catalogo VARCHAR(10) NOT NULL,
  pm_fecha_lanzamiento DATE NOT NULL,
  pm_series TINYINT(5) NOT NULL,
  pm_cover VARCHAR(70) NOT NULL,
  pm_tracklist TEXT NOT NULL,
  pm_descripcion TEXT NOT NULL,
  pm_precio DECIMAL(10,0) NOT NULL,
  pm_audio TINYINT(5) NOT NULL,
  pm_genero TINYINT(5) NOT NULL,
  pm_fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP(),
  FOREIGN KEY (pm_usr_id) REFERENCES usuarios (usr_id),
  FOREIGN KEY (pm_nombre_artista) REFERENCES artistas (artistas_id),
  FOREIGN KEY (pm_series) REFERENCES series (series_id),
  FOREIGN KEY (pm_audio) REFERENCES formatos_audio (fa_id),
  FOREIGN KEY (pm_genero) REFERENCES generos_musicales (gnr_id),
  PRIMARY KEY (pm_id)
);


INSERT INTO publicaciones_musica (pm_id, pm_usr_id, pm_nombre_artista, pm_nombre_album, pm_catalogo, pm_fecha_lanzamiento, pm_series, pm_cover, pm_tracklist, pm_descripcion, pm_precio, pm_audio, pm_genero, pm_fecha_publicacion) VALUES
(1, 1, 2, 'Layer #01', 'CYBLAY001', '2020-05-04', 1, 'http://localhost:8888/images/layer_01.png', '01. Raff n Freddy - Listen (Original Mix)\r\n02. Tiny Trendies - The Sky Is Not Crying (Beutel Bill is Peak-Hour News Mix)\r\n03. B.P.T. - Moody (Montreal Men Vocal Dub Remix)04. C12 - Judy (Tunnel Line)\r\n05. Los Diablos Locos- El Locomotion\r\n06. Science Department - Repercussion\r\n07. Morel - True (The Faggot Is You) (Deep Dish Poof Daddy Dub)\r\n08. Morel - True (The Faggot Is You) (Deep Dish Poof Daddy Remix)\r\n09. Jondi & Spesh - We Are Connected (Active Love Mix)\r\n10. ABA Structure - Illusion\r\n11. Funk Function - Odysseus\r\n12. Science Department - Persuasion', 'Layer 01 Launch', '100', 2, 1, '2020-05-22 19:51:00'),
(2, 1, 3, 'Layer #02', 'CYBLAY002', '2020-06-01', 1, 'http://localhost:8888/images/layer_02.png', '01. Arttu Feat. Diamondancer - Tune In\r\n02. Reggie Dokes - Black Thoughts (Tribal Mix)\r\n03. Livio Improta - Mare010\r\n04. Norm Talley - Tell Me (Late Night Creeper Mix)\r\n05. Italojohnson - 06 A\r\n06. Alex Cortex - Oh Yeah\r\n07. Freestyle Man - Meeting At Dawn', 'Layer 02 Launch', '150', 2, 3, '2020-05-22 19:52:00'),
(3, 1, 4, 'Layer #03', 'CYBLAY003', '2020-07-06', 1, 'http://localhost:8888/images/layer_03.png', '01. Nick Cohen Presents Cushty - La La Li\r\n02. Sven Weisemann - Kiss Of Abana\r\n03. Pulshar - Nospheratu (Sven s Sphere Dub)\r\n04. Solomun & Stimming - Eiszauber (Lawrence Remix)\r\n05. Klute - Only Memory Is A Good One\r\n06. Zwo! - Static Refill\r\n07. Danny Howells - Laid Out (Danny s Horizontal Mix)\r\n08. Naughty - World Of A Woman (Green Men Mix)', 'Layer 03 Launch', '150', 2, 2, '2020-05-22 19:53:00'),
(4, 1, 5, 'Layer #04', 'CYBLAY004', '2020-08-03', 1, 'http://localhost:8888/images/layer_04.png', '01. Bamboo Lounge- Clone\r\n02. Jan Driver - Filter\r\n03. DJ Slug - Forerunner (Part 1)\r\n04. Canyon - Twighlight\r\n05. Blue Rock - The Rock\r\n06. TNT Presents Casa Royale - We All Need Love (Continuous Cool Mix)\r\n07. Little Big Man - Moving Mars\r\n08. Mikerobenics - Witchride\r\n09. 16C+ - Guarantee\r\n10. Wild Bunch - Groovelounge\r\n11. Tiësto, Montana & Storm - Gimme Some Sugar\r\n12. Lex - Rack 19\r\n13. Marco Bailey - Sweetbox (Silver & Kash Numba Remix)\r\n14. S.H.A.R.P. 2 - Perception 4\r\n15. Drumfire - Flying Squirrel Problem\r\n16. Superspy - Sumo V2\r\n', 'A classic and raw techno + trance from the last decade.\r\nBegin the journey with adlib !', '150', 2, 4, '2020-05-22 19:54:00'),
(5, 1, 8, 'Kaliber', 'CYBEP001', '2020-06-07', 3, 'http://localhost:8888/images/kaliber_15.jpg', '01. A (Side)\r\n02. B (Side)', 'Written and produced @ The Shooting Range.', '12', 1, 16, '2020-05-22 19:55:00'),
(6, 1, 6, 'Nah und Fern', 'CYBEP002', '2020-07-08', 3, 'http://localhost:8888/images/gas.jpg', '01. Nah und Fern', 'Wolfgang Voigt is music as Gas is about nostalgia and childhood, based on his memories of wandering the forests around Cologne. Built around a deep, steady thrum and orchestral samples, the music has a soft, cocooned feel to it, as if enclosed by coniferous trees and mossy ground.', '20', 1, 7, '2020-05-22 19:56:00'),
(7, 1, 10, 'Forgive & Forget', 'CYBEP003', '2020-07-14', 3, 'http://localhost:8888/images/repair.jpg', '01. Forgive & Forget (Richard Davis Remix)\r\n02. Forgive & Forget (Original)\r\n03. Cold Day (Isolation Mix)\r\n04. Time (A+B Mix)', 'Hailing from Wallaceburg Ontario, musically uncompromising twin brothers Matt and Mark Thibideau lay down synths and beats behind the lush sultry vocals of Dawn Lewis. In the Early 90s they formed their first band Wax Bean Orchard which garnered some local indie success. After a move to Toronto, the Thibideau brothers concentrated on their own various minimal house and techno solo projects for some years. In 2001 they re-sought Dawn Lewis to provide a more melodic nature to the music that was already based on written techno, intricate keyboard lines, complex synthesizer programming and housey drum beats.', '20', 1, 11, '2020-05-22 19:57:00'),
(8, 1, 9, 'The Nothing Special', 'CYBCOMP001', '2020-06-15', 2, 'http://localhost:8888/images/nothing_special.jpg', '01. Two Lone Swordsmen - Rico’s Helly\r\n02. Carl Finlow - Reprise\r\n03. Melchior Productions - Come Closer (Dub)\r\n04. Gemini - The Sound\r\n05. Housey Doingz - Flying Saucers\r\n06. San Proper & Awanto 3 - Black Burger\r\n07. Arne Weinberg - My Testimony\r\n08. G-Man - El Jem\r\n09. Conscious Minds - Expressions\r\n10. Eco Tourist-Magelonic\r\n11. L.I.E.S. - Comeback Dust\r\n12. Joel Mull - Leaving Ground\r\n13. Marcel Janovsky - Vamos A Otro Piso\r\n14. Loop Hotel - Room 201\r\n15. Conforce - Rare Education16. Johnny Fiasco - Kalimba\r\n17. Convextion - Premiata\r\n18. Maurice Fulton - Space\r\n19. Semtek - Lotos Eaters (Neville Watson Remix)\r\n20. $tinkworx - Los Gatos Lloros', 'As music director and main resident DJ for the club is Saturday night parties, Richards has a profound influence on what you hear at Cyberia.\r\nFor the past few years, he is channeled the more underground side of his taste into The Nothing Special, a series that places him amongst experimental-leaning live acts. Past guests have included Pole, Shackleton and T++, and in each case Richards is tasked with, as he puts it, setting the scene for each one... Playing a gentle deep warm up for Moritz Von Oswald, or a twitchy electro set before Dopplereffekt, or a disco set before Emperor Machine, all of which I am capable of because of the variety within my residency.\r\nAs a mix, The Nothing Special follows the same guideline as the night, focusing on deeper cuts from artists like Arne Weinberg, Melchior Productions and Two Lone Swordsmen.', '70', 2, 1, '2020-05-22 19:58:00'),
(9, 1, 7, 'Body Language', 'CYBCOMP002', '2020-07-20', 2, 'http://localhost:8888/images/body_laguage.png', '01. Dinamoe - The Green French One (Original Mix)\r\n02. Kalabrese - Cityblues\r\n03. Sascha Dive - Street Life (Samuel Davis Dark Groove Remix)\r\n04. Kid Sublime - Basement Works Vol 1\r\n05. Johnny D - Orbitalife\r\n06. Martinez - Retrospective\r\n07. Diz - No Way\r\n08. Johnny D - Tramodyssee\r\n09. Mlle Caro & Franck Garcia - Dead Souls (Radio Slave Long Distance Kiss Mix)\r\n10. Prompt - Ambee', 'As Audion, Matthew Dear has been wowing audiences around the globe with his stunning live sets; as Matthew Dear is Big Hands, the producer indulges his jones for being a Bowie-esque frontman; as Matthew Dear...well...what does Matthew Dear do these days? Apparently the answer is DJ some of minimal techno and deep house is greatest hits, if the tracklisting to Body Language is any indication. The gang is all here: Johnny D is Orbitalife, DJ Koze is I Want to Sleep, a Radio Slave remix, even a track predictably titled Get Deep. It is nothing if not a barometer of where the scene is today, with Kalabrese, Sascha Dive and an exclusive Dear track also making the cut.', '70', 2, 3, '2020-05-22 19:59:00'),
(10, 1, 6, 'Narkpop', 'CYBCOMP003', '2020-08-02', 2, 'http://localhost:8888/images/narkopop.png', '01. Narkopop 1\r\n02. Narkopop 2\r\n03. Narkopop 3\r\n04. Narkopop 4\r\n05. Narkopop 5\r\n06. Narkopop 6\r\n07. Narkopop 7\r\n08. Narkopop 8', 'The German artist released four albums of dense, symphonic ambient techno under the alias in the late 90s and early 2000s, which are widely understood to be among the most enduring recordings of contemporary electronic music. The project brought together the throb of techno, images of the country is forests, and references to the German Romantic classical tradition. Despite being just one of more than 30 aliases attributed to Voigt, Gas remains an influential force to this day.\r\n\r\nThe new album, which is called Narkopop and spans 11 tracks, is the first original Gas material since Pop in 2000.', '70', 2, 7, '2020-05-22 20:00:00');


-- Estructura de tabla checkout


CREATE TABLE checkout (
  check_usr_id INT(10) NOT NULL,
  check_pm_id INT(15) NOT NULL,
  check_total INT(11) NOT NULL,
  FOREIGN KEY (check_usr_id) REFERENCES usuarios (usr_id),
  PRIMARY KEY (check_usr_id, check_pm_id)
);


-- Estructura de tabla lista_deseados


CREATE TABLE lista_deseados (
  ld_usr_id INT(10) NOT NULL,
  ld_pm_id INT(15) NOT NULL,
  FOREIGN KEY (ld_usr_id) REFERENCES usuarios (usr_id),
  FOREIGN KEY (ld_pm_id) REFERENCES publicaciones_musica (pm_id),
  PRIMARY KEY (ld_usr_id, ld_pm_id)
);

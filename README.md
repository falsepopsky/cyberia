# cyberia

Es un proyecto basado en un nightclub o discoteca, en el cual promueve a través de su sitio los eventos que se realizan en dicho lugar y además de proveer un store local el cual contiene sus propias publicaciones de su sello discográfico.

## Herramientas usadas

- Backend: Node.js, Express, bcrypt, dotenv, etc.
- Frontend: HTML, CSS, Javascript, React, react-big-calendar, React Bootstrap, SweetAlert2.
- Base de datos: MySQL
- Otros: pnpm, docker | xammp

## Como Iniciar el proyecto

### 1. Clonar repositorio

```
git clone git@github.com:falsepopsky/cyberia.git --depth=1
```

### 2. Run Docker

Para levantar la base de datos (MySQL) y una interfaz gráfica para la base de datos (phpMYAdmin). Se requiere:

- Docker [windows](https://docs.docker.com/desktop/install/windows-install/), [linux](https://docs.docker.com/engine/install/)
- Docker compose [install](https://docs.docker.com/compose/install/#installation-scenarios)

Si se cumple con los requisitos situarse en el directorio `./backend` y ejecutar el comando.

```
docker compose up
```

Para acceder:

### a la interfaz `http://localhost:8080/`

- user: root
- password: secret123

### a la base de datos `localhost:3306`

### 3. Alternativa a docker

- Descargar e instalar [XAMPP](https://www.apachefriends.org/es/index.html).
- Iniciar en el control de panel de `XAMPP`, `Apache` y `MySQL`.
- Exportar la base de datos `cyberia_bd` de la carpeta `backend/sql`.

### 4. Run Backend

```
- En .dir /backend escribir el comando ' npm install '.
- luego correr el siguiente script ' npm run dev '.
```

### 5. Run Frontend

```
- En .dir /frontend escribir el comando ' npm install '.
- luego correr el siguiente script ' npm run start '.
```

## API Endpoints

Todos los endpoints de la api comienzan con /api/ ejemplo /api/auth

En algunos endpoints como `GET` `PUT` `POST` `DELETE` requieren `Autorización`, este valor es unicamente obtenido por `auth` `POST`.

| Nombre | Descripción | Método | Autorización |
| --- | --- | --- | --- |
| `auth` | login, logout | `POST` `DELETE` |  |
| `auth/signup` | sign up | `POST` | `NO` |
| `contacto` | contact form | `GET` `POST` | `YES` - `NO` |
| `contacto/:id` | get contact | `DELETE` | `YES` |
| `calendario` | events for react calendar | `GET` | `NO` |
| `eventos` | all the events from the nightclub | `GET` `POST` | `NO` - `YES` |
| `eventos/:id` | obtain, modify and delete one event | `GET` `PUT` `DELETE` | `NO` - `YES` - `YES` |

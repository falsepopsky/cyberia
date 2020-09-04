# cyberia

Es un proyecto basado en un nightclub o discoteca, en el cual promueve a través de su sitio los eventos que se realizan en dicho lugar y además de proveer un store local el cual contiene sus propias publicaciones de su sello discográfico.

## Herramientas usadas

- Backend: Node.js, Express, npm (bcrypt, dotenv, etc.), MySQL.
- Frontend: HTML, CSS, Javascript, React, react-big-calendar, React Bootstrap, SweetAlert2.

## Como Iniciar el proyecto

### 1. Clonar repositorio

```
$ git clone git@github.com:falsepopsky/cyberia.git
```

### 2. Instalar MySQL

Para correrlo rápido descargar de: https://www.apachefriends.org/es/index.html .
Luego exportar la base de datos `cyberia_bd` de la carpeta `backend/sql`.

### 3. Run Backend

```
- En .dir /backend escribir el comando ' npm install '.
- luego correr el siguiente script ' npm run dev '.
```

### 4. Run Frontend

```
- En .dir /frontend escribir el comando ' npm install '.
- luego correr el siguiente script ' npm run start '.
```

## API Endpoints

Todos los endpoints de la api comienzan con /api/ ejemplo /api/auth

En algunos endpoints como `GET` `PUT` `POST` `DELETE` requieren `Autorización`, este valor es unicamente obtenido por `auth` `POST`.

| Nombre         | Descripción                         | Método               | Autorización         |
| -------------- | ----------------------------------- | -------------------- | -------------------- |
| `auth`         | login, logout                       | `POST` `DELETE`      |                      |
| `auth/signup`  | sign up                             | `POST`               | `NO`                 |
| `contacto`     | contact form                        | `GET` `POST`         | `YES` - `NO`         |
| `contacto/:id` | get contact                         | `DELETE`             | `YES`                |
| `calendario`   | events for react calendar           | `GET`                | `NO`                 |
| `eventos`      | all the events from the nightclub   | `GET` `POST`         | `NO` - `YES`         |
| `eventos/:id`  | obtain, modify and delete one event | `GET` `PUT` `DELETE` | `NO` - `YES` - `YES` |

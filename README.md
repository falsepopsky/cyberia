# cyberia

Es un proyecto basado en un nightclub o discoteca en el cual promueve a través de su sitio los eventos que se realizan en dicho lugar y además de proveer un store local el cual contiene sus propias publicaciones de su sello discográfico.

## Herramientas usadas

- Backend: Node.js, Express, npm (bcrypt, dotenv, etc.), MySQL.
- Frontend: HTML, CSS, Javascript, React, react-big-calendar, React Bootstrap, SweetAlert2.

## Como Iniciar el proyecto

```
- En .dir /backend y /frontend, escribir el comando ' npm install '.
- En .dir /backend escribir ' npm run dev '.
- En .dir /frontend escribir ' npm run start '.
```

### API Endpoints

Todos los endpoints de la api comienzan con /api/ ejemplo /api/auth

En todos los endpoints de `PUT` `POST` `DELETE` requieren `Autorización`, este valor es obtenido por `auth` `POST`.

| Nombre        | Descripción         | Método                |
| ------------- | ------------------- | --------------------- |
| `auth`        | login, logout       | `POST` `DELETE`       |
| `auth/signup` | sign up             | `POST`                |
| `contacto`    | contact form        | `GET` `POST` `DELETE` |
| `calendario`  | events for calendar | `GET`                 |

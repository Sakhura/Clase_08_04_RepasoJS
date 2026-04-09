# 🚀 API REST - Node.js + Express + Sequelize + SQLite

API REST de usuarios construida con Node.js, Express, Sequelize y SQLite.

---

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)

---

## 📁 Estructura del proyecto

```
mi-proyecto/
├── src/
│   ├── config/
│   │   └── database.js          # Configuración y conexión a la BD
│   ├── controllers/
│   │   └── usuarioController.js # Lógica de negocio
│   ├── models/
│   │   └── Usuario.js           # Modelo de la tabla usuarios
│   ├── routes/
│   │   └── usuarioRoutes.js     # Definición de rutas
│   └── app.js                   # Configuración de Express
├── .env                         # Variables de entorno (no subir a GitHub)
├── .gitignore
├── package.json
└── server.js                    # Punto de entrada
```

---

## ⚙️ Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/mi-proyecto.git
cd mi-proyecto
```

2. Instalar dependencias

```bash
npm install
```

3. Crear el archivo `.env` en la raíz del proyecto

```env
PORT=3000
DB_STORAGE=./database.sqlite
```

4. Iniciar el servidor

```bash
node server.js
```

Si todo está bien, verás esto en la consola:

```
✅ Conexión a la BD exitosa
📦 Tablas sincronizadas
🚀 Servidor corriendo en http://localhost:3000
```

---

## 📦 Dependencias

| Paquete | Versión | Descripción |
|---------|---------|-------------|
| `express` | ^4.x | Framework web para Node.js |
| `sequelize` | ^6.x | ORM para bases de datos relacionales |
| `sqlite3` | ^5.x | Driver para SQLite |
| `dotenv` | ^16.x | Manejo de variables de entorno |

---

## 🛣️ Endpoints disponibles

Base URL: `http://localhost:3000/api/usuarios`

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/usuarios` | Obtener todos los usuarios |
| `GET` | `/api/usuarios/:id` | Obtener un usuario por ID |
| `POST` | `/api/usuarios` | Crear un nuevo usuario |
| `PUT` | `/api/usuarios/:id` | Actualizar un usuario |
| `DELETE` | `/api/usuarios/:id` | Eliminar un usuario |

---

## 📬 Ejemplos de uso

### Crear un usuario (POST)

```http
POST http://localhost:3000/api/usuarios
Content-Type: application/json

{
  "nombre": "Ana",
  "email": "ana@mail.com",
  "edad": 25
}
```

**Respuesta:**
```json
{
  "id": 1,
  "nombre": "Ana",
  "email": "ana@mail.com",
  "edad": 25,
  "updatedAt": "2024-01-01T00:00:00.000Z",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

### Obtener todos los usuarios (GET)

```http
GET http://localhost:3000/api/usuarios
```

---

### Obtener un usuario por ID (GET)

```http
GET http://localhost:3000/api/usuarios/1
```

---

### Actualizar un usuario (PUT)

```http
PUT http://localhost:3000/api/usuarios/1
Content-Type: application/json

{
  "edad": 26
}
```

---

### Eliminar un usuario (DELETE)

```http
DELETE http://localhost:3000/api/usuarios/1
```

**Respuesta:**
```json
{
  "mensaje": "Usuario eliminado correctamente"
}
```

---

## 🗄️ Modelo de datos

### Usuario

| Campo | Tipo | Restricciones |
|-------|------|--------------|
| `id` | INTEGER | PK, autoincrement |
| `nombre` | STRING | NOT NULL |
| `email` | STRING | NOT NULL, UNIQUE |
| `edad` | INTEGER | NOT NULL |
| `createdAt` | DATE | Auto |
| `updatedAt` | DATE | Auto |

---

## 🧰 Herramientas recomendadas para probar la API

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (extensión de VS Code)
- [Insomnia](https://insomnia.rest/)

---

## 🔒 .gitignore recomendado

```
node_modules/
.env
database.sqlite
```

---

## 📄 Licencia

Proyecto Educativo - Repaso BootCamp JavaScript - Abril 2026
const express = require("express");
const { Client } = require("pg");
const app = express();
const port = 3000;

// Configurar la conexión con PostgreSQL usando la URL de Render
const client = new Client({
  connectionString: "postgresql://root:djc2i8imh1YH0GJR2R42IVobfscCb4W7@dpg-cu25qhd6l47c73a99hm0-a/cne_3dwv",
  ssl: { rejectUnauthorized: false }, // Esto es necesario para conexiones seguras en algunos servicios como Render.
});

// Intentamos conectar a la base de datos
client.connect()
  .then(() => {
    console.log("Conectado a la base de datos PostgreSQL en Render");
  })
  .catch(err => {
    console.error("Error al conectar con la base de datos:", err);
  });

// Definir la ruta principal
app.get("/", (req, res) => {
  const query = "SELECT * FROM usuarios";  // Cambiar nombre de la tabla si es diferente

  client.query(query)
    .then(result => {
      res.json(result.rows);  // Responder con los datos de los usuarios
    })
    .catch(err => {
      res.status(500).send("Error al obtener los usuarios: " + err.message);
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

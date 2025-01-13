const express = require("express");
const { Client } = require("pg"); // Importamos el cliente PostgreSQL
const app = express();
const port = 3000;

// Configuración de conexión con la base de datos de Render
const client = new Client({
  connectionString: "postgresql://root:djc2i8imh1YH0GJR2R42IVobfscCb4W7@dpg-cu25qhd6l47c73a99hm0-a/cne_3dwv"
});

// Conectar con la base de datos PostgreSQL
client.connect()
  .then(() => {
    console.log("Conectado a la base de datos PostgreSQL en Render");
  })
  .catch(err => {
    console.error("Error al conectar con la base de datos:", err);
  });

// Ruta principal para obtener los usuarios
app.get("/", (req, res) => {
  const query = "SELECT * FROM usuarios"; // Consulta para obtener todos los usuarios
  client.query(query)
    .then(result => {
      res.json(result.rows); // Enviar los usuarios como respuesta en formato JSON
    })
    .catch(err => {
      res.status(500).send("Error al obtener los usuarios: " + err.message);
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

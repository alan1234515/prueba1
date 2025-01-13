const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Definir la ruta principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Próximamente</title>
      <style>
        /* Estilos básicos */
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f9;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .container {
          text-align: center;
          background-color: white;
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #333;
          font-size: 48px;
          margin-bottom: 20px;
        }

        .message {
          color: #777;
          font-size: 24px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>¡Sitio en Construcción!</h1>
        <p class="message">Próximamente...</p>
        <p class="message">Autor: Alan Lajones</p>
      </div>
    </body>
    </html>
  `);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Directorio donde se encuentra la build de Vite
const buildPath = path.join(__dirname, 'dist');

// Servir archivos estáticos
app.use(express.static(buildPath));

// Manejar rutas SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.get('/healthz', (req, res) => {
    res.json({
        'status': 'ok',
    })
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

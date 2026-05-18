const express = require('express');
const path = require('path');

const app = express();

// libera arquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// porta 80
const PORT = 80;

// inicia servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//servidor e rota
const express = require('express'); //importa o expresse
const app = express();  //executa o express

app.listen(3000, () => {     
    console.log('Servidor rodando!');
});
